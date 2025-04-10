import { ColombianContext } from '@/context/ColombianContext';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import LatestPost from '../latest-post';
import PostCard from '../post-card';
import styles from './all-post.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AllPosts = ({
  popularPost,
  categoryPosts,
  allCategoryPost,
  pageType,
}) => {
  const { Bigola } = useContext(ColombianContext);
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section
      className={`siteSection ${styles.allpost} ${
        allCategoryPost && styles.allCatcontainer
      }`}>
      <div
        className={`container ${styles.containerAllPost} ${
          popularPost ? styles.popularView : ''
        }`}>
        {popularPost && (
          <>
            <div className={styles.titlesPosts}>
              <h3
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="0"
                className={`${styles.titlePostType} ${Bigola.className}`}>
                Popular Posts
              </h3>
              <h3
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="0"
                className={`${styles.titlePostType} ${Bigola.className}`}>
                Latest Posts
              </h3>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="0"
              className={styles.containerPopularLatestPost}>
              <PostCard popularPost={popularPost.popular} />
              <LatestPost latestPosts={popularPost.latest} />
            </div>
          </>
        )}
        {categoryPosts && categoryPosts.posts && categoryPosts.posts.length && (
          <>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="0"
              className={styles.titlesPosts}>
              <h3 className={`${styles.titlePostType} ${Bigola.className}`}>
                {categoryPosts.categoryType}
              </h3>
              <h3 className={`${styles.titlePostType} ${styles.viewAll}`}>
                <Link
                  href={`${
                    process.env.NEXT_PUBLIC_CURR_DOMAIN
                  }/meet-colombia/${categoryPosts.categoryType.toLowerCase()}`}>
                  VIEW ALL
                </Link>
              </h3>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="0"
              className={`${styles.containerPopularLatestPost} ${
                styles.containerByType
              } ${categoryPosts.layout === 'B' && styles.containerLayoutB}`}>
              <div className={`${styles.containerPrincipalPost} `}>
                <PostCard popularPost={categoryPosts.posts[0]} large={true} />
              </div>
              <div className={styles.otherPostContainer}>
                {categoryPosts.posts[1] && (
                  <PostCard popularPost={categoryPosts.posts[1]} />
                )}
                {categoryPosts.posts[2] && (
                  <PostCard popularPost={categoryPosts.posts[2]} />
                )}
              </div>
            </div>
          </>
        )}
        {allCategoryPost &&
          allCategoryPost.curr_posts &&
          allCategoryPost.curr_posts.length > 0 && (
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="0"
              className={`${styles.containerAllPosts} contAllCatPosts`}>
              {allCategoryPost.curr_posts.map((post, i) => (
                <PostCard
                  key={
                    typeof window !== 'undefined'
                      ? window.crypto.randomUUID()
                      : i
                  }
                  popularPost={post}
                  pageType={pageType === 'catPageStyle' ? 'catPageStyle' : ''}
                />
              ))}
            </div>
          )}
      </div>
      {allCategoryPost && allCategoryPost.max_pages > 1 && (
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="0"
          className={`${styles.containerPag} ${Bigola.className}`}>
          <ul>
            {(function () {
              const linkPages = [];
              for (let i = 1; i <= allCategoryPost.max_pages; i++) {
                linkPages.push(
                  <li
                    className={`${styles.itemPag} ${
                      parseInt(allCategoryPost.curr_page) === i
                        ? styles.selectedPag
                        : ''
                    }`}>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}/meet-colombia/${allCategoryPost.datacat}/?page=${i}`}>
                      {i}
                    </Link>
                  </li>
                );
              }
              return linkPages;
            })()}
          </ul>
        </div>
      )}
    </section>
  );
};

export default AllPosts;
