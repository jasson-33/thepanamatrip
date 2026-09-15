import React from 'react';
import styles from './consciousTravel.module.css';

const ConsciousTravel = ({ consciousTravel }) => {
  console.log(consciousTravel);
  return (
    <div
      className={` ${styles.containerLegacy} containerLegacy`}
      dangerouslySetInnerHTML={{ __html: consciousTravel }}
    />
  );
};

export default ConsciousTravel;
