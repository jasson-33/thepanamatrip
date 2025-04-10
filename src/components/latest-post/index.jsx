import { ColombianContext } from '@/context/ColombianContext';
import Image from 'next/image';
import React, { useContext } from 'react';
import styles from './latest-post.module.css';
import Link from 'next/link';

const LatestPost = ({ latestPosts }) => {
  const { Bigola } = useContext(ColombianContext);
  return (
    <div className={styles.containerLatest}>
      <div className={styles.mobileTitle}>
        <h3 className={`${styles.titlePostType} ${Bigola.className}`}>
          Latest Post
        </h3>
      </div>
      {latestPosts.map((data, i) => (
        <div key={i} className={styles.lastPost}>
          <Link
            href={
              data.typeurl === 'host'
                ? `${process.env.NEXT_PUBLIC_CURR_DOMAIN}${data.href}`
                : data.href
            }
            target={data.target}
          />
          <div className={styles.containerImageLatest}>
            <Image
              alt=""
              src={data.img.sizes ? data.img.sizes.thumbnail : ''}
              fill
            />
          </div>
          <div className={styles.infoLatestPost}>
            <p className={`${styles.dateLatest} ${Bigola.className}`}>
              {data.hide_date ? '' : data.date}
            </p>
            <h2 className={`${styles.titleLatestPost} ${Bigola.className}`}>
              {data.title}
            </h2>
            <p className={styles.typeLatestPost}>{data.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestPost;
