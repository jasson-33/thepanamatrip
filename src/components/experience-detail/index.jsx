import Link from 'next/link';
import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext, useEffect } from 'react';
import styles from './experience-detail.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Atropos from 'atropos/react';
import 'atropos/css';

const ExperienceDetail = ({ contentExp }) => {
  const { Bigola } = useContext(ColombianContext);

  const atroposProps = {
    shadow: false,
    rotateYMax: 1.5,
    rotateXMax: 1.5,
  };
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section className={`siteSection ${styles.experienceDetailSection}`}>
      <div
        className={`container flex f-jc f-as ${styles.containerExperiencesDetail}`}>
        {contentExp.map(
          ({ img, width, title, id, external_link, target }, i) => (
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="0"
              key={id + i}
              className={`${styles.cardExperience} ${
                styles[`experience-${i}`]
              }`}
              style={{
                width: width === '100%' ? width : `calc(${width} - 20px)`,
              }}>
              <Atropos className={styles.atroposExperience} {...atroposProps}>
                <Link
                  href={
                    external_link
                      ? external_link !== ''
                        ? external_link
                        : `${process.env.NEXT_PUBLIC_CURR_DOMAIN}${id}`
                      : `${process.env.NEXT_PUBLIC_CURR_DOMAIN}${id}`
                  }
                  passHref={
                    external_link !== null && external_link !== undefined
                  }
                  target={target}>
                  <div
                    className={`bg-cv ${styles.imgCardExperience}`}
                    style={{
                      backgroundImage: `url(${
                        img.sizes
                          ? width === '100%'
                            ? img.url
                            : img.sizes.large
                          : ''
                      })`,
                    }}></div>
                  <h2
                    data-atropos-offset={`${width === '100%' ? '0' : '0.255'}`}
                    className={`${styles.titleCard} ${Bigola.className}`}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                </Link>
              </Atropos>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ExperienceDetail;
