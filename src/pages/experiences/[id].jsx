import Metas from '@/components/metaDatas';
import Acordion from '@/components/acordion';
import AfterHero from '@/components/after-hero';
import Hero from '@/components/hero';
import ImgSection from '@/components/img-section';
import InfoRecomendations from '@/components/info-recomendations';
import React from 'react';

const DetailExperience = ({ data }) => {
  const { metacontent, hero, blocks, dropdown, information } = data;

  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
      {blocks.map((block, i) => {
        switch (block.layout) {
          case 'list_block':
            return <AfterHero key={i} contentAfterHero={block.content} />;
          case 'image_block':
            return (
              <ImgSection
                key={i}
                imgSection={block.content.img ? block.content.img.url : ''}
              />
            );
        }
      })}
      <Acordion dropdown={dropdown} />
      <InfoRecomendations datainfo={information} />
    </>
  );
};

export async function getServerSideProps(context) {
  const datafetch = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/experience-detail?dataexp=${context.params.id}`
  );
  const data = await datafetch.json();
  if (data.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}

export default DetailExperience;
