---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D. in Computer Science, University of Adelaide (AIML), 2024 - present
* M.S. in Machine Learning and Computer Vision, Australian National University, 2022 - 2024
* B.Eng. in Automation, University of Chinese Academy of Sciences, 2018 - 2022

Research Interests
======
* Generative World Modeling
* 3D Generation
* Example-based Video/Image Generation
* Multimodal Large Language Models (MLLMs)

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

Academic Services
======
* **Reviewer:** AAAI'25, DICTA'25, NeurIPS'24, ICASSP'24
