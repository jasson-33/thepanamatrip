import React from 'react';
import styles from './img-section.module.css';

const ImgSection = ({ imgSection, bigImg }) => {
  return (
    <section
      className={`siteSection bg-cv ${styles.imgSection} ${
        bigImg && styles.bigImgSection
      }`}
      style={{ backgroundImage: `url(${imgSection})` }}></section>
  );
};

export default ImgSection;
