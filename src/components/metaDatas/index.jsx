import Head from 'next/head';

const Metas = ({ metadata }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content={metadata.image.sizes ? metadata.image.sizes.large : ''}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.siteurl} />
        <meta
          property="og:image"
          content={metadata.image.sizes ? metadata.image.sizes.large : ''}
        />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:site_name" content={metadata.sitename} />
        <link
          rel="icon"
          href={
            metadata.favicon.sizes
              ? metadata.favicon.sizes['super-small']
              : '/favicon.png'
          }
        />
      </Head>
      <div
        id="custom-scripts"
        dangerouslySetInnerHTML={{ __html: metadata.custom_scripts }}
      />
    </>
  );
};

export default Metas;
