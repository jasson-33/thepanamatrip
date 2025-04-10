import Metas from '@/components/metaDatas';
import AfterHero from '@/components/after-hero';
import Hero from '@/components/hero';
import ImgSection from '@/components/img-section';
import ImgBlockBlog from '@/components/blog-img-block';
import TextBlog from '@/components/blog-text-block';
import ProudMembers from '@/components/proud-members';
import ImgText from '@/components/img-text';
import React from 'react';

const b2b = ({ data }) => {
  const { metacontent, hero, blocks, members } = data;

  function get_block_by_layout(block, index) {
    switch (block.layout) {
      case 'text_block':
        return (
          <TextBlog key={`text_block${index}`} textBlogBlock={block.content} />
        );
      case 'list_block':
        return (
          <AfterHero
            key={`list_block${index}`}
            contentAfterHero={block.content}
          />
        );
      case 'image_block':
        return (
          <ImgSection
            key={`image_block${index}`}
            imgSection={block.content.img ? block.content.img.url : ''}
          />
        );
      case 'image_grid_block':
        return (
          <ImgBlockBlog key={`img_grid_block${index}`} getimgsBlock={block} />
        );
      case 'split_block':
        return <ImgText key={`imgTextBlock${index}`} data={block.content} />;
    }
  }

  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
      {blocks.length > 0 &&
        blocks.map((block, i) => get_block_by_layout(block, i))}

      <ProudMembers membersData={members} />
    </>
  );
};

export async function getServerSideProps() {
  const content = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/b2b`
  );
  const data = await content.json();
  return {
    props: { data },
  };
}
export default b2b;
