import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "MuxFM Glue",
    to: "glue/getting-started",
    imageUrl: "img/UnboxingDoodle.svg",
    description: (
      <>
        Generate your own, self-hosted podcast RSS feed and JSON API using
        AnchorFM
      </>
    ),
  },
  {
    title: "MuxFM Site",
    to: "site/getting-started",
    imageUrl: "img/DancingDoodle.svg",
    description: (
      <>
        A beautiful and fast static site for your podcast with episode pages and
        audio players
      </>
    ),
  },
  {
    title: "MuxFM UI",
    to: "ui/getting-started",
    imageUrl: "img/FloatDoodle.svg",
    description: (
      <>
        Build your own podcast sites and apps with web, React, Vue, and Svelte
        components
      </>
    ),
  },
];

function Feature({ imageUrl, title, to, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <Link
      to={useBaseUrl(`docs/${to}`)}
      className={classnames("col col--4", styles.feature)}
    >
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

function Home() {
  return (
    <Layout
      title={"The open-source podcasting stack"}
      description="MuxFM is the open-source podcasting stack"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            MuxFM is the open-source podcasting stack
          </h1>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--primary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get started with your podcast &rarr;
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
