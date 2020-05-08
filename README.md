# 🎧 [Bulwark FM Docs](https://bulwarkfm.github.io/docs/)

**⚠️ Under construction:** This repository will contain the docs and landing pages for this project.

## 📋 Content

The [`./content`](./content/) directory including all the docs for Bulwark FM projects:

- [`content/glue`](./content/glue): Docs for Glue
- [`content/site`](./content/site): Docs for static site generator

## 🛠️ Domain

Currently, this website is hosted on https://bulwarkfm.github.io/docs, not the root subdomain.

This is because we want to publish the site from the `gh-pages` branch. The `master` branch has raw markdown files, and the static site is built and deployed from `gh-pages`. However, GitHub forces organization and user sites to deploy from the `master` branch:

![Screenshot of GitHub Pages config](https://user-images.githubusercontent.com/2841780/81432053-d7771080-917f-11ea-8381-758a3cc21064.png)

**The solution:** Soon, we'll get a domain (free ones like `bulwarkfm.js.org` or paid ones like `bulwark.fm` are both available), so we won't need to use the `bulwarkfm.github.io` domain.

## 📄 License

- Code: [MIT](./LICENSE)
- Content and static assets: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
