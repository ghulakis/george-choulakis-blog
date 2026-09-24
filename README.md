# George Choulakis — personal blog

A personal technical blog and portfolio about data, automation, business intelligence, integration, and the systems behind everyday work.

## Stack

- Astro 5
- Markdown content collections
- MDX support
- Manrope + JetBrains Mono
- GitHub Pages deployment

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Writing a post

Add a Markdown file to `src/data/blog/` with frontmatter:

```yaml
---
title: "Post title"
description: "One-sentence summary"
pubDate: 2026-09-24
tags: ["Data", "Automation"]
draft: false
---
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml` and builds the static site for GitHub Pages.

The repository is configured for the project path:

`https://ghulakis.github.io/george-choulakis-blog/`

If a custom domain is added later, update `site` and `base` in `astro.config.mjs`.
