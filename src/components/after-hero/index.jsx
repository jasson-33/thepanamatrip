import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext, useEffect } from 'react';
import styles from './after-hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AfterHero = ({ contentAfterHero }) => {
  const { Bigola, Gotham_Bold } = useContext(ColombianContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={`siteSection ${
        contentAfterHero.infoItems.length > 0 ? styles.afterHero : ''
      } ${contentAfterHero.bookinLayout ? styles.bookingAfterHero : ''} ${
        contentAfterHero.secondLayout ? styles.secondLayout : ''
      } ${contentAfterHero.needPadding ? styles.paddingSection : ''}`}>
      {contentAfterHero.img && contentAfterHero.img.sizes && (
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-offset="200"
          data-aos-delay="0"
          className={`${styles.imgAfterHero} bg-ct`}
          style={{
            backgroundImage: `url(${contentAfterHero.img.sizes.medium_large})`,
          }}></div>
      )}

      {contentAfterHero.bookinLayout && (
        <div
          className={`${styles.palm} bg-ct`}
          style={{
            backgroundImage: `url(${
              contentAfterHero.bg_flower_1
                ? contentAfterHero.bg_flower_1.sizes.medium
                : ''
            })`,
          }}></div>
      )}
      {contentAfterHero.bookinLayout && (
        <div
          className={`${styles.palmB} bg-ct`}
          style={{
            backgroundImage: `url(${
              contentAfterHero.bg_flower_2
                ? contentAfterHero.bg_flower_2.sizes.medium
                : ''
            })`,
          }}></div>
      )}
      {contentAfterHero.bookinLayout && (
        <div
          className={`${styles.flower} bg-ct`}
          style={{
            backgroundImage: `url(${
              contentAfterHero.bg_flower_3
                ? contentAfterHero.bg_flower_3.sizes.medium
                : ''
            })`,
          }}></div>
      )}

      {((contentAfterHero.infoItems.length &&
        contentAfterHero.infoItems.length > 0) ||
        (contentAfterHero.blockTitle &&
          contentAfterHero.blockTitle.length > 0) ||
        (contentAfterHero.title && contentAfterHero.title.length > 0)) && (
        <div
          className={`container flex f-js f-as ${styles.containerAfterHero} ${
            contentAfterHero.blockTitle && styles.wrap
          }`}>
          {contentAfterHero.blockTitle && (
            <div className={styles.wrapperTitleAfterHero}>
              <h2
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-offset="0"
                data-aos-delay="0"
                className={`${
                  contentAfterHero.blockTitle.negative
                    ? styles.negativeMargin
                    : ''
                } ${styles.titleAfterHero} ${Bigola.className}`}
                dangerouslySetInnerHTML={{
                  __html: contentAfterHero.blockTitle.text,
                }}
              />
            </div>
          )}
          {!contentAfterHero.blockTitle && (
            <h2
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-offset="0"
              data-aos-delay="0"
              className={`${
                contentAfterHero.title.negative ? styles.negativeMargin : ''
              } ${styles.titleAfterHero} ${Bigola.className}`}
              dangerouslySetInnerHTML={{
                __html: contentAfterHero.title.text,
              }}></h2>
          )}

          <ul className={styles.ulAfterHero}>
            {contentAfterHero.infoItems.map((info, i) => (
              <li
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-offset="0"
                data-aos-delay="0"
                key={i}
                className={`${info.bold ? Gotham_Bold.className : ''} ${
                  styles.itemUlAfterHero
                }`}
                dangerouslySetInnerHTML={{ __html: info.text }}></li>
            ))}
          </ul>

          {contentAfterHero.bookinLayout &&
            contentAfterHero.imagesBooking &&
            contentAfterHero.imagesBooking.length > 0 && (
              <div className={styles.imagesAfterHeroBooking}>
                <div
                  className={`${styles.secondColumn} ${styles.columnImages}`}>
                  {contentAfterHero.imagesBooking.map(function (img, i) {
                    if (i % 2 !== 0) {
                      return (
                        <div
                          key={i}
                          style={{
                            backgroundImage: `url(${
                              img.sizes ? img.sizes.medium : ''
                            })`,
                          }}
                          className={styles.imageBookingDetail}></div>
                      );
                    }
                  })}
                </div>
                <div className={`${styles.firstColumn} ${styles.columnImages}`}>
                  {contentAfterHero.imagesBooking.map(function (img, i) {
                    if (i % 2 === 0) {
                      return (
                        <div
                          key={i}
                          style={{
                            backgroundImage: `url(${
                              img.sizes ? img.sizes.medium : ''
                            })`,
                          }}
                          className={styles.imageBookingDetail}></div>
                      );
                    }
                  })}
                </div>
              </div>
            )}
        </div>
      )}
    </section>
  );
};

export default AfterHero;
