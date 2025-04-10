import Metas from '@/components/metaDatas';
import AfterHero from '@/components/after-hero';
import Grid from '@/components/grid';
import Hero from '@/components/hero';
import React from 'react';

const WhyChoosUs = ({ data }) => {
  const { metacontent, hero, descriptions, grid } = data;
  /*
  const contentHero = {
    type: 'secondary',
    title: 'Why Choose Us',
    img_banner: { sizes: { 'super-large': '/images/why-choose/45.jpg' } },
  };
  const contentAfterHero = {
    img: { sizes: { medium_large: '/images/general/icono2.png' } },
    title: {
      text: 'Let Us Reveal the Heart and Soul of Colombia',
      negative: false,
    },
    infoItems: [
      {
        text: 'Feel the rhythm of Colombia move you on your own custom-crafted journey, designed by The Colombian Trip.',
        bold: false,
      },
      {
        text: 'We have the passion, people, knowledge, and deep-seated commitment to client care that will ensure your escape exceeds every expectation.',
        bold: false,
      },
      {
        text: 'On your Colombian Trip, you’ll get:',
        bold: false,
      },
    ],
    blockTitle: true,
  };
*/

  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
      <AfterHero contentAfterHero={descriptions} />
      <Grid contentGrid={grid} />
    </>
  );
};

export async function getServerSideProps() {
  const content = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/whychoose`
  );
  const data = await content.json();
  return {
    props: { data },
  };
}

export default WhyChoosUs;
