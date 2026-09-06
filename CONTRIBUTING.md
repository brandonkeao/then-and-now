# Contributing

Then & Now is a source-available portfolio project rather than an open-source package. The public repository exists to make the product-development work inspectable and to invite thoughtful feedback.

## Good ways to participate

- Open a bug report with a clear reproduction and expected behavior.
- Suggest an accessibility or usability improvement with the affected route and context.
- Question a requirement or architecture decision and link to the relevant public document.
- Share a small proposed change before investing in an implementation.

Please do not include private relationship content, real email addresses, access tokens, or security details in an issue. Use the private process in [SECURITY.md](SECURITY.md) for vulnerabilities.

## Before proposing code

Open an issue first. A discussion may show that a suggestion belongs outside the current release, conflicts with a trust boundary, or needs a product decision before implementation.

If a contribution is invited:

1. Branch from `main`.
2. Keep the change tied to one issue and one observable outcome.
3. Use the existing tokens and component patterns.
4. Add the smallest test that proves the behavior and prevents regression.
5. Run `pnpm check` and the relevant database or browser suite.
6. Update the public requirement or decision record if the product contract changed.

Submitting material does not change the repository's All Rights Reserved license. Any separate rights or assignment terms must be agreed in writing before a contribution is accepted.
