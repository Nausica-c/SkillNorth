# SkillNorth — GitHub Pages starter

An independent, English-language learning and career-skills guide built with Jekyll for GitHub Pages. The site groups Alison course options into 12 editorial skill clusters.

## Included

- Custom SkillNorth visual identity and responsive styles.
- Homepage, cluster directory, 12 hub pages, the pillar guide “Essential Skills for 2027” and 10 core practical articles plus 1 supporting programming guide.
- 32 Alison course starting points held in `_data/courses.yml`.
- One source of truth for the Alison affiliate URL in `_config.yml`.
- About, editorial methodology, affiliate disclosure, privacy notice, contact and 404 pages.
- GitHub Actions deployment workflow for GitHub Pages.
- Alison platform review and cluster map under `docs/` (excluded from the public build).

## Affiliate links

The general Alison destination remains centrally configured in `_config.yml` under `affiliate.alison_url`:

`https://alison.com/?utm_source=alison_user&utm_medium=affiliate&utm_campaign=54834349`

Each of the 32 records in `_data/courses.yml` now contains the exact course-specific affiliate URL supplied by the site owner in the latest `courses.yml` file. The public course-card component uses `course.course_page`, so every course card opens its own tracked Alison course page. General-purpose Alison CTAs continue to use `site.affiliate.alison_url`. The same course-specific destinations are mirrored in `docs/content-strategy/course-inventory.csv`.

## GitHub Pages setup

1. Create or use a repository named `SkillNorth` under the GitHub account that will own the site.
2. Upload the contents of this folder to the repository root (not the enclosing ZIP folder).
3. Confirm `_config.yml` has the correct `url` and `baseurl`. This repository is preconfigured for `https://nausica-c.github.io/SkillNorth/`.
4. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
5. Push to `main`. The workflow in `.github/workflows/pages.yml` builds Jekyll and deploys the generated site.

## Indexation and remaining owner actions

The repository is now configured with `launch_mode: false`. Public pages emit `index,follow` and the project includes a sitemap. Search engines can crawl and potentially index the pages after deployment; indexing is not guaranteed and may take time. Because this is a GitHub Pages project site under `/SkillNorth/`, its `robots.txt` is also under that subdirectory. Google requires `robots.txt` at the host root to control crawling for a host; therefore use the page-level meta robots directives and submit the sitemap URL directly in Google Search Console.

Before collecting visitor information or expanding the site, the owner should:

- The public contact email `skillnorthsite@gmail.com` is configured in `_config.yml` and displayed on the Contact page and in the footer. Add the publisher/operator's legal identity in the site notice where required.
- Review the privacy notice against the operator's location, target markets and actual hosting/services. The current notice describes the static site configuration and is not a substitute for jurisdiction-specific legal review.
- Confirm the affiliate link still belongs to the owner's Alison account and remains active.
- Recheck every Alison course page and update the `reviewed` date when course details change.
- After deployment, verify the live sitemap URL, canonical tags and page-level robots metadata. Submit `https://nausica-c.github.io/SkillNorth/sitemap.xml` in Google Search Console. The project-subdirectory `robots.txt` cannot replace a host-root robots file.

## Local preview

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000/SkillNorth/`.

## Editorial safeguards

- SkillNorth is an independent publisher, not Alison's official website.
- A SkillNorth list is an editorial selection, not an official Alison ranking.
- Course level, duration, credential type, available languages and CPD status are surfaced where verified. Missing provider-displayed levels or durations are marked “Not listed” rather than inferred.
- Do not imply that course completion guarantees a job or meets local professional licensing requirements.
- Alison says course enrolment, study and completion are free; digital and printed certificates/diplomas can be optional purchases. Check each live course page and Alison's current terms.


## Course data maintenance

See `docs/research/course-data-audit-2026-11-01.md` for the 32-course metadata audit and remaining mapping requirements. `career_ids` and `learning_path_ids` are present in the course schema but are left empty until canonical career and learning-path datasets are added.

## Practical article guides

The `/articles/` directory now contains 10 core practical guides plus 1 supporting programming guide mapped to the live 12-cluster structure and the 32 course records in `_data/courses.yml`. Each article uses the shared course-card include with exact course IDs, so only courses present in the reviewed database are displayed. The article index is linked from the main navigation, homepage, pillar guide, relevant hubs and sitemap.

The expanded catalogue now includes dedicated Cloud Computing, Power BI and ESG/sustainability course selections. The 2027 articles distinguish broad sustainability learning from renewable-energy and solar-technology topics.

## 2027 pillar guide

The new guide is published at `/guides/essential-skills-for-2027/`. It is linked from the main navigation and homepage, included in `sitemap.xml`, and uses the shared Alison affiliate CTA include so the destination remains managed centrally in `_config.yml`.


## Funnel implementation

See [`docs/funnel-phases-1-4.md`](docs/funnel-phases-1-4.md) for the implementation of the 2027 pillar and the pillar-to-cluster-to-course journey.
