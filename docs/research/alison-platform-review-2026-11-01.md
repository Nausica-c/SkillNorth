# Alison platform review — 1 November 2026

## Scope

This review maps Alison's public course catalogue and selected public course pages to SkillNorth's editorial cluster architecture. It is not a ranking of every course on Alison and does not imply endorsement by Alison.

## Platform observations verified on Alison's public site

- Alison's homepage describes a catalogue of more than 6,000 free online courses and lists nine primary course categories: Information Technology (IT), Health, Language, Business, Management, Personal Development, Sales & Marketing, Engineering & Construction, and Teaching & Academics.
- Alison also presents a separate careers section with groups including Health Science, Finance, Information Technology, Education and Training, Business Management and Administration, Marketing/Sales/Service, STEM, Architecture and Construction, Law/Public Safety, Human Services and others.
- Alison's learner help pages state that enrolling in, studying and completing courses is free. Digital or printed certificates/diplomas may be purchased optionally. Learners who do not purchase a credential can download a Learner Record.
- Alison's affiliate help page states that affiliates can generate tracked links for specific Alison pages, including individual course pages, via the dollar symbol on the page. The affiliate dashboard can track clicks, new learners and earnings.
- Alison's terms say affiliates must disclose the affiliate relationship to their audience.

## Editorial cluster model

SkillNorth uses 12 search-intent and learning-intent clusters, rather than reproducing Alison's nine top-level category labels:

| SkillNorth hub | Alison category mapping | Primary learner intent |
|---|---|---|
| AI & Machine Learning | IT; Business | Understand AI and machine learning foundations |
| Data Analytics & Excel | IT; Business | Build spreadsheet and data interpretation skills |
| Cybersecurity & IT Infrastructure | IT | Understand defensive security and infrastructure |
| Software Development & Programming | IT | Start learning programming and computational thinking |
| Business & Entrepreneurship | Business; Management | Analyse organisations, customers and business problems |
| Project & Operations Management | Management; Business | Plan, deliver and monitor projects |
| Digital Marketing & E-commerce | Sales & Marketing; Business | Plan and measure digital marketing activity |
| Finance & Accounting | Business | Understand financial records and statements |
| Leadership & Human Resources | Management; Personal Development; Business | Improve people management and workplace communication |
| Health & Social Care | Health | Explore care principles and responsibilities |
| Teaching & Education | Teaching & Academics | Understand teaching and learning processes |
| Engineering & Sustainable Skills | Engineering & Construction | Explore engineering and renewable-energy topics |

Language is not a dedicated SkillNorth cluster in this initial version because the site's positioning is career skills and practical upskilling. It can be added as a separate hub if user research supports it.

## Course pages reviewed and used as starting points

Course pages were selected for clear fit with a cluster and accessible descriptions or learning outcomes. Current titles and public page URLs are stored in `_data/courses.yml` for maintenance reference. The site CTA uses the single affiliate destination in `_config.yml` rather than fabricating course-specific affiliate deep links.

| Cluster | Course starting points |
|---|---|
| AI | Introduction to Artificial Intelligence (AI); Fundamentals of Artificial Intelligence; Machine Learning & Artificial Intelligence |
| Data | Basics of Data Analysis with Excel |
| Cybersecurity | Diploma in Cyber Security |
| Software | Introduction to Programming with Python; Diploma in C Programming |
| Business | Essentials of Management Consulting |
| Project management | Diploma in Project Management |
| Digital marketing | Digital Marketing Overview; AI-Driven Digital Marketing Strategies |
| Finance | Financial Accounting Basics |
| Leadership & HR | Diploma in Human Resources (HR); Communication Skills for Managers |
| Health & care | Diploma in Health and Social Care |
| Education | Diploma in Educational Psychology; Diploma in Effective Teaching Principles for the 21st Century |
| Engineering & sustainability | Solar Energy – Solar Technology and Its Use Worldwide; Diploma in Solar Energy |

## Affiliate implementation note

The affiliate URL supplied by the site owner is configured once in `_config.yml`:

`https://alison.com/?utm_source=alison_user&utm_medium=affiliate&utm_campaign=54834349`

Every commercial CTA references `site.affiliate.alison_url`. Alison's affiliate help documentation says affiliates can create tracked links to specific course pages. To improve the click path later, generate individual approved course deeplinks inside the Alison affiliate dashboard and replace the generic home link in each course record only after those links are actually supplied/verified. No deeplinks have been guessed in this build.

## Limitations and maintenance

- Catalogue counts change and are intentionally not hardcoded into the hub copy.
- Course duration and level are shown only where surfaced clearly in the reviewed public page. Otherwise, cards explicitly tell readers to check the live Alison page.
- Course availability, syllabus, provider and language may change; review the live page before publishing or updating content.
- An Alison course does not guarantee a job or satisfy licensing requirements in a regulated profession.
- This review records public page checks completed on 1 November 2026, not a permanent guarantee of current course availability.

## Public sources

- Alison homepage and course categories: https://alison.com/
- Alison sitemap: https://alison.com/sitemap
- Alison IT catalogue: https://alison.com/courses/it
- Alison Business catalogue: https://alison.com/courses/business
- Alison Management catalogue: https://alison.com/courses/management
- Alison Personal Development catalogue: https://alison.com/courses/personal-development
- Alison Sales & Marketing catalogue: https://alison.com/courses/marketing
- Alison Engineering & Construction catalogue: https://alison.com/courses/engineering
- Alison Teaching & Academics catalogue: https://alison.com/courses/education
- Alison Health catalogue: https://alison.com/courses/health
- Alison learner help — Is Alison really free?: https://helpcenter.alison.com/en/articles/8206417-is-alison-really-free
- Alison learner help — How courses work: https://helpcenter.alison.com/en/articles/8206243-how-do-alison-courses-work
- Alison affiliate help: https://helpcenter.alison.com/en/articles/8206757-how-does-the-alison-affiliate-programme-work
- Alison affiliate learner FAQ: https://alison.com/faqs/learners/affiliate-programme-1
- Alison terms of use: https://alison.com/about/terms-of-use
- World Economic Forum, Future of Jobs Report 2025: https://www.weforum.org/publications/the-future-of-jobs-report-2025/3-skills-outlook
