import Metas from '@/components/metaDatas';
import AfterHero from '@/components/after-hero';
import Hero from '@/components/hero';
import HorizontalSection from '@/components/horizontal-section';
import React from 'react';

const HowItWorks = ({ data }) => {
  const { metacontent, hero, horizontal, tripdescription } = data;
  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
      <HorizontalSection horizontalType={'works'} horizontalData={horizontal} />
      <AfterHero contentAfterHero={tripdescription} />
    </>
  );
};

export async function getServerSideProps() {
  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/howworks`
  );
  const data = await resData.json();
  return {
    props: { data },
  };
}

export default HowItWorks;
