import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import CompanyFeatures from '../components/CompanyFeatures';
import FeaturedProducts from '../components/FeaturedProducts';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <span className={styles.heroAnchorIcon}>⚓</span>
        <h1 className={styles.heroTitle}>
          Anchor<span className={styles.heroAccent}>light</span>
          <br />Development
        </h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.buttonGold)}
            to="/docs/intro">
            Explore Docs
          </Link>
          <a
            className={clsx('button button--outline button--lg', styles.buttonOutline)}
            href="https://github.com/ModularSoftAU">
            View on GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Anchorlight Development — purpose-built software anchored in quality.">
      <HomepageHeader />
      <main>
        <CompanyFeatures />
        <FeaturedProducts />
      </main>
    </Layout>
  );
}
