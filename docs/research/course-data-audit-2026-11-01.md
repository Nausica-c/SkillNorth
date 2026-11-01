# SkillNorth course data audit — 1 November 2026

## Scope

The uploaded `courses.yml.txt` was reconciled against the corresponding 19 records in `_data/courses.yml` and reviewed against Alison's public course pages and course announcements on 1 November 2026.

## Result

- 19 course records retained; no IDs or SkillNorth cluster assignments were removed.
- All 19 levels are now populated with Alison's displayed labels: Beginner, Intermediate or Advanced.
- 18 course durations are populated from the course pages; `HR002` (Communication Skills for Managers) does not display a course-specific duration in the reviewed page, so the value is `Not listed` rather than an estimate.
- Credential type, language availability and CPD accreditation have been added to the records.
- The official display titles for AI002 and AI003 have been normalised to match Alison's live course pages.
- `career_ids` and `learning_path_ids` have been added to every record as arrays. They remain empty because this current SkillNorth repository does not yet contain canonical `careers.yml` or `learning_paths.yml` records to reference. No speculative IDs were created.

## Data convention

`duration` is Alison's estimated study time, not a fixed deadline. Courses are self-paced. `credential_type` distinguishes Alison's Certificate and Diploma course categories. `cpd_accredited` describes the course page's CPD-accredited status and should not be interpreted as a regulated professional licence or as a guarantee of employment.

For HR002, the Alison announcement dated 21 September 2026 identifies the course as Intermediate and CPD-accredited; a course-specific duration was not available in the reviewed page/announcement.

## Important editorial safeguards

- Alison's level label is reproduced as displayed, not translated into a SkillNorth promise of learner proficiency.
- A Beginner-level course may still introduce a specialist topic; a short course is not a professional qualification by itself.
- Health, education, finance, cybersecurity and engineering courses are informational/upskilling resources and do not replace local licensing, supervised practice or regulated qualifications.
- Optional certificates/diplomas may be paid even though course study is free; retain the site's existing pricing disclosure.
- Review the course page again before publication because course details can change.

## Official pages checked

- https://alison.com/course/introduction-to-artificial-intelligence-ai
- https://alison.com/course/diploma-in-fundamentals-of-artificial-intelligence
- https://alison.com/course/machine-learning-with-artificial-intelligence
- https://alison.com/course/basics-of-data-analysis-with-excel
- https://alison.com/course/diploma-in-cyber-security
- https://alison.com/course/introduction-to-programming-with-python-revised
- https://alison.com/course/diploma-in-c-programming-revised-2017
- https://alison.com/course/essentials-of-management-consulting
- https://alison.com/course/diploma-in-project-management-revised-2017
- https://alison.com/course/digital-marketing-overview
- https://alison.com/course/ai-driven-digital-marketing-strategies
- https://alison.com/course/financial-accounting-basics
- https://alison.com/course/diploma-in-human-resources-hr
- https://alison.com/course/communication-skills-for-managers
- https://alison.com/course/diploma-in-health-and-social-care
- https://alison.com/course/diploma-in-educational-psychology-revised-2017
- https://alison.com/course/diploma-in-effective-teaching-principles-for-the-21st-century
- https://alison.com/course/solar-energy-solar-technology-and-its-use-worldwide
- https://alison.com/course/diploma-in-solar-energy

Additional Alison announcement used for HR002:
https://alison.com/press-room/new-courses-%26-content-updates/alison-launches-free-online-course-on-communication-skills-for-managers
