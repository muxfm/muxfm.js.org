module.exports = {
  title: "MuxFM",
  tagline: "The open source podcast stack",
  url: "https://muxfm.github.io/docs/",
  baseUrl: "/docs/",
  favicon: "https://avatars0.githubusercontent.com/u/64641444?s=200&v=4",
  organizationName: "muxfm",
  projectName: "docs",
  themeConfig: {
    navbar: {
      title: "MuxFM",
      logo: {
        alt: "",
        src: "https://avatars0.githubusercontent.com/u/64641444?s=200&v=4",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/muxfm",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "MuxFM Docs",
          items: [
            {
              label: "Glue: RSS feed and JSON API generator",
              to: "docs/glue/",
            },
            {
              label: "Site: Static site for your podcast",
              to: "docs/site/",
            },
            {
              label: "UI: Web components libraries",
              to: "docs/ui/",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/muxfm",
            },
            {
              label: "MuxFM Blog",
              to: "blog",
            },
            {
              label: "@MuxFM on GitHub",
              href: "https://github.com/muxfm",
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "about",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/muxfm/docs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/muxfm/docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
