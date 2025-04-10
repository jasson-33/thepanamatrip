import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext, useEffect } from 'react';
import styles from './grid.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Grid = ({ contentGrid }) => {
  const { Bigola } = useContext(ColombianContext);

  useEffect(() => {
    AOS.init({});
  }, []);

  function get_block_by_grid(block) {
    switch (block.layout) {
      case 'image_text_image':
        return (
          <>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="0"
              className={`${styles.gridItem} bg-cv`}
              style={{
                backgroundImage: `url(${
                  block.image_1.sizes ? block.image_1.sizes.large : ''
                })`,
              }}
            />
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="150"
              className={`${styles.gridItem} ${styles.gridDescItem}`}
              style={{ backgroundColor: '#D23250', color: '#fff' }}>
              <h3
                className={`${styles.titleItemGrid} ${Bigola.className}`}
                dangerouslySetInnerHTML={{ __html: block.title }}
              />
              <div
                className={styles.infoGridItem}
                dangerouslySetInnerHTML={{ __html: block.text }}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="300"
              className={`${styles.gridItem} bg-cv`}
              style={{
                backgroundImage: `url(${
                  block.image_2.sizes ? block.image_2.sizes.large : ''
                })`,
              }}
            />
          </>
        );
      case 'text_image_text':
        return (
          <>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="0"
              className={`${styles.gridItem} ${styles.gridDescItem}`}
              style={{ backgroundColor: '#FCBE15', color: '#7A5D0C' }}>
              <h3
                className={`${styles.titleItemGrid} ${Bigola.className}`}
                dangerouslySetInnerHTML={{ __html: block.title_1 }}
              />
              <div
                className={styles.infoGridItem}
                dangerouslySetInnerHTML={{ __html: block.text_1 }}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="150"
              className={`${styles.gridItem} bg-cv`}
              style={{
                backgroundImage: `url(${
                  block.image.sizes ? block.image.sizes.large : ''
                })`,
              }}
            />
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="250"
              className={`${styles.gridItem} ${styles.gridDescItem}`}
              style={{ backgroundColor: '#AFCA0C', color: '#576409' }}>
              <h3
                className={`${styles.titleItemGrid} ${Bigola.className}`}
                dangerouslySetInnerHTML={{ __html: block.title_2 }}
              />
              <div
                className={styles.infoGridItem}
                dangerouslySetInnerHTML={{ __html: block.text_2 }}
              />
            </div>
          </>
        );
    }
  }

  return (
    <section className={`${styles.gridSection}`}>
      <div className={`container ${styles.gridContainer}`}>
        {contentGrid.length > 0 &&
          contentGrid.map((block) => get_block_by_grid(block))}
      </div>
    </section>
  );
};

export default Grid;
