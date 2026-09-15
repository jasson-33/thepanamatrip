import Metas from '@/components/metaDatas';
import Hero from '@/components/hero';
import ConsciousTravel from '@/components/conscious-travel';
import React from 'react';

const consciousTravel = ({ data }) => {
  const { metacontent, hero, legalcontent } = data;

  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
      <ConsciousTravel consciousTravel={legalcontent} />
    </>
  );
};

export async function getServerSideProps() {
  const content = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/privacy-data`
  );
  const data = await content.json();

  if (!content.ok || !data.metacontent) {
    return { notFound: true };
  }

  return {
    props: { data },
  };
}
export default consciousTravel;
