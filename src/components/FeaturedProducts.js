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
        A platform that aims to help people connect with the Gospel in a more accessible way. While the Bible is a crucial resource for Christians, the platform acknowledges that there are several other ways to strengthen one's faith and deepen their relationship with God.
      </>
    ),
  },
  {
    Title: 'Player Head Hunt',
    Img: require('../img/products/playerHeadHunt/logo-color.png').default,
    LinkRef: '/docs/products/playerHeadHunt/',
    description: (
      <>
        Lets you collect heads or blocks in a variety of exciting games you can create and configure, such as hide and seek or Easter egg hunts. With this the possibilities for fun and creativity are endless.
      </>
    ),
  },
  // {
  //   Title: 'SMP Datapack',
  //   Img: require('../img/products/playerHeadHunt/logo-color.png').default,
  //   LinkRef: '/docs/products/playerHeadHunt/',
  //   description: (
  //     <>
  //       Tailored specifically to the way Minecraft is played, our meticulously crafted pack enhances your gameplay with revamped mechanics and recipes, delivering an immersive experience that keeps you engaged for hours.
  //     </>
  //   ),
  // },
];

function ProductFeature({Img, LinkRef, Title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} height="250px" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{Title}</h3>

        <Link
          className="button button--secondary button--lg"
          to={LinkRef}>
          Product Documenation
        </Link>
        <br /><br />

        <p>{description}</p>
      </div>
    </div>
  );
}

export default function ProductsHomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className="text--center">Featured Products</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <ProductFeature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
