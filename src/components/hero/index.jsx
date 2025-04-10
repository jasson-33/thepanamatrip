import { ColombianContext } from '@/context/ColombianContext';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import styles from './hero.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = ({ contentHero, pageType }) => {
  const { Bigola } = useContext(ColombianContext);

  const {
    img_banner,
    title,
    subtitle,
    type,
    links,
    withForm,
    form,
    video_banner,
    paragraphText,
    template,
    haqlabel,
    haqlink,
    haqtarget,
    bnlabel,
    bnlink,
    bntarget,
  } = contentHero;

  useEffect(() => {
    AOS.init();
  }, []);

  const sendDataFormHero = async (event) => {
    event.preventDefault();
    const name = event.target.querySelector('#f_name_h').value;
    const email = event.target.querySelector('#f_email_h').value;
    const message = event.target.querySelector('#f_message_h').value;

    if (!name) {
      alert('Please enter your name.');
      return false;
    }

    if (!email) {
      alert('Please enter your Email.');
      return false;
    }

    if (!message) {
      alert('Please enter your Message.');
      return false;
    }

    const formDataHero = {
      'fname': name,
      'femail': email,
      'fmessage': message,
    };

    // const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/contact-footer-full`;
    const endpoint = '/api/send-form-hero';

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formDataHero),
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();

    if (result.status) {
      const redirectTo = 'b2b';
      window.location.href = `/thank-you-${redirectTo}`;
    }
  };

  return (
    <>
      <section
        className={`${styles.hero} bg-cv ${
          template === 'instant-booking' ? styles.instanBookingHero : ''
        } ${contentHero.withForm && styles.withForm} ${
          contentHero.blog && styles.smallHero
        } ${
          contentHero.type === 'principal'
            ? styles.principalHero
            : styles.secondaryHero
        } ${contentHero.withForm === true ? styles.heroPageForm : ''} ${
          pageType === 'post' ? styles.postHero : ''
        }`}>
        <div
          className={`${styles.imageInnerHero} bg-cv`}
          style={{
            backgroundImage: `url(${
              img_banner.sizes
                ? img_banner.sizes['super-large']
                : '/images/home/2.jpg'
            })`,
          }}></div>

        {video_banner && video_banner.url !== '' && (
          <video
            className={styles.videoBanner}
            autoPlay
            loop
            playsInline
            muted
            preload>
            <source src={video_banner.url.replace('http:', 'https:')} />
          </video>
        )}

        <div className={`${styles.containerHero} container flex f-s f-ae`}>
          <div className={`${styles.contentHero}`}>
            {type === 'principal' ? (
              <>
                {title !== '' && (
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="0"
                    className={`${styles.principalText} ${Bigola.className}`}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                )}
                {subtitle !== '' && (
                  <h3
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="0"
                    className={styles.subtitleText}
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                  />
                )}
                {links.length > 0 && (
                  <div
                    className={`${styles.ctasHero} flex f-s f-ac`}
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-offset="-150"
                    data-aos-delay="0">
                    {links.map((data, i) => (
                      <div key={`linkshero${i}`} className={styles.ctaHero}>
                        <Link
                          href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}${data.link}`}>
                          <div className={`${styles.iconCtaHero} bg-ct`}></div>
                          <span className={styles.ctaLabelHero}>
                            {data.label}
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                {title !== '' && (
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-offset="-150"
                    data-aos-delay="0"
                    className={`${styles.bigTitleHero} ${Bigola.className}`}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                )}
                {subtitle !== '' && (
                  <h3
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="0"
                    className={styles.subtitleHero}
                    dangerouslySetInnerHTML={{ __html: contentHero.subtitle }}
                  />
                )}
                {paragraphText && paragraphText !== '' && (
                  <p
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="200"
                    className={styles.heroParagraph}
                    dangerouslySetInnerHTML={{ __html: paragraphText }}
                  />
                )}
                {(haqlabel || bnlabel) &&
                  (haqlabel !== '' || bnlabel !== '') && (
                    <div
                      className={styles.bookingButtons}
                      data-aos="fade-up"
                      data-aos-duration="900"
                      data-aos-delay="300"
                      data-aos-offset="-100">
                      {haqlabel !== '' && haqlink !== '' && (
                        <Link
                          className={`${styles.bookingButton} ${styles.question}`}
                          href={haqlink}
                          target={haqtarget}>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: haqlabel,
                            }}></span>
                        </Link>
                      )}
                      {bnlabel !== '' && bnlink !== '' && (
                        <Link
                          className={`${styles.bookingButton} ${styles.bookNow}`}
                          href={bnlink}
                          target={bntarget}>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: bnlabel,
                            }}></span>
                        </Link>
                      )}
                    </div>
                  )}
                {withForm && (
                  <form
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="0"
                    onSubmit={sendDataFormHero}
                    className={styles.heroForm}>
                    {form.title !== '' && (
                      <h3
                        className={`${styles.titleFormHero} ${Bigola.className}`}
                        dangerouslySetInnerHTML={{ __html: form.title }}></h3>
                    )}
                    {form.text !== '' && (
                      <p
                        className={styles.textHeroForm}
                        dangerouslySetInnerHTML={{ __html: form.text }}></p>
                    )}
                    <input
                      type="text"
                      name=""
                      id="f_name_h"
                      className={`${styles.inputHeroForm}`}
                      placeholder="Name"
                    />
                    <input
                      type="email"
                      name=""
                      id="f_email_h"
                      className={`${styles.inputHeroForm}`}
                      placeholder="Email address"
                    />
                    <textarea
                      name=""
                      id="f_message_h"
                      placeholder="Message"
                      className={`${styles.inputHeroForm} ${styles.messageHero}`}></textarea>
                    <p id="messageForm_h"></p>
                    <button className={styles.submitHeroForm}>
                      <div className={`${styles.arrowForm} bg-ct`}></div>
                      <p className={styles.sendText}>SEND</p>
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </section>
      {/* <div
        className={styles.stickyBooking}
        style={{
          position: 'sticky',
          top: 'calc(100% - 50px)',
          left: 0,
          width: '100%',
          height: '50px',
          backgroundColor: '#000',
          zIndex: '1',
          marginTop: '-350px',
          marginBottom: '350px',
        }}></div> */}
    </>
  );
};

export default Hero;
