# SkillNorth — Funnel phases 1–4 implementation

Updated: 1 November 2026

## Completed

1. **Pillar guide:** `/guides/essential-skills-for-2027/` uses a dedicated guide layout with breadcrumbs, a reading navigation, a skills-cluster map, stable section anchors and the existing research/methodology section. Its page is linked from the homepage, primary navigation and footer.
2. **Pillar ↔ hub linking:** every one of the 12 cluster hubs links back to the 2027 pillar in its hero and editorial bridge. The pillar links contextually to the hubs and includes a 12-cluster navigator. Hubs retain their related-cluster links.
3. **Course cards and CTAs:** cards expose level, estimated study time, credential type, languages and CPD status when present in the reviewed database. The exact course title is shown beside the affiliate CTA because the configured partner link opens Alison's landing page, not an individually tracked course deep link. Disclosure links are displayed near commercial actions.
4. **Hub conversion structure:** each hub has a 2027 skills connection, course-selection action, course section, affiliate note, practical sequence, scope caveat and related-cluster navigation.

## Affiliate destination

All Alison CTAs continue to use the single value at `site.affiliate.alison_url` in `_config.yml`. The supplied URL was not rewritten or individually decorated with additional parameters.

## Pre-launch state retained

`launch_mode: false` is now enabled. Public pages emit `index,follow`, and `robots.txt` allows crawling and points to the XML sitemap. The Privacy notice has been rewritten to describe the current static GitHub Pages setup, the absence of analytics/forms in this build, GitHub-hosted request logs and external Alison affiliate links. The public contact email and publisher/operator identity have not been supplied; the owner should add these and review jurisdiction-specific privacy/legal requirements. Technical indexation is enabled, but actual search-engine indexing is not guaranteed.

## Validation

Run `bundle exec jekyll build` locally or let the included GitHub Actions workflow build the site. The current execution environment does not have Bundler/Jekyll installed, so no successful Jekyll build is claimed here.


## Supporting content layer — 7 November 2026

A 10-article core practical guide set plus one supporting Python guide has been added under `/articles/`. The index is surfaced in navigation and the homepage; the pillar links to the ten core articles; relevant cluster hubs surface their mapped articles; and the XML sitemap includes the index and each guide. Course displays use exact IDs from `_data/courses.yml` to avoid promoting catalogue items that are not in the repository. Career and learning-path links remain out of scope until canonical `careers.yml` and `learning_paths.yml` datasets and their corresponding pages exist.
