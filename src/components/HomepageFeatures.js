import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We have designed Zander to be easy to use and set up.
        If you have any trouble we have a small team of Developers that can help you in troubleshooting and answering questions.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Don't actually know yet...
      </>
    ),
  },
  {
    title: 'Multi-Platform Framework',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Zander uses multiple frameworks, APIs and platforms to make what it is work. 
        With the use of Minecraft, Discord, the Website, an internal API and all interconnected through a MySQL database.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
