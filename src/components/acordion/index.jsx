import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext } from 'react';
import styles from './acordion.module.css';

const Acordion = ({ dropdown }) => {
  const { Bigola } = useContext(ColombianContext);
  const stepsExperience = dropdown;

  const toggleAccordion = (e) => {
    const stepsContainer =
      e.target.parentElement.parentElement.querySelector('.stepsByDays');
    if (
      e.target.parentElement.parentElement.classList.contains(styles.active)
    ) {
      stepsContainer.style.height = `${0}px`;
      e.target.parentElement.parentElement.classList.remove(styles.active);
    } else {
      const stepsNodes =
        e.target.parentElement.parentElement.querySelector(
          '.stepsByDays'
        ).children;

      let maxHeight = 0;

      for (let index = 0; index < stepsNodes.length; index++) {
        const element = stepsNodes[index];

        const styles = window.getComputedStyle(element);

        maxHeight += element.offsetHeight;
        maxHeight += parseInt(styles.marginBottom);
      }

      stepsContainer.style.height = `${maxHeight}px`;
      e.target.parentElement.parentElement.classList.add(styles.active);
    }
  };
  return (
    <section className={`siteSection ${styles.acordionSection}`}>
      <ul className={`container ${styles.acordionContainer}`}>
        {stepsExperience.map((experience, i) => (
          <li
            key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i}
            className={styles.itemExperience}>
            <div className={`${styles.topItem} flex f-sb f-ac`}>
              <div className="captureClick" onClick={toggleAccordion}></div>
              <h3 className={`${styles.cityExperience} ${Bigola.className}`}>
                {experience.nameCity}
              </h3>
              <div className={`${styles.toggleExpand} bg-ct`}></div>
            </div>
            <div className={`${styles.stepsExperience} stepsByDays`}>
              {experience.steps.map((step, i) => (
                <div
                  key={i}
                  className={`flex f-sb f-as ${styles.singleStep} ${
                    i % 2 === 0 ? '' : styles.invert
                  }`}>
                  <div className={`${styles.infoStep}`}>
                    <h3
                      className={`${styles.infoDay} ${Bigola.className}`}
                      dangerouslySetInnerHTML={{ __html: step.infoDay }}
                    />
                    <div className={`${styles.featuresDay} flex f-js f-as`}>
                      {step.featuresDay.map((feature, i) => (
                        <div
                          key={i}
                          className={`${styles.feature} flex f-s f-ac`}>
                          <div
                            className={`${styles.iconFeature} bg-ct`}
                            style={{
                              backgroundImage: `url(${
                                feature.iconFeature.sizes
                                  ? feature.iconFeature.sizes['super-small']
                                  : ''
                              })`,
                            }}></div>
                          <p className={styles.featureText}>
                            {feature.infoFeature}
                          </p>
                        </div>
                      ))}
                    </div>

                    <h3
                      className={`${styles.subtitleDay}`}
                      dangerouslySetInnerHTML={{ __html: step.subtitleDayInfo }}
                    />
                    <p
                      className={styles.infoTextDay}
                      dangerouslySetInnerHTML={{ __html: step.textDayInfo }}
                    />
                  </div>
                  {step.imgDay && step.imgDay.sizes && (
                    <div className={styles.outerImgStep}>
                      <div
                        className={`${styles.imgStep} bg-cv`}
                        style={{
                          backgroundImage: `url(${step.imgDay.sizes['super-large']})`,
                        }}></div>
                      {step.imgCaption && step.imgCaption !== '' && (
                        <p className={styles.smallInfoImg}>{step.imgCaption}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Acordion;
