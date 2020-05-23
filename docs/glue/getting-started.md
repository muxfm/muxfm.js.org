---
id: getting-started
title: Getting started with MuxFM Glue
---

## Introduction

Glue helps you convert your Anchor FM podcast feed into a JSON API. This API is then used to generate a static site.

It also replaces the epidsode links inside the feed, to point to your static site instead of Anchor. Github Actions are used for the transformation.

## Installation
After you've created your Anchor account and podcast, you can get started with MuxFM Glue.

1. Clone the `muxfm/glue` project: https://github.com/muxfm/glue
2. Setup required secrets
  - `ANCHOR_USERNAME` is your Anchor username
  - `SITE_BASE` is your website's base URL with no trailing slash, ex: https://muxfmcast.com
3. Open a new issue in the GitHub repository (this will be issue #1)
4. If you comment `build` on this issue, GitHub Actions will trigger a build

## Build Process
When you comment `build` on the first issue, Glue starts the build process. 

It starts by fetching the public podcast page hosted at https://anchor.fm/muxfmcast. `muxfmcast` is the username set in `ANCHOR_USERNAME` secret.
 
### Feed Transformation
The html source of this page is parsed to figure out the podcast xml feed url. The feed is downloaded to a temporary folder. Glue then replaces links pointing to Anchor FM, with links that point to your site. 

If the feed from Anchor had the following link:
```xml
<link>https://anchor.fm/couples-therapy/episodes/Coming-Soon-Couples-Therapy-e1dcek</link>
```

The transformed feed will reflect your site instead of Anchor:
```xml
<link>https://muxfmcast.com/episodes/Coming-Soon-Couples-Therapy-e1dcek</link>
```

This link doesn't exist obviously, but you need to create it. You can use the provided [site](https://github.com/muxfm/site) which takes care of the links automatically. You can also use the [ui](https://github.com/muxfm/ui) components, to create a site from scratch.

### JSON API
After transforming the feed, Glue proceeds to create a JSON API. This API exposes three entities:
1. **Meta** - The name, url, profile photo etc of the podcast itself
2. **Episodes Index** - The list of each episode
3. **Individual Episode** - All info about a single episode

The entities are computed from the feed and saved as JSON files on the `gh-pages` branch. 
1. Meta data is available at `/meta.json`
2. Episodes index is at `/episodes/index.json` and 
3. Individual episodes can be found at `/episodes/<slug>.json`

The slug for each episode is present as a key-value pair in `index.json`.

*NOTE: You need to comment `build` on the first issue each time you publish a new episode on Anchor.*

## Exposing end-points via Github Pages
To consume the generated API, you need to enable Github Pages on the `gh-pages` branch. If your repo address is `https://github.com/ux0/glue`, then your API will be available at `ux0.github.io/glue/meta.json`.

Once the API starts working, you can start configuring the site.
