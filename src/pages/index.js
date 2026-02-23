import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import CompanyFeatures from '../components/CompanyFeatures';
import FeaturedProducts from '../components/FeaturedProducts';

function AnchorIcon() {
  return (
    <svg
      className={styles.anchorIcon}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.8" />
      <line x1="12" y1="7" x2="12" y2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 10 C6 10 4 10 4 14 C4 18 8 19 12 19 C16 19 20 18 20 14 C20 10 18 10 18 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroOverlay} />
      <div className={clsx('container', styles.heroContent)}>
        <div className={styles.heroLogo}>
          <AnchorIcon />
        </div>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <div className={styles.heroDivider} />
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          A collective of passionate developers building purposeful software —
          from gaming tools to community platforms.
        </p>
        <div className={styles.heroButtons}>
          <Link
            className={clsx('button button--lg', styles.btnPrimary)}
            to="/docs/intro">
            Explore Documentation
          </Link>
          <Link
            className={clsx('button button--lg', styles.btnOutline)}
            href="https://github.com/ModularSoftAU">
            View on GitHub
          </Link>
        </div>
      </div>
      <div className={styles.heroWave}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--ifm-background-color, #ffffff)" />
        </svg>
      </div>
    </header>
  );
}

function StatsBar() {
  return (
    <div className={styles.statsBar}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4+</span>
            <span className={styles.statLabel}>Active Products</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>Open</span>
            <span className={styles.statLabel}>Source First</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Community Support</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>Always</span>
            <span className={styles.statLabel}>In Development</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Anchorlight Development — Grounding ideas. Illuminating solutions. Documentation for all our products and applications.">
      <HomepageHeader />
      <StatsBar />
      <main>
        <CompanyFeatures />
        <FeaturedProducts />
      </main>
    </Layout>
  );
}
