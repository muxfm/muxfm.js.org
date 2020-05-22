---
id: muxfm-preview
title: MuxFM Preview
author: Anand Chowdhary
author_title: CEO of Oswald Labs and co-creator of MuxFM
author_url: https://github.com/AnandChowdhary
author_image_url: https://avatars0.githubusercontent.com/u/2841780?s=400&v=4
tags: [meta, beta]
---

I love listening to podcasts; and in 2020, after many years of thinking about it, I finally decided to record my own podcast. At the same time, my friend [Shivek Khurana](https://github.com/shivekkhurana) also wanted to start a podcast, so we started talking about podcast hosting platforms,
RSS feeds, open APIs, etc., like you'd expect engineers to.

We realized that the podcasting ecosystem is very open (which is great!), but is also limited by the lack of open-source tooling available. MuxFM aims to fix that.

Most people getting started use [Anchor](https://anchor.fm), because it's free and easy to use. However, if you publish an Anchor-powered podcast, you're tied to their URLs in your RSS feed and podcast website. There is no easy way to use Anchor as a backend, but publish your own feed URLs and build a website.

That's where our first project, **Glue**, comes in — with MuxFM Glue, you can generate your own RSS feed URL and JSON API using your Anchor-generated feed. You have complete control over the feeds to distribute via RSS and submit to podcast directories. Then, using Glue's JSON APId for your podcast, you can use MuxFM **Site** to generate a beautiful and fast static website (hell yeah, JAMStack!) for your podcast. We're also building web components supporting frameworks like React, Vue, and Svelte in MuxFM **UI**, with which you can build your own webapps.

**MuxFM is the open-source podcasting stack.** In the future, we want to build a family of tools to make podcasting easy, accessible, and open source. Join us on [GitHub](https://github.com/muxfm).
