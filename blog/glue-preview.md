---
id: glue-preview
title: MuxFM Glue Preview
author: Shivek Khurana
author_title: Founder of Krim Labs and co-creator of MuxFM
author_url: https://github.com/shivekkhurana
author_image_url: https://avatars0.githubusercontent.com/u/1925158?s=400&v=4
tags: [glue, beta]
---

## Problem

Anchor FM is the easiest way to start a podcast. But ease comes at the cost of SEO juice. The one click distribute option provided by Anchor publishes to their channels. This makes is impossible to move to another provider. This also puts the host in a compromised position, since access to audience is controlled by Anchor. Although Anchor allows for an option to submit feed manually, essentially returning control to the podcaster, there are still links that point back to Anchor services.

<!--truncate-->

## Solution

We wanted to build a JAMStack solution for hosting a Podcast. But since Anchor exposes a feed, we decided to use Anchor as a backend instead of rolling out our own.

We transform Anchor's feed by replacing backlinks to anchor.fm with a custom url (your podcast website). We also create json files for channel meta, episode index and individual episodes. You can then easily use this json API to spin up your own sites, with all media hosted at Anchor, and all SEO juice sent to your domain.
