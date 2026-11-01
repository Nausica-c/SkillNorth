---
layout: page
title: Contact SkillNorth
kicker: GET IN TOUCH
description: Contact details for questions, corrections and course-page updates.
permalink: /contact/
---
## Corrections and course updates

Found a course that has moved, changed its title or no longer matches the description? We welcome factual corrections and suggestions for future skill clusters.

The public contact address has not yet been configured. Add it to `contact_email` in `_config.yml`; this page will display it automatically once supplied.

{% if site.contact_email and site.contact_email contains '@' %}
**Email:** [{{ site.contact_email }}](mailto:{{ site.contact_email }})
{% else %}
<div class="caution-note"><strong>Before launch:</strong> set `contact_email` in `_config.yml` and review this page.</div>
{% endif %}
