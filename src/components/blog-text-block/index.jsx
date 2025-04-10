import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext } from 'react';
import styles from './blog-text-block.module.css';

const TextBlog = ({ textBlogBlock }) => {
  const { Bigola, Gotham_Bold } = useContext(ColombianContext);

  return (
    <section className="siteSection">
      <div className={styles.innerContText}>
        {textBlogBlock.title && textBlogBlock.title !== '' && (
          <div
            className={`${styles.titleTextBlog} ${Bigola.className}`}
            dangerouslySetInnerHTML={{ __html: textBlogBlock.title }}
          />
        )}
        {textBlogBlock.subtitle && textBlogBlock.subtitle !== '' && (
          <div
            className={`${styles.subTitleTextBlog} ${Gotham_Bold.className}`}
            dangerouslySetInnerHTML={{ __html: textBlogBlock.subtitle }}
          />
        )}
        {textBlogBlock.desc && textBlogBlock.desc !== '' && (
          <div
            className={styles.descTextBlog}
            dangerouslySetInnerHTML={{ __html: textBlogBlock.desc }}
          />
        )}
      </div>
    </section>
  );
};

export default TextBlog;
