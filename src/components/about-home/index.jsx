import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext, useEffect, useState } from 'react';
import styles from './about-home.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutHome = ({ aboutHome }) => {
  const { Bigola, Gotham_Bold } = useContext(ColombianContext);
  const [screenWidth, setScreenWidth] = useState(1920);

  useEffect(() => {
    const resizeWindow = () => {
      setScreenWidth(typeof window !== 'undefined' && window.innerWidth);
    };
    window.addEventListener('resize', () => {
      resizeWindow();
    });

    return () => {
      window.removeEventListener('resize', () => {
        resizeWindow();
      });
    };
  }, [screenWidth]);
  useEffect(() => {
    AOS.init({});

    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);
  return (
    <section className={`siteSection ${styles.aboutHome}`}>
      <div className={`container ${styles.containerAboutHome} flex f-s f-as`}>
        <div className={styles.leftAboutHome}>
          <h2
            className={`${styles.titleAbout} ${Bigola.className}`}
            dangerouslySetInnerHTML={{ __html: aboutHome.about_title }}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="0"
          />

          <h3
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="0"
            className={`${styles.subtitleAbout} ${Gotham_Bold.className}`}
            dangerouslySetInnerHTML={{ __html: aboutHome.about_subtitle }}
          />

          {screenWidth && screenWidth <= 768 && (
            <div
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="0"
              className={`${styles.imageAboutHome} ${styles.imageAboutHomeMobile} bg-cv`}
              style={{
                backgroundImage: `url(${aboutHome.about_image.sizes.medium_large})`,
              }}></div>
          )}

          <div className={styles.paragraphsGroup}>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="0"
              className={styles.paragraphAbout}
              dangerouslySetInnerHTML={{ __html: aboutHome.about_description }}
            />
          </div>
        </div>

        {screenWidth && screenWidth > 768 && (
          <div className={styles.rightAboutHome}>
            <div
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="0"
              className={`${styles.imageAboutHome} bg-cv`}
              style={{
                backgroundImage: `url(${aboutHome.about_image.sizes.medium_large})`,
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutHome;
