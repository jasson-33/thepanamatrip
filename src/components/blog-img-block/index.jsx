import React from 'react';
import styles from './blog-img-block.module.css';

const ImgBlockBlog = ({ getimgsBlock }) => {
  return (
    <section className="siteSection">
      <div
        className={`${styles.innerWidthImg} ${
          getimgsBlock.imagesBlock.length > 1
            ? styles.conthalf
            : styles.contfull
        }`}>
        {getimgsBlock.imagesBlock.map((currimgBlog, i) => (
          <div
            key={i}
            className={`${
              getimgsBlock.imagesBlock.length > 1
                ? styles.halfWidth
                : styles.fullWidth
            } ${styles.currimgBlog}`}
            style={{
              backgroundImage: `url(${
                currimgBlog.img.sizes ? currimgBlog.img.sizes.medium_large : ''
              })`,
            }}></div>
        ))}
      </div>
    </section>
  );
};

export default ImgBlockBlog;
