import Metas from '@/components/metaDatas';
import AfterHero from '@/components/after-hero';
import Hero from '@/components/hero';
import ImgSection from '@/components/img-section';
import ImgText from '@/components/img-text';
import Team from '@/components/team';
import React from 'react';

const About = ({ data }) => {
  const { metacontent, hero, content, image_section, img_text, team } = data;
  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
      <AfterHero contentAfterHero={content} />
      <ImgSection
        imgSection={
          image_section.sizes
            ? image_section.sizes['super-large']
            : '/images/experiences/6.jpg'
        }
      />
      {img_text.map((data, i) => (
        <ImgText
          key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i}
          data={data}
        />
      ))}
      <Team teamData={team} />
    </>
  );
};

export async function getServerSideProps() {
  const contentAbout = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/about`
  );
  const data = await contentAbout.json();
  return {
    props: { data },
  };
}

export default About;
