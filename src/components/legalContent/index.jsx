import React from 'react';
import styles from './legalContent.module.css';

const LegalContent = ({ legalcontent }) => {
  return (
    <div
      className={` ${styles.containerLegacy} containerLegacy`}
      dangerouslySetInnerHTML={{ __html: legalcontent }}
    />
  );
};

export default LegalContent;
