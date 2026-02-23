import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';

const FeatureList = [
  {
    title: 'Purpose-Built Solutions',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Every product we ship is designed from the ground up to solve a real
        problem. We anchor our work in your specific needs — no generic
        templates, no unnecessary complexity.
      </>
    ),
  },
  {
    title: 'Active Development',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Our team continuously improves every product. We ship regular updates,
        act quickly on feedback, and keep a strong engineering cadence so our
        tools stay reliable and modern.
      </>
    ),
  },
  {
    title: 'Community-Driven Support',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A thriving community of developers and users stands behind every
        Anchorlight product. Ask a question, report an issue, or join the
        conversation — you&apos;ll always find someone ready to help.
      </>
    ),
  },
];

function CompanyFeature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconRing}>
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
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
          <div className={styles.sectionDivider} />
          <p className={styles.sectionSubtitle}>
            Stable foundations. Bright outcomes. Software you can rely on.
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
