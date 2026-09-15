import React from 'react';
import styles from './consciousTravel.module.css';

const ConsciousTravel = ({ consciousTravel }) => {
  return (
    <div
      className={` ${styles.containerLegacy} containerLegacy`}
      dangerouslySetInnerHTML={{ __html: consciousTravel }}
    />
  );
};

export default ConsciousTravel;
