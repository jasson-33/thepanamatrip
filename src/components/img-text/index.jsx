import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext, useEffect } from 'react';
import styles from './img-text.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImgText = ({ data }) => {
  const { Bigola } = useContext(ColombianContext);
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section className={`siteSection ${styles.imgTextSection}`}>
      {data.title ? (
        <h2
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="0"
          className={`${styles.titleBlockIMgtext} ${Bigola.className}`}
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
      ) : (
        ''
      )}

      <div
        className={`container ${styles.containerImgText} flex f-c f-ac ${
          data.invert ? styles.invert : ''
        }`}>
        <div className={styles.imgBlock}>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="0"
            className={`${styles.innerImgBlock} bg-cv`}
            style={{
              backgroundImage: `url(${
                data.content.img.sizes
                  ? data.content.img.sizes.medium_large
                  : ''
              })`,
            }}></div>
        </div>

        <div className={styles.textBlock}>
          {data.subtitle ? (
            <h3
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="0"
              className={`${styles.subtitleTextImg} ${Bigola.className}`}
              dangerouslySetInnerHTML={{ __html: data.subtitle }}
            />
          ) : (
            ''
          )}
          <p
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="0"
            className={styles.innerTextBlock}
            dangerouslySetInnerHTML={{ __html: data.content.text }}
          />
        </div>
      </div>
    </section>
  );
};

export default ImgText;
