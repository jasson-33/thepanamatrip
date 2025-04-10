import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext, useEffect } from 'react';
import styles from './proud-members.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProudMembers = ({ membersData }) => {
  const { Bigola } = useContext(ColombianContext);
  const { title, text, logos } = membersData;

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className={`siteSection ${styles.proudSection}`}>
      <div className={`container ${styles.containerProudMembers}`}>
        <h2
          className={`${styles.titleProud} ${Bigola.className}`}
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="0"
          dangerouslySetInnerHTML={{ __html: title }}></h2>
        <h3
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="0"
          className={styles.subtitleProudMembers}
          dangerouslySetInnerHTML={{ __html: text }}></h3>
      </div>

      <div className={`${styles.wrapperMembers}`}>
        <div
          className={`${styles.containerMembers} flex f-ac f-c`}
          style={{
            width: `${logos.length * 16 > 100 ? logos.length * 16 : 100}vw`,
          }}>
          {logos.map((logo, i) => (
            <div
              key={
                typeof window !== 'undefined' ? window.crypto.randomUUID() : i
              }
              className={`${styles.memberIcon} bg-ct`}
              style={{
                backgroundImage: `url(${logo.url})`,
                width: `${100 / logos.length}%`,
              }}></div>
          ))}
        </div>

        <div
          className={`${styles.containerMembers} flex f-ac f-c`}
          style={{
            width: `${logos.length * 16 > 100 ? logos.length * 16 : 100}vw`,
            left: `${logos.length * 16 > 100 ? logos.length * 16 : 100}vw`,
          }}>
          {logos.map((logo, i) => (
            <div
              key={
                typeof window !== 'undefined' ? window.crypto.randomUUID() : i
              }
              className={`${styles.memberIcon} bg-ct`}
              style={{
                backgroundImage: `url(${logo.url})`,
                width: `${100 / logos.length}%`,
              }}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProudMembers;
