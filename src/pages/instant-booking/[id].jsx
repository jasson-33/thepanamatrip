import Metas from '@/components/metaDatas';
import AfterHero from '@/components/after-hero';
import Hero from '@/components/hero';
import styles from './styles.module.css';
import { useContext } from 'react';
import { ColombianContext } from '@/context/ColombianContext';
import ImgSection from '@/components/img-section';
import TitleText from '@/components/titleText';
import GridImages from '@/components/gridImages';
import Link from 'next/link';

const InstanBookingDetail = ({ data }) => {
  const { Bigola } = useContext(ColombianContext);

  const { metacontent, hero, content, imgSection, contentTitleText, isotope } =
    data;
  if (!hero) {
    return <></>;
  }
  return (
    <>
      <Metas metadata={metacontent} />
      <Hero contentHero={hero} />
      <div className={styles.stickyBooking}>
        <p
          className={`${styles.textStickyBooking} ${Bigola.className}`}
          dangerouslySetInnerHTML={{ __html: hero.short_description }}
        />
        <div className={styles.bookingButtons}>
          {hero.haqlabel && hero.haqlabel !== '' && hero.haqlink !== '' && (
            <Link
              className={`${styles.bookingButton} ${styles.question}`}
              href={hero.haqlink}
              target={hero.haqtarget}
              dangerouslySetInnerHTML={{ __html: hero.haqlabel }}
            />
          )}
          {hero.bnlabel && hero.bnlabel !== '' && hero.bnlink !== '' && (
            <Link
              className={`${styles.bookingButton} ${styles.bookNow}`}
              href={hero.bnlink}
              target={hero.bntarget}
              dangerouslySetInnerHTML={{ __html: hero.bnlabel }}
            />
          )}
        </div>
      </div>
      <AfterHero contentAfterHero={content} />
      <ImgSection
        bigImg={false}
        imgSection={imgSection.url ? imgSection.url : ''}
      />
      <TitleText content={contentTitleText} />
      <GridImages isotopeImages={isotope} />
    </>
  );
};

export async function getServerSideProps(req) {
  const id = req.params.id;
  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/booking?databooking=${id}`
  );
  const data = await resData.json();
  if (data.length === 0) {
    return {
      notFound: true,
    };
  }
  return { props: { data } };
}

export default InstanBookingDetail;
