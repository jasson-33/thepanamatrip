import styles from './grid-images.module.css';

const GridImages = ({ isotopeImages }) => {
  return (
    <section className={styles.gridImages}>
      <div className={styles.containerGrid}>
        {isotopeImages &&
          isotopeImages.length > 0 &&
          isotopeImages.map((img, i) => (
            <div
              key={i}
              className={`${styles[`width-${img.width}`]} ${
                styles[`height-${img.height}`]
              } ${styles.innerGridImages}`}
              style={{
                backgroundImage: `url(${
                  img.img.sizes ? img.img.sizes.large : ''
                })`,
              }}></div>
          ))}
      </div>
    </section>
  );
};

export default GridImages;
