import Metas from '@/components/metaDatas';
import Hero from '@/components/hero';
import React from 'react';
import Calendar from '@/components/calendar';
import AfterHero from '@/components/after-hero';

const GetInTouch = ({ data }) => {
  const { metacontent, hero, iframe_content, content } = data;

  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
      <AfterHero contentAfterHero={content} />
      <Calendar contentgetintouch={iframe_content} />
    </>
  );
};

export async function getServerSideProps() {
  const content = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/getintouch`
  );
  const data = await content.json();
  return {
    props: { data },
  };
}
export default GetInTouch;
