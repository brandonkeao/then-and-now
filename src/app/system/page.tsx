import { notFound } from "next/navigation";
import { getCurrentUser } from "@/modules/identity/data/get-current-user";
import { Button } from "@/shared/ui/button";
import { Dialog } from "@/shared/ui/dialog";
import { FormField } from "@/shared/ui/form-field";
import { InlineMessage } from "@/shared/ui/inline-message";
import { Input } from "@/shared/ui/input";
import { PageHeader } from "@/shared/ui/page-header";
import { StatusBadge } from "@/shared/ui/status-badge";
import { Textarea } from "@/shared/ui/textarea";
import styles from "./system.module.css";

export const dynamic = "force-dynamic";

const swatches = [
  ["Paper / canvas", styles.paper],
  ["Paper / surface", styles.surface],
  ["Ink / primary", styles.ink],
  ["Then / rust", styles.rust],
  ["Now / cobalt", styles.blue],
  ["Success", styles.success],
  ["Warning", styles.warning],
  ["Danger", styles.danger],
];

export default async function SystemPage() {
  if (process.env.NODE_ENV === "production") {
    const user = await getCurrentUser();
    if (!user) notFound();
  }

  return (
    <main className={styles.main} id="main-content">
      <PageHeader
        description="A private implementation specimen for the Editorial Instrument system and its Intimate Archive expression."
        eyebrow="System · Alpha 0.2"
        title="Editorial Instrument"
      />

      <section className={styles.section}>
        <h2>Foundation colors</h2>
        <div className={styles.swatches}>
          {swatches.map(([label, className]) => (
            <article className={`${styles.swatch} ${className}`} key={label}>
              <div aria-hidden="true" className={styles.swatchColor} />
              <p>{label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Type roles</h2>
        <div className={styles.typeSpecimens}>
          <p className={styles.displayType}>A story from then, understood now.</p>
          <p className={styles.narrativeType}>
            Meaning lives in the prompt, the preface, and the reflection. Narrative text
            is given enough room to sound like a person—not a form response.
          </p>
          <p className={styles.uiType}>
            Controls remain direct, compact, and easy to scan.
          </p>
          <p className={styles.monoType}>Exchange 01 · Choice sealed · 09:42</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Actions and status</h2>
        <div className={styles.row}>
          <Button>Lock my choice</Button>
          <Button variant="secondary">Keep editing</Button>
          <Button variant="quiet">Return later</Button>
          <Button disabled>Unavailable</Button>
          <StatusBadge tone="warning">Waiting for Alex</StatusBadge>
          <StatusBadge tone="success">Both choices are in</StatusBadge>
          <StatusBadge tone="accent">Draft saved</StatusBadge>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Forms</h2>
        <div className={styles.formDemo}>
          <FormField
            hint="This title stays private until both choices are locked."
            htmlFor="sample-title"
            label="Title"
          >
            <Input id="sample-title" placeholder="The book or film" />
          </FormField>
          <FormField htmlFor="sample-preface" label="Why I chose this for you">
            <Textarea id="sample-preface" placeholder="I chose this because…" />
          </FormField>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Messages and recovery</h2>
        <div className={styles.stateGrid}>
          <InlineMessage title="Your draft is saved">
            <p>
              You can leave and return without revealing anything to the other person.
            </p>
          </InlineMessage>
          <InlineMessage title="Alex is still choosing" tone="warning">
            <p>
              Your choice remains sealed. You may withdraw it while Alex is still
              drafting.
            </p>
          </InlineMessage>
          <InlineMessage title="Choice not locked" tone="error">
            <p>Your draft is still safe. Review the missing commitment and try again.</p>
          </InlineMessage>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Dialog behavior</h2>
        <Dialog
          confirmLabel="Lock my choice"
          description="After you lock, you can withdraw only while the other person is still choosing."
          title="Seal this choice?"
          triggerLabel="Review confirmation dialog"
        >
          <InlineMessage title="Private until both are ready">
            <p>The other person cannot retrieve this content before the mutual reveal.</p>
          </InlineMessage>
        </Dialog>
      </section>
    </main>
  );
}
