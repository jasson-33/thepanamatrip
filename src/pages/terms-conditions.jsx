import Metas from '@/components/metaDatas';
// import AfterHero from '@/components/after-hero';
import Hero from '@/components/hero';
import LegalContent from '@/components/legalContent';
// import ImgSection from '@/components/img-section';
// import ImgText from '@/components/img-text';
// import ProudMembers from '@/components/proud-members';
import React from 'react';

const termsconditions = ({ data }) => {
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
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/termsconditions`
  );
  const data = await content.json();
  return {
    props: { data },
  };
}
export default termsconditions;
