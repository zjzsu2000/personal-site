# Personal Site

Minimal English-first portfolio site for career visibility, built with Docusaurus and designed for GitHub Pages.

## Scope

V1 includes:

- Home
- Writing
- Projects
- About
- External links: GitHub, LinkedIn, X

V1 intentionally does not include docs, CMS, database, newsletter, comments, analytics dashboard, full i18n, or an online Handoff Reader playground.

## Local Development

```bash
npm install
npm run start
```

## Build

```bash
npm run build
```

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and deploys `build/` to GitHub Pages.

Before public launch, update these placeholders in `docusaurus.config.ts`:

- GitHub profile URL
- X profile URL
- Handoff Reader repository URL, if different
- `url`, `baseUrl`, `organizationName`, and `projectName` for the final GitHub Pages repo

## Public Safety

Before public launch, review all site copy, README text, and linked assets against the private/public safety boundaries in the planning docs.
