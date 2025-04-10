function Sitemap() {}

export async function getServerSideProps({ res }) {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/sitemap`
  );
  const sitemapData = await request.json();

  //   const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemapData.sitemap);
  res.end();

  return {
    props: {},
  };
}

export default Sitemap;
