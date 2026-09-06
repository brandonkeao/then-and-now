# Security policy

## Supported releases

Then & Now is pre-pilot Alpha software. Only the current `main` branch receives security fixes. It is not approved for sensitive or meaningful personal data.

## Report a vulnerability

Do not open a public issue. Use GitHub's private vulnerability reporting feature for this repository, or contact the repository owner privately through the contact method on their GitHub profile.

Include:

- the affected route, component, or data object;
- prerequisites and a minimal reproduction;
- expected and observed authorization behavior;
- whether another person's sealed contribution, reflection, identity, or Space could be exposed;
- any evidence, with secrets and personal content removed.

## Trust-critical properties

- Signed-out and unrelated users cannot retrieve protected data.
- A member cannot retrieve a partner's contribution content before mutual reveal.
- Reveal is atomic, symmetric, idempotent, and safe under concurrent requests.
- Private contribution and reflection text never enters general analytics or ordinary logs.
- Invitation and authentication tokens never enter analytics, logs, or public URLs beyond their necessary exchange path.
- Preview environments cannot connect to production data.

These properties are release gates. A credible failure should stop pilot activity until contained and verified.
