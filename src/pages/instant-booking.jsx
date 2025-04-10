import AfterHero from '@/components/after-hero';
import ExperienceDetail from '@/components/experience-detail';
import Hero from '@/components/hero';
import Metas from '@/components/metaDatas';

const InstantBooking = ({ data }) => {
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
  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/instant-booking`
  );
  const data = await resData.json();

  return { props: { data } };
}

export default InstantBooking;
