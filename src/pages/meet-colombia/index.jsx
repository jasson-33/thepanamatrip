import Metas from '@/components/metaDatas';
import AllPosts from '@/components/all-posts';
import Hero from '@/components/hero';
import React from 'react';

const MeetColombia = ({ data }) => {
  const { metacontent, hero, featured, categories } = data;
  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
      <AllPosts popularPost={featured} />
      {categories.length > 0 &&
        categories.map((cat, i) => (
          <AllPosts key={`categories${i}`} categoryPosts={cat} />
        ))}
    </>
  );
};

export default MeetColombia;

export async function getServerSideProps() {
  const contentMeet = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/meet-colombia`
  );
  const data = await contentMeet.json();
  return {
    props: { data },
  };
}
