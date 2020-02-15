---
template: post
title: Obstacles to Scaling Enterprise Data Science Teams
slug: obstacles-to-scaling-enterprise-data-science-teams
draft: false
date: 2020-02-15T19:09:41.300Z
description: >-
  Leading a small Data Science team has its fair share of challenges: mounting
  technical debt, high stakeholder expectations, counter-productive Agile
  practices, dizzying distractions...
category: Data Science
tags:
  - Machine Learning
  - Data Science
  - Artificial Intelligence
---
_Work-in-Progress_

After delivering 3/4 product-facing ML projects at Werkspot, some patterns began to develop.

* **The team was spending 60% of its time on DevOps:** Every project required building a scheduled Machine Learning pipeline to send our code to the cloud, extract data from our data warehouse, train and host a model behind an API. Needless to say, building a custom orchestration pipeline per project accrued significant technical debt.
* **Collaboration between Data Scientists was a problem:** Parallelising work on the same project as well as sharing Jupyter notebooks and requirements.txt files over Slack was a source of frustration. We had tolerated this mainly due to the lack of a clear and inexpensive alternative.
* **Our commitment to SCRUM was counter-productive:** Data Science stories are often research-oriented. It is not possible to accurately estimate how long a task will take upfront. Many precious hours were wasted arguing over how many points to assign to a story.
* **Monitoring Machine Learning models in production was absent:** These projects are often complex with many dependencies shared between the data, model, code and pipelines. These systems are not forgiving; if something goes wrong (i.e. an ETL process in another application fails to update a database column), poor-performing models may be released without an explicit error. The knowledge of this might only be revealed several days later when the business KPIs tanked and a puzzled product owner comes knocking.

Sound familiar? Here's what we did...

## 1. Ditch SCRUM For Kanban



## 2. Consolidate All Training & Deployment Pipelines



## 3. Git Version-Control Notebooks & Process



## 4. Identify Common Failure Points & Setup Monitoring
