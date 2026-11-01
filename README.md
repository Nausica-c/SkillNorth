# SkillNorth — GitHub Pages starter

An independent, English-language learning and career-skills guide built with Jekyll for GitHub Pages. The site groups Alison course options into 12 editorial skill clusters.

## Included

- Custom SkillNorth visual identity and responsive styles.
- Homepage, cluster directory and 12 hub pages.
- 19 Alison course starting points held in `_data/courses.yml`.
- One source of truth for the Alison affiliate URL in `_config.yml`.
- About, editorial methodology, affiliate disclosure, privacy draft, contact and 404 pages.
- GitHub Actions deployment workflow for GitHub Pages.
- Alison platform review and cluster map under `docs/` (excluded from the public build).

## Affiliate URL

The requested link is already set in `_config.yml` under `affiliate.alison_url`:

`https://alison.com/?utm_source=alison_user&utm_medium=affiliate&utm_campaign=54834349`

All commercial buttons reference `site.affiliate.alison_url`. The build deliberately does not invent individual course-specific affiliate deeplinks. Alison's affiliate help explains that affiliates can generate links for individual pages from the Alison affiliate interface. If you later generate those links, add the exact verified URLs to `_data/courses.yml` and update the course-card include to use them.

## GitHub Pages setup

1. Create or use a repository named `SkillNorth` under the GitHub account that will own the site.
2. Upload the contents of this folder to the repository root (not the enclosing ZIP folder).
3. Confirm `_config.yml` has the correct `url` and `baseurl`. This starter is preconfigured for `https://nausica-20.github.io/SkillNorth/`.
4. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
5. Push to `main`. The workflow in `.github/workflows/pages.yml` builds Jekyll and deploys the generated site.

## Before public launch

The repository starts with `launch_mode: true`. This intentionally adds `noindex,nofollow` and blocks crawling in `robots.txt` while the owner reviews the site. Before switching it off:

- Set a public `contact_email` in `_config.yml`.
- Review the draft privacy notice against the actual hosting, jurisdiction and any services you add.
- Confirm the affiliate link still belongs to your Alison account and remains active.
- Recheck every Alison course page and update the `reviewed` date if course details have changed.
- Set `launch_mode: false` in `_config.yml`, then rebuild and verify `robots.txt` and page meta robots.

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
- Course level, duration, credential type, available languages and CPD status are surfaced where verified. HR002 has no duration shown on the reviewed page and is marked “Not listed”.
- Do not imply that course completion guarantees a job or meets local professional licensing requirements.
- Alison says course enrolment, study and completion are free; digital and printed certificates/diplomas can be optional purchases. Check each live course page and Alison's current terms.


## Course data maintenance

See `docs/research/course-data-audit-2026-11-01.md` for the 19-course metadata audit and remaining mapping requirements. `career_ids` and `learning_path_ids` are present in the course schema but are left empty until canonical career and learning-path datasets are added.
