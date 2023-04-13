import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';

const FeatureList = [
  {
    title: 'DevoteMe',
    Svg: require('../img/products/devoteMe/logo-color.svg').default,
    description: (
      <>
        With all of the products and applications we develop, we always strive to make our products unique in design and function for your needs.
      </>
    ),
  },
  {
    title: 'Player Head Hunt',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        ALl of our products and applications are actively being updated, fixing bugs and adding additional features.
      </>
    ),
  },
  {
    title: 'SMP Datapack',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We have an active development and user community to always help you with our products and to troubleshoot your issues.
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
