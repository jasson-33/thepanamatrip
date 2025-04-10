import { ColombianContext } from '@/context/ColombianContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './post-card.module.css';

const PostCard = ({ popularPost, pageType, large }) => {
  const { Bigola } = useContext(ColombianContext);
  return (
    <div
      className={`${styles.postCard} ${
        popularPost ? styles.popularViewBlock : ''
      } ${pageType === 'catPageStyle' ? styles.catPageStyle : ''}`}
      style={{
        width: popularPost && popularPost.width,
        gridArea: popularPost && popularPost.gridArea,
      }}>
      <Link
        href={
          popularPost.typeurl === 'host'
            ? `${process.env.NEXT_PUBLIC_CURR_DOMAIN}${popularPost.href}`
            : popularPost.href
        }
        target={popularPost.target}
      />
      <div
        className={`${styles.containerImg}`}
        style={{ height: popularPost && popularPost.height }}>
        <Image
          fill
          src={`${
            popularPost.img.sizes
              ? large
                ? popularPost.img.url
                : popularPost.img.sizes.large
              : ''
          }`}
          alt=""
        />
      </div>
      <div
        className={`${styles.infoPost}`}
        style={{
          color: popularPost && popularPost.colorText,
          backgroundColor: popularPost && popularPost.bgColor,
        }}>
        <p className={`${styles.datePost} ${Bigola.className}`}>
          {popularPost.hide_date ? '' : popularPost.date}
        </p>
        <h2 className={`${styles.titlePost} ${Bigola.className}`}>
          {popularPost.title}
        </h2>
        <p className={styles.typePost}>{popularPost.type}</p>
      </div>
    </div>
  );
};

export default PostCard;
