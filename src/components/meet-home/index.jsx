import { ColombianContext } from '@/context/ColombianContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import styles from './meet-home.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Atropos from 'atropos/react';
import 'atropos/css';

const MeetHome = ({ blogdata }) => {
  const { title, subtitle, blogs } = blogdata;
  const { Bigola, Gotham_Bold } = useContext(ColombianContext);

  useEffect(() => {
    AOS.init({});
  }, []);

  const atroposProps = {
    shadow: false,
    rotateYMax: 1.5,
    rotateXMax: 1.5,
  };

  return (
    <section className={`siteSection ${styles.meetSection}`}>
      <div className={`container ${styles.containerMeetSction}`}>
        <h2
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="0"
          className={`${styles.meetHomeTitle} ${Bigola.className}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <h3
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="0"
          className={`${styles.subtitleMeetHome}`}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />

        <div className={styles.blogsContainer}>
          {blogs.map((blog, i) => (
            <Link
              href={
                blog.typeurl === 'host'
                  ? `${process.env.NEXT_PUBLIC_CURR_DOMAIN}${blog.url}`
                  : blog.url
              }
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="0"
              target={blog.target}
              key={
                typeof window !== 'undefined' ? window.crypto.randomUUID() : i
              }
              className={`${styles.cardBlog} `}>
              <Atropos className={styles.atroposBlogCard} {...atroposProps}>
                <div className={`bg-cv ${styles.imgCardBog}`}>
                  <Image
                    src={blog.img.sizes ? blog.img.sizes.large : ''}
                    fill
                    alt="img-blog"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <p
                  data-atropos-offset="-.5"
                  className={`${Bigola.className} ${styles.dateCardBlog}`}>
                  {blog.hide_date ? '' : blog.date}
                </p>
                <h2
                  data-atropos-offset="-1.5"
                  className={`${styles.titleCardBlog} ${Bigola.className}`}>
                  {blog.title}
                </h2>
                <p
                  data-atropos-offset="-2.5"
                  className={styles.summaryCardBlog}>
                  {blog.summary}
                </p>
                <div
                  data-atropos-offset="1.5"
                  className={`${styles.readMoreAnchor} ${Gotham_Bold.className}`}>
                  <span className={`bg-ct ${styles.arrowRight}`}></span> Read
                  More
                </div>
              </Atropos>
            </Link>
          ))}
        </div>
        <Link
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="0"
          href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}/meet-colombia`}
          className={`${styles.allArticles} ${styles.readMoreAnchor} ${Gotham_Bold.className}`}>
          <span
            className={`bg-ct ${styles.arrowRight} ${Gotham_Bold.className}`}></span>
          <span className={styles.innerTextCtaBtn}>VIEW ALL ARTICLES</span>
        </Link>
      </div>
    </section>
  );
};

export default MeetHome;
