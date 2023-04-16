import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';

const FeatureList = [
  {
    title: 'Innovative Products',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        At our company, we are dedicated to crafting products and applications that are tailored to meet your specific needs. We take pride in creating designs and functionalities that set our products apart from the rest.
      </>
    ),
  },
  {
    title: 'Active Development',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Our team is committed to continuously improving all of our products and applications. We take a proactive approach to development, regularly updating and enhancing functionality, while diligently addressing any bugs or issues that arise.
      </>
    ),
  },
  {
    title: 'Supportive Community',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our products are backed by a robust community of both developers and users, all dedicated to providing exceptional support. Whether you need help troubleshooting an issue or simply have a question, you can rely on our community to provide timely and knowledgeable assistance.
      </>
    ),
  },
];

function CompanyFeature({Svg, title, description}) {
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

export default function CompanyHomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <CompanyFeature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
