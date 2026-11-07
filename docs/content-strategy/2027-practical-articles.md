# SkillNorth — 10 core practical articles for 2027

Reviewed and expanded: 7 November 2026

## Editorial purpose

The ten core articles expand the existing `/guides/essential-skills-for-2027/` pillar into practical topic guides. They are written for an international English-language audience and guide readers from a skill question to relevant cluster hubs and verified Alison course pages. The existing Python article remains as an additional supporting guide, bringing the live article index to eleven entries without changing the ten-article core plan.

## Core article inventory

| # | URL | Main topic | Cluster | Alison course IDs |
|---:|---|---|---|---|
| 01 | `/articles/ai-skills-for-work-2027/` | AI literacy, evaluation and responsible use | AI & Machine Learning | AI001, AI002, AI003 |
| 02 | `/articles/data-analysis-with-excel-beginners/` | Excel and Power BI for practical data analysis | Data Analytics & Excel | DATA001, DATA002 |
| 03 | `/articles/cybersecurity-skills-for-beginners-2027/` | Cybersecurity, network security and cloud concepts | Cybersecurity & IT Infrastructure | CYBER001, CYBER002; links to CLOUD001–003 |
| 04 | `/articles/cloud-computing-skills-2027/` | Cloud models and beginner routes into AWS and Google Cloud | Cybersecurity & IT Infrastructure | CLOUD001, CLOUD002, CLOUD003 |
| 05 | `/articles/project-management-skills-2027/` | Scope, planning, resources, risks and Agile delivery | Project & Operations Management | PROJ001, PROJ002 |
| 06 | `/articles/digital-marketing-skills-2027/` | Audience, funnels, content, SEO, measurement and AI | Digital Marketing & E-commerce | MKT001, MKT002, MKT003 |
| 07 | `/articles/renewable-energy-solar-skills-2027/` | Environmental sustainability, ESG, renewable energy and solar | Engineering & Sustainable Skills | ENG001–ENG005 |
| 08 | `/articles/communication-skills-for-managers-2027/` | Listening, expectations, emotional intelligence and manager conversations | Leadership & Human Resources | HR002, LEAD001 |
| 09 | `/articles/human-resources-skills-foundations/` | Recruitment, employee management, talent, onboarding and HR basics | Leadership & Human Resources | HR001, HR003, HR004 |
| 10 | `/articles/90-day-upskilling-plan-2027/` | A 30-60-90-day plan for focused learning | All 12 clusters | Relevant cross-cluster paths and courses |

## Supporting article

- `/articles/python-programming-for-beginners/` remains available as an additional guide linked from the data, cybersecurity and 90-day learning content. It is not counted among the ten core campaign articles.

## Course catalogue expansion

The original repository had 19 course records. Thirteen additional Alison courses were checked against live provider pages and added, bringing the database to 32 records across the existing 12 hubs. The additions fill the gaps in Cloud Computing, Power BI, network security, Agile project management, SEO/digital marketing, sustainability/ESG, emotional intelligence and HR/talent management.

The live catalogue now includes:

- Cloud foundations, Google Cloud and AWS-specific study (CLOUD001–003).
- Power BI reporting and visualisation (DATA002).
- Network-security fundamentals (CYBER002).
- Agile Project Management (PROJ002).
- SEO-focused digital marketing (MKT003).
- Environmental sustainability, ESG reporting and renewable-energy fundamentals (ENG003–005).
- Emotional intelligence for leaders (LEAD001).
- Employee management/training and human talent management (HR003–004).

## Repository-fit decisions

- All new course records use the existing affiliate campaign parameters and preserve `career_ids: []` and `learning_path_ids: []` until canonical careers and learning-path datasets exist.
- Provider-displayed levels are reproduced exactly. Where a page did not clearly display a level, the record uses `Not listed` rather than guessing.
- The course *Basic Concepts of Digital Marketing* is labelled Advanced by Alison despite “Basic” in its title; the article flags this to readers.
- The AWS course is an Alison learning course, not an AWS-issued certification. Articles do not imply otherwise.
- Sustainability and ESG are now distinguished from the technical solar-energy topic.
- Career and learning-path destinations are not invented. Articles link to published cluster hubs until canonical career and learning-path data and pages are added.

## Implementation

- `_data/articles.yml` indexes ten core articles and one supporting programming guide.
- `_data/courses.yml` is the authoritative 32-record catalogue; root `courses.yml` and `docs/content-strategy/course-inventory.csv` are synchronized copies.
- `_data/clusters.yml` maps every course to one of the existing 12 skill hubs.
- Each article uses the shared `_includes/course-cards.html` include with exact course IDs and a topic-specific CTA label.
- The ten core articles use `_includes/conversion-card.html` to recommend one contextually selected course with a direct tracked link, level/duration details, a specific CTA and an adjacent affiliate disclosure. The 90-day plan uses `_includes/conversion-pathways.html` to offer three distinct first-step routes. The supporting Python article uses the same course-specific conversion card.
- Every course card repeats a compact affiliate disclosure beside its direct course link; the affiliate-disclosure page explains the difference between the general Alison destination and individual tracked course pages.
- The sitemap loops over the article registry, so the new Cloud guide is included automatically.
- The canonical host in `_config.yml` remains `https://nausica-c.github.io`, preserving `/SkillNorth/` as the project base path. Verify this matches the intended GitHub Pages owner before deployment.

## Sources and editorial safeguards

The new course details were checked against Alison's official course pages on 7 November 2026. Course title, displayed level, estimated duration, languages and CPD status can change; recheck live course pages before publication. Workforce context should be phrased as forecasts and broad skill signals, not individual employment promises.

A course can introduce concepts and support practice; it does not guarantee employment, confer a regulated licence or replace supervised experience and local legal requirements. Optional certificates or diplomas may be paid even when course study is free. Retain the site's affiliate disclosure and the existing distinction between free study and optional paid credentials.
