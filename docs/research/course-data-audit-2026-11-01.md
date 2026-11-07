# SkillNorth course data audit — 7 November 2026

## Scope

The original 19 records were reconciled against the uploaded course database and Alison's public course pages. A further 13 courses were checked against their live Alison course pages on 7 November 2026 and added where they meaningfully strengthened one of the ten core 2027 articles or its supporting skill hubs.

## Result

- 32 course records are now held in `_data/courses.yml` and mirrored in the root `courses.yml`.
- The additional records fill the Cloud Computing, Power BI, network-security, Agile, SEO/digital-marketing, sustainability/ESG, emotional-intelligence and HR/talent-management gaps.
- Every record contains a stable SkillNorth ID, cluster, official Alison course page and the site's existing affiliate campaign parameters.
- Each record includes `career_ids: []` and `learning_path_ids: []`. They remain empty because this repository does not yet contain canonical `careers.yml` or `learning_paths.yml` datasets; no speculative IDs were created.
- Where Alison did not clearly display a level on the reviewed page, the record uses `Not listed` rather than inferring one from the course title.
- Duration is the provider's estimated study time, not a fixed deadline. Courses are self-paced.

## New records added on 7 November 2026

| ID | Alison course | SkillNorth cluster |
|---|---|---|
| CLOUD001 | Cloud Computing for Absolute Beginners | Cybersecurity & IT Infrastructure |
| CLOUD002 | Advanced Diploma in Cloud Computing for Amazon Web Services | Cybersecurity & IT Infrastructure |
| CLOUD003 | Google Cloud Computing Foundations | Cybersecurity & IT Infrastructure |
| DATA002 | Introduction to Data Analytics Using Microsoft Power BI | Data Analytics & Excel |
| CYBER002 | Introduction to Computer Network Security | Cybersecurity & IT Infrastructure |
| PROJ002 | Agile Project Management | Project & Operations Management |
| MKT003 | Basic Concepts of Digital Marketing | Digital Marketing & E-commerce |
| ENG003 | Environmental Sustainability Concepts | Engineering & Sustainable Skills |
| ENG004 | ESG and Sustainability Fundamentals | Engineering & Sustainable Skills |
| ENG005 | Renewable Energy Fundamentals | Engineering & Sustainable Skills |
| LEAD001 | Emotional Intelligence for Effective Leadership | Leadership & Human Resources |
| HR003 | Human Resources: Employee Management and Training | Leadership & Human Resources |
| HR004 | Human Talent Management | Leadership & Human Resources |

## Important editorial safeguards

- Alison's displayed level is reproduced as shown. A title containing “Basics” does not mean Alison labels a course Beginner.
- CPD accreditation is recorded from the provider page; it is not a regulated professional licence or a guarantee of employment.
- The AWS course is published on Alison and must not be described as an AWS-issued credential.
- Cloud, cybersecurity and engineering learning resources do not authorise learners to test live systems or perform regulated technical work.
- ESG course content is introductory and should not be represented as legal or compliance advice.
- Optional certificates/diplomas may be paid even though course study is free; retain the site's existing pricing disclosure.
- Recheck the live course page before publication because course details, estimated durations and language availability can change.

## Affiliate destinations

All 32 `course_page` fields use the current SkillNorth affiliate query parameters:

`utm_source=alison_user&utm_medium=affiliate&utm_campaign=54834349`

The links are course-specific destinations rather than a generic Alison homepage link. They are mirrored in `docs/content-strategy/course-inventory.csv` for review.
