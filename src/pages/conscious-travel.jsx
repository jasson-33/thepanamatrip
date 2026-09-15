import Metas from '@/components/metaDatas';
import Hero from '@/components/hero';
import ConsciousTravel from '@/components/conscious-travel';
import React from 'react';

const consciousTravel = ({ data }) => {
  const { metacontent, hero, consciousTravel } = data;

  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
      <ConsciousTravel consciousTravel={consciousTravel} />
    </>
  );
};

export async function getServerSideProps() {
  const content = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/conscious-travel`
  );
  const data = await content.json();
  return {
    props: { data },
  };
}
export default consciousTravel;
