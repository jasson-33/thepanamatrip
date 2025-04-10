import Footer from '@/components/footer';
import { SplitText } from '@cyriacbr/react-split-text';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function PageNotFound() {
  const [footerData, setFooterData] = useState();
  const getFooterData = async () => {
    const responserFooter = await fetch('/api/footer');
    const dataFooter = await responserFooter.json();
    setFooterData(dataFooter.footerdata);
  };
  useEffect(() => {
    getFooterData();
  }, []);

  return (
    <>
      <section className="custom404Section">
        <div className="container container404">
          <SplitText className="title404">404</SplitText>
          <p className="pageNotFoundText">Page not found</p>
          <Link
            className="returnHome"
            href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}/`}>
            <div className="iconCtaHero bg-ct"></div>
            <span className="ctaLabelHero">HOME</span>
          </Link>
        </div>
      </section>
      {footerData && <Footer datafooter={footerData} changeLayout={false} />}
    </>
  );
}

export default PageNotFound;
