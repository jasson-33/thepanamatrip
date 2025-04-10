import React, { useState } from 'react';
import styles from './info-recomendations.module.css';

const InfoRecomendations = ({ datainfo }) => {
  const [typeInfo, setTypeInfo] = useState('docs');

  const { documents, recomendations } = datainfo;

  /*
  const docsExperience = {
    notes: [
      'The yellow fever vaccine is suggested , please bring a valid card. The vaccine has to be placed at least 10 days in advance of arrival to the Amazon.',
      'Flights departing from Leticia must be programmed after noon.',
    ],
    inlcuded: [
      'Transfer Leticia&apos;s Airport – Pier of Leticia – Leticia&apos;s Airport in Private service',
      'Transfer on boat from Pier to Calanoa&apos;s Natural Reserve and viceversa in Private service',
      '3 nights in a cottage with (3 breakfasts , 3 lunches and 3 dinners - menu)',
      'Nocturnal Hiking Tour in regular service',
      'Tour to visit the indigenous communities , The Matamata waterfall and the canoes paddling experience in shared service. (The last one, subject to the water level condition).',
      'Hike tour in The Mocagua&apos;s Island , visit to the lakes where the “Victorias Amazonicas” plants are and boat trip to search the Pink Dolphins and to enjoy an Amazon sunset in shared service.',
      'English speaking guide',
    ],
    notIncluded: [
      'Tourism Tax of the Leticia&apos;s airport, that should be paid directly there, in Colombian pesos (approximately USD 12 per person)',
      'Domestic flights',
    ],
  };
  
  const recomendationsExperience = {
    notes: [
      'Flights departing from Leticia must be programmed after noon.',
      'The yellow fever vaccine is suggested , please bring a valid card. The vaccine has to be placed at least 10 days in advance of arrival to the Amazon.',
    ],
    inlcuded: [
      '3 nights in a cottage with (3 breakfasts , 3 lunches and 3 dinners - menu)',
      'Transfer on boat from Pier to Calanoa&apos;s Natural Reserve and viceversa in Private service',
      'Hike tour in The Mocagua&apos;s Island , visit to the lakes where the “Victorias Amazonicas” plants are and boat trip to search the Pink Dolphins and to enjoy an Amazon sunset in shared service.',
      'English speaking guide',
      'Nocturnal Hiking Tour in regular service',
      'Tour to visit the indigenous communities , The Matamata waterfall and the canoes paddling experience in shared service. (The last one, subject to the water level condition).',
      'Transfer Leticia&apos;s Airport – Pier of Leticia – Leticia&apos;s Airport in Private service',
    ],
  };
  */
  const htmlInner = typeInfo === 'docs' ? documents : recomendations;
  return (
    <section className={`${styles.infoRecomendation} siteSection`}>
      <div className={`container ${styles.infoRecomendContainer}`}>
        <div className={`${styles.controllersContainer}`}>
          <div
            className={`${styles.controller} ${
              typeInfo === 'docs' && styles.active
            }`}
            onClick={() => setTypeInfo('docs')}>
            <div
              className={`${styles.iconController} ${styles.infoIcon} bg-ct`}></div>
            <p className={`${styles.labelController}`}>
              Information & Documents
            </p>
          </div>
          <div
            className={`${styles.controller} ${
              typeInfo !== 'docs' && styles.active
            }`}
            onClick={() => setTypeInfo('recomend')}>
            <div
              className={`${styles.iconController} ${styles.recomendIcon} bg-ct`}></div>
            <p className={`${styles.labelController}`}>Recommendations</p>
          </div>
        </div>

        <div className={`${styles.innerInfo}`}>
          <div
            className={styles.containerInnerInfo}
            dangerouslySetInnerHTML={{ __html: htmlInner }}></div>
        </div>
      </div>
    </section>
  );
};

export default InfoRecomendations;
