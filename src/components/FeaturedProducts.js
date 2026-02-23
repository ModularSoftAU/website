import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    Title: 'DevoteMe',
    Img: require('../img/products/devoteMe/logo-color.png').default,
    LinkRef: '/docs/products/devoteMe/',
    description: (
      <>
        A platform that helps people connect with the Gospel in an accessible
        way. Beyond the Bible, DevoteMe opens up additional paths to strengthen
        faith and deepen your relationship with God.
      </>
    ),
  },
  {
    Title: 'Player Head Hunt',
    Img: require('../img/products/playerHeadHunt/logo-color.png').default,
    LinkRef: '/docs/products/playerHeadHunt/',
    description: (
      <>
        Collect heads or blocks across a variety of exciting, configurable
        games — hide &amp; seek, Easter egg hunts, and more. Creativity is the
        only limit.
      </>
    ),
  },
  {
    Title: 'Craftify',
    Img: require('../img/products/craftify/logo-color.png').default,
    LinkRef: '/docs/products/craftify/',
    description: (
      <>
        A meticulously crafted datapack tailored to the way Minecraft is actually
        played. Revamped mechanics, fresh recipes, and a richer vanilla
        experience.
      </>
    ),
  },
];

function ProductFeature({Img, LinkRef, Title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.productCard}>
        <div className={styles.productCardBanner} />
        <div className={styles.productCardBody}>
          <img src={Img} className={styles.productImg} alt={Title} />
          <h3 className={styles.productTitle}>{Title}</h3>
          <p className={styles.productDescription}>{description}</p>
          <Link
            className={clsx('button button--md', styles.productButton)}
            to={LinkRef}>
            View Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductsHomepageFeatures() {
  return (
    <section className={clsx(styles.features, styles.featuresAlt)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Products</h2>
          <div className={styles.sectionDivider} />
          <p className={styles.sectionSubtitle}>
            Software built with care — documented, supported, and always
            improving.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <ProductFeature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
