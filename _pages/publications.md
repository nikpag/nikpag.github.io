---
layout: page
permalink: /publications/
title: publications
description:
nav: false
nav_order: 1
---

<!-- _pages/publications.md -->
<div class="publications">

{% bibliography -f {{ site.scholar.bibliography }} -q @*[under_submission!=true]* %}

{% comment %}Under-submission papers have no year, so they're listed after the year groups, without a heading.{% endcomment %}
{% bibliography -f {{ site.scholar.bibliography }} -q @*[under_submission=true]* --group_by none %}

</div>
