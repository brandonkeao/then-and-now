"use client";

import { useActionState } from "react";
import { saveProfile, type ProfileActionState } from "../actions/profile";
import { Button } from "@/shared/ui/button";
import { fieldDescriptionIds, FormField } from "@/shared/ui/form-field";
import { InlineMessage } from "@/shared/ui/inline-message";
import { Input, Select } from "@/shared/ui/input";
import styles from "./profile-form.module.css";

const initialState: ProfileActionState = {};

type ProfileFormProps = {
  adultAcknowledged?: boolean;
  defaultName?: string;
  defaultTimezone: string;
  timezones: string[];
};

export function ProfileForm({
  adultAcknowledged = false,
  defaultName,
  defaultTimezone,
  timezones,
}: ProfileFormProps) {
  const [state, action, pending] = useActionState(saveProfile, initialState);
  const displayNameError = state.fieldErrors?.displayName;
  const timezoneError = state.fieldErrors?.timezone;
  const acknowledgmentError = state.fieldErrors?.adultAcknowledgment;

  return (
    <form action={action} className={styles.form} noValidate>
      {state.formError ? (
        <InlineMessage title="Profile not saved" tone="error">
          <p>{state.formError}</p>
        </InlineMessage>
      ) : null}
      <FormField
        error={displayNameError}
        hint="Use the name someone close to you would recognize."
        htmlFor="displayName"
        label="Display name"
      >
        <Input
          aria-describedby={fieldDescriptionIds(
            "displayName",
            "Use the name someone close to you would recognize.",
            displayNameError,
          )}
          aria-invalid={Boolean(displayNameError)}
          autoComplete="name"
          defaultValue={defaultName}
          id="displayName"
          maxLength={80}
          name="displayName"
          required
        />
      </FormField>
      <FormField
        error={timezoneError}
        hint="We use this only to time invitations and gentle reminders appropriately."
        htmlFor="timezone"
        label="Timezone"
      >
        <Select
          aria-describedby={fieldDescriptionIds(
            "timezone",
            "We use this only to time invitations and gentle reminders appropriately.",
            timezoneError,
          )}
          aria-invalid={Boolean(timezoneError)}
          defaultValue={defaultTimezone}
          id="timezone"
          name="timezone"
          required
        >
          {timezones.map((timezone) => (
            <option key={timezone} value={timezone}>
              {timezone.replaceAll("_", " ")}
            </option>
          ))}
        </Select>
      </FormField>
      {adultAcknowledged ? (
        <>
          <input name="adultAcknowledgment" type="hidden" value="on" />
          <p className={styles.confirmed}>Adult eligibility confirmed.</p>
        </>
      ) : (
        <>
          <label className={styles.acknowledgment}>
            <input
              aria-describedby={
                acknowledgmentError ? "adultAcknowledgment-error" : undefined
              }
              aria-invalid={Boolean(acknowledgmentError)}
              name="adultAcknowledgment"
              required
              type="checkbox"
            />
            <span>I confirm that I am 18 or older.</span>
          </label>
          {acknowledgmentError ? (
            <p className={styles.fieldError} id="adultAcknowledgment-error">
              {acknowledgmentError}
            </p>
          ) : null}
        </>
      )}
      <Button loading={pending} type="submit">
        {pending ? "Saving profile" : "Save and open my Exchange"}
      </Button>
    </form>
  );
}
