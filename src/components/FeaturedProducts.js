import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';
import Link from '@docusaurus/Link';

const ProductList = [
  {
    title: 'DevoteMe',
    Img: require('../img/products/devoteMe/logo-color.png').default,
    linkRef: '/docs/products/devoteMe/',
    badge: 'Beta',
    description: (
      <>
        A spiritual platform connecting people to the Gospel through daily
        devotions, Bible reading, and community. Integrates with Discord to
        bring faith into the spaces you already use.
      </>
    ),
  },
  {
    title: 'Player Head Hunt',
    Img: require('../img/products/playerHeadHunt/logo-color.png').default,
    linkRef: '/docs/products/playerHeadHunt/',
    badge: 'Stable',
    description: (
      <>
        A flexible Minecraft plugin for hide-and-seek, Easter egg hunts, and
        scavenger challenges. Configurable, creative, and endlessly replayable.
      </>
    ),
  },
  {
    title: 'Craftify',
    Img: require('../img/products/craftify/logo-color.png').default,
    linkRef: '/docs/products/craftify/',
    badge: 'Stable',
    description: (
      <>
        A Minecraft datapack that revamps crafting mechanics with 30+ new
        recipes, wood rebalancing, and bee-based content — built for players
        who want more depth from the game.
      </>
    ),
  },
];

function ProductCard({Img, linkRef, title, badge, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.productCard}>
        <div className={styles.productImgWrap}>
          <img src={Img} alt={title} className={styles.productImg} />
        </div>
        <div className={styles.productBody}>
          <div className={styles.productTitleRow}>
            <h3 className={styles.productTitle}>{title}</h3>
            <span className={clsx(styles.badge, styles[`badge${badge}`])}>{badge}</span>
          </div>
          <p className={styles.productDesc}>{description}</p>
          <Link
            className={clsx('button button--sm', styles.productBtn)}
            to={linkRef}>
            View Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductsHomepageFeatures() {
  return (
    <section className={clsx(styles.features, styles.productsSection)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <p className={styles.sectionSubtitle}>
            Explore what we've built — each product comes with full documentation and community support.
          </p>
        </div>
        <div className="row">
          {ProductList.map((props, idx) => (
            <ProductCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
