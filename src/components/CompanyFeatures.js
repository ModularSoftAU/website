import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';

const FeatureList = [
  {
    title: 'Purpose-Driven Products',
    icon: '🔨',
    description: (
      <>
        Every tool we build starts with a real need. We craft applications with
        clear intent — designed to fit naturally into the lives of the people
        who use them, from gamers to communities of faith.
      </>
    ),
  },
  {
    title: 'Active Development',
    icon: '⚙️',
    description: (
      <>
        Our projects are never abandoned. We commit to continuous improvement —
        shipping updates, resolving issues, and expanding features so our
        software keeps pace with the communities that rely on it.
      </>
    ),
  },
  {
    title: 'Open & Transparent',
    icon: '🌐',
    description: (
      <>
        We believe in building in the open. Our code is accessible, our
        roadmaps are shared, and our community is always welcome to contribute,
        report issues, or suggest improvements.
      </>
    ),
  },
];

function CompanyFeature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <div className={styles.featureDivider} />
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function CompanyHomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Anchorlight?</h2>
          <p className={styles.sectionSubtitle}>
            Built by developers who care about craft, community, and impact.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <CompanyFeature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
