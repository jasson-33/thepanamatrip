import Metas from '@/components/metaDatas';
import AfterHero from '@/components/after-hero';
import ExperienceDetail from '@/components/experience-detail';
import Hero from '@/components/hero';
import React from 'react';

const Experience = ({ data }) => {
  const { metacontent, hero, content, experiences } = data;
  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
      <AfterHero contentAfterHero={content} />
      <ExperienceDetail contentExp={experiences} />
    </>
  );
};

export async function getServerSideProps() {
  const resExp = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/experience`
  );
  const data = await resExp.json();
  return {
    props: { data },
  };
}

export default Experience;
