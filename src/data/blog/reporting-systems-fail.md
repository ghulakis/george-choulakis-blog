---
title: "Why reporting systems fail before the dashboard"
description: "The chart is often the final symptom. The real problem usually starts earlier: ownership, definitions, source data, and trust."
pubDate: 2026-09-24
tags: ["BI", "Reporting", "Data quality"]
draft: false
---

A dashboard can be beautifully designed and still fail.

That sounds obvious, but reporting projects often spend disproportionate energy on the visible layer: the chart, the filter, the KPI card, the colour. Those things matter. They are simply downstream of more important questions.

## Start with the meaning

Before asking whether a number is correct, ask what the number is supposed to mean.

Two teams can use the same word — *sales*, *hours*, *availability*, *forecast* — while referring to slightly different business rules. A technically perfect query can therefore produce a number that is wrong for the conversation people are actually having.

## Trust is part of the architecture

People do not trust a report because it has a refresh timestamp. They trust it because they can explain where the number came from, why it changed, and what happens when something upstream fails.

That means lineage, naming, ownership and exception handling are not documentation chores added after the project. They are part of the product.

## The dashboard is the end of a chain

A useful mental model is:

**source → transformation → business rule → semantic layer → visual → decision**

If the first four are fragile, polishing the fifth does not repair the system.

That is why some of the most valuable BI work happens before Power BI, Tableau, or any other visualisation tool is opened.
