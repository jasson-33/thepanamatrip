import Metas from '@/components/metaDatas';
import Hero from '@/components/hero';
import BlogArterfHero from '@/components/blog-after-hero';
import ImgBlockBlog from '@/components/blog-img-block';
import TextBlog from '@/components/blog-text-block';
import React from 'react';

const DetailPost = ({ data }) => {
  const {
    metacontent,
    hero,
    blocks,
    dateformat,
    autor,
    hide_autor,
    hide_date,
  } = data;

  const blogAfterHero = {
    autor,
    hide_autor,
    hide_date,
    date: dateformat,
    subtitle: '',
  };

  function get_block_by_layout(block, index) {
    switch (block.layout) {
      case 'text_block':
        return (
          <TextBlog key={`text_block${index}`} textBlogBlock={block.content} />
        );
      case 'image_grid_block':
        return (
          <ImgBlockBlog
            key={`img_grid_blocknpm run dev${index}`}
            getimgsBlock={block}
          />
        );
    }
  }
  if (!blocks) {
    return <></>;
  }
  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} pageType={'post'} />
      <BlogArterfHero blogAfterHero={blogAfterHero} />

      {blocks.length > 0 &&
        blocks.map((block, i) => get_block_by_layout(block, i))}
      {/*
      <TextBlog textBlogBlock={textBlogDesctwo} />
      <ImgBlockBlog getimgsBlock={getimgsBlock} />
      <TextBlog textBlogBlock={textBlogDesc} />
      <ImgBlockBlog getimgsBlock={getimgsBlockFull} />
      */}
    </>
  );
};

export async function getServerSideProps(req) {
  const id = req.params.id;
  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/blog?datablog=${id}`
  );
  const data = await resData.json();
  if (data.length === 0) {
    return {
      notFound: true,
    };
  }
  console.log(data);
  return { props: { data } };
}

export default DetailPost;
