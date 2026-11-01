# SkillNorth indexation enablement — 1 November 2026

## Changes

- `_config.yml`: changed `launch_mode` from `true` to `false`.
- `_layouts/default.html`: public pages now emit `index,follow,max-image-preview:large`; page-level `noindex: true` remains available for future exclusions.
- `robots.txt`: project-level file references the sitemap. Because this is a GitHub Pages project site served below `/SkillNorth/`, this file is not the host-root `robots.txt`; Google requires a robots file at the host root to control that host. Page-level meta robots directives are therefore the operative indexation signal, and the owner should submit the sitemap directly in Search Console.
- `privacy/index.md`: replaced the draft placeholder with a description of the current static site, GitHub Pages hosting logs, no first-party analytics/forms in this build, and external Alison links.
- `contact/index.md`: publishes `skillnorthsite@gmail.com` as the public project contact; the same address is rendered from `_config.yml` in the footer.
- Affiliate disclosure and operational documentation updated.

## Important limitations

Technical indexation is enabled, but search engines decide whether and when to index URLs. The site owner has provided a public contact email (`skillnorthsite@gmail.com`), which is now configured in `_config.yml`, displayed on the Contact page and in the footer, and referenced in the Privacy notice and Affiliate disclosure. The legal identity and jurisdiction of the publisher/operator still need to be added where required. This package is not a guarantee of compliance with every privacy, consumer-protection or affiliate-disclosure law in all target countries. Obtain jurisdiction-specific review where appropriate, especially before adding forms, accounts, newsletters, analytics, advertising pixels or other data collection.

## Deployment verification

After pushing to `main` and allowing the GitHub Actions workflow to deploy, verify:

1. `https://nausica-20.github.io/SkillNorth/sitemap.xml` loads and lists the canonical site URLs.
2. The homepage, 2027 pillar and hub pages contain `meta name="robots" content="index,follow,max-image-preview:large"`.
3. Their canonical links resolve to the `https://nausica-20.github.io/SkillNorth/` project-site URLs.
4. Submit the sitemap URL directly in Google Search Console. Do not rely on the project-subdirectory `robots.txt` as the host-level crawl policy.
