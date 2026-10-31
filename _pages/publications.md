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

{% comment %}Under-submission papers have no year, so they get their own group after the years.{% endcomment %}
{% capture under_submission_count %}{% bibliography_count -f {{ site.scholar.bibliography }} -q @*[under_submission=true]* %}{% endcapture %}
{% if under_submission_count != "0" %}
<h2 class="bibliography">Submitted</h2>
{% bibliography -f {{ site.scholar.bibliography }} -q @*[under_submission=true]* --group_by none %}
{% endif %}

</div>
