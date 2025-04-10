import Metas from '@/components/metaDatas';
import Hero from '@/components/hero';
import LegalContent from '@/components/legalContent';
import React from 'react';

const privacy = ({ data }) => {
  const { metacontent, hero, legalcontent } = data;

  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
      <LegalContent legalcontent={legalcontent} />
    </>
  );
};

export async function getServerSideProps() {
  const content = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/privacy-data`
  );
  const data = await content.json();
  return {
    props: { data },
  };
}
export default privacy;
