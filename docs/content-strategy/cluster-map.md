# SkillNorth cluster map

## Information architecture

- Home: `/`
- Cluster directory: `/clusters/`
- 12 editorial hubs: `/clusters/<cluster-slug>/`
- Supporting pages: `/about/`, `/how-we-select/`, `/affiliate-disclosure/`, `/privacy/`, `/contact/`

## Funnel role

Pinterest, search or social discovery → SkillNorth cluster hub → course starting point → Alison through the configured affiliate URL.

## Internal-link rules

1. Every hub links to at least three related clusters.
2. Every hub links back to `/clusters/` and the home page through breadcrumbs/navigation.
3. Course cards remain within their primary skill cluster; cross-cluster recommendations are handled by the related-cluster module.
4. The global affiliate disclosure appears in the footer and near commercial CTAs.
5. No cluster should promise employment outcomes or imply that a short course is a regulated qualification.

## Next content layer

After reviewing the hub pages, build supporting subcluster pages only where there is a distinct learner question and enough Alison course depth. Candidate expansions include AI for business, SQL and data visualisation, network fundamentals, Python for automation, ecommerce, bookkeeping, people management, caregiving, instructional design, and renewable energy.


## Supporting article layer — November 2026

- Article directory: `/articles/`
- Ten practical supporting guides: AI skills; data analysis with Excel; cybersecurity; Python programming; project management; digital marketing; solar and renewable-energy foundations; manager communication; human resources; and a 90-day upskilling plan.
- Article metadata and cluster relationships are maintained in `_data/articles.yml`.
- Individual course cards are selected by exact course IDs from `_data/courses.yml`; the shared include supports `course_ids` as well as a whole-cluster selection.
- Each article links to its relevant hub and, where useful, to related articles and the 2027 pillar. Relevant hubs link back to their supporting guides.
- The repository currently has no canonical career or learning-path database. Articles therefore link to existing cluster hubs and other published guides; no career or learning-path URLs are fabricated.
