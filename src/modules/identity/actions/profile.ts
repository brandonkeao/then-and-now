"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireCurrentUser } from "../data/get-current-user";
import { createClient } from "@/shared/supabase/server";

export type ProfileActionState = {
  fieldErrors?: {
    adultAcknowledgment?: string;
    displayName?: string;
    timezone?: string;
  };
  formError?: string;
};

const profileSchema = z.object({
  displayName: z
    .string()
    .trim()
    .min(2, "Enter the name the other person should see.")
    .max(80, "Keep the display name under 80 characters."),
  timezone: z.string().refine((value) => supportedTimezones().has(value), {
    message: "Choose a valid timezone.",
  }),
  adultAcknowledgment: z.literal("on", {
    error: "Confirm that you are 18 or older to continue.",
  }),
});

export async function saveProfile(
  _previousState: ProfileActionState,
  formData: FormData,
): Promise<ProfileActionState> {
  const result = profileSchema.safeParse({
    displayName: formData.get("displayName"),
    timezone: formData.get("timezone"),
    adultAcknowledgment: formData.get("adultAcknowledgment"),
  });

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return {
      fieldErrors: {
        adultAcknowledgment: errors.adultAcknowledgment?.[0],
        displayName: errors.displayName?.[0],
        timezone: errors.timezone?.[0],
      },
    };
  }

  const user = await requireCurrentUser();
  const supabase = await createClient();
  const { data: existingProfile, error: profileReadError } = await supabase
    .from("profiles")
    .select("adult_acknowledged_at")
    .eq("user_id", user.id)
    .maybeSingle();

  if (profileReadError) {
    return {
      formError:
        "Your profile could not be verified. Your entries are still here; try again.",
    };
  }

  const { error } = await supabase
    .from("profiles")
    .update({
      adult_acknowledged_at:
        existingProfile?.adult_acknowledged_at ?? new Date().toISOString(),
      display_name: result.data.displayName,
      timezone: result.data.timezone,
      updated_at: new Date().toISOString(),
    })
    .eq("user_id", user.id);

  if (error) {
    return {
      formError:
        "Your profile could not be saved. Your entries are still here; try again.",
    };
  }

  revalidatePath("/app", "layout");
  redirect("/app");
}

function supportedTimezones() {
  return new Set(Intl.supportedValuesOf("timeZone"));
}
