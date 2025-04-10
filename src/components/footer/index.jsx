import { ColombianContext } from '@/context/ColombianContext';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import styles from './footer.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';

const Footer = ({ datafooter, changeLayout, noforms }) => {
  const {
    footermenu,
    disclaimer,
    privacylink,
    termslink,
    formtitle,
    phone,
    email,
    copiright,
    formtext,
    social_networks,
    styles_form,
    accomodations_form,
    destinations_form,
  } = datafooter;
  const { Bigola } = useContext(ColombianContext);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    AOS.init({});
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  const theMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const sendDataForm = async (event) => {
    event.preventDefault();
    const name = event.target.querySelector('#f_name').value;
    const email = event.target.querySelector('#f_email').value;
    const message = event.target.querySelector('#f_message').value;

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

    const formData = {
      'fname': name,
      'femail': email,
      'fmessage': message,
    };

    // const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/contact-footer-full`;
    const endpoint = '/api/send-form';

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();

    if (result.status) {
      let redirectTo = pathname.split('/')[1];
      if (redirectTo === '') {
        redirectTo = 'homepage';
      }
      window.location.href = `/thank-you-${redirectTo}`;
    }
  };

  const sendDataFormFull = async (event) => {
    event.preventDefault();
    const firstname = event.target.querySelector('#first_name_form').value;
    const lastname = event.target.querySelector('#last_name_form').value;
    const email = event.target.querySelector('#email_form').value;
    const duration = event.target.querySelector('#duration_days').value;
    const numbertravelers =
      event.target.querySelector('#number_travelers').value;
    const datemonth = event.target.querySelector('#start_date_month').value;
    const dateday = event.target.querySelector('#start_date_day').value;
    const dateyear = event.target.querySelector('#start_date_year').value;
    const styletravel = event.target.querySelector('#travel_style').value;
    const accomodationtravel =
      event.target.querySelector('#accomodation_form').value;
    const destinationtravel =
      event.target.querySelector('#destination_form').value;
    const message = event.target.querySelector('#comments_form').value;

    if (!firstname) {
      alert('Please enter your first name.');
      return false;
    }
    if (!lastname) {
      alert('Please enter your last name.');
      return false;
    }
    if (!email) {
      alert('Please enter your Email.');
      return false;
    }
    if (!duration) {
      alert('Please enter your estimated duration.');
      return false;
    }
    if (!numbertravelers) {
      alert('Please enter the estimated numer of travelers.');
      return false;
    }
    if (!datemonth) {
      alert('Please enter the month of travel.');
      return false;
    }
    if (!dateday) {
      alert('Please enter the day of travel.');
      return false;
    }
    if (!dateyear) {
      alert('Please enter the year of travel.');
      return false;
    }
    if (!styletravel) {
      alert('Please select your travel style.');
      return false;
    }
    if (!accomodationtravel) {
      alert('Please select the accomodation.');
      return false;
    }
    if (!destinationtravel) {
      alert('Please select the destination.');
      return false;
    }
    if (!message) {
      alert('Please enter a message.');
      return false;
    }

    const formData = {
      'last_name': lastname,
      'first_name': firstname,
      email,
      duration,
      'number_travelers': numbertravelers,
      'date_month': datemonth,
      'date_day': dateday,
      'date_year': dateyear,
      'style_travel': styletravel,
      'style_accomodation': accomodationtravel,
      'style_destination': destinationtravel,
      message,
    };

    // const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_CONTENT}colombian-app/v2/contact-footer-full`;
    const endpoint = '/api/send-form-full';

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();

    if (result.status) {
      let redirectTo = pathname.split('/')[1];
      if (redirectTo === '') {
        redirectTo = 'homepage';
      }
      window.location.href = `/thank-you-${redirectTo}`;
    }
  };

  if (!datafooter) {
    return <></>;
  }

  return (
    <>
      <section className={`${styles.siteContact} siteContact bg-cv`}>
        {!noforms && (
          <div className={`container ${styles.containerContact}`}>
            {!changeLayout && (
              <>
                <h2
                  data-aos="fade-right"
                  data-aos-duration="900"
                  data-aos-delay="0"
                  className={`${styles.contactTitle} ${Bigola.className}`}
                  dangerouslySetInnerHTML={{ __html: formtitle }}
                />
                <div className={`${styles.contactContainer} flex f-sb f-as`}>
                  <div className={styles.infoContact}>
                    {phone.length > 0 && (
                      <div className={styles.infoContactGroup}>
                        <div
                          data-aos="fade-right"
                          data-aos-duration="900"
                          data-aos-delay="0"
                          className="iconPhone bg-ct"></div>
                        <div className={styles.phoneGroup}>
                          {phone.map((phoneObj, i) => (
                            <a
                              key={`phone${i}`}
                              data-aos="fade-right"
                              data-aos-duration="900"
                              data-aos-delay="0"
                              className={styles.contactCta}
                              href={phoneObj.numlink}>
                              {phoneObj.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    {email.length > 0 && (
                      <div className={styles.infoContactGroup}>
                        <div
                          data-aos="fade-right"
                          data-aos-duration="900"
                          data-aos-delay="0"
                          className="iconMail bg-ct"></div>
                        <div className={styles.phoneGroup}>
                          {email.map((mailObj, i) => (
                            <a
                              key={`mail${i}`}
                              data-aos="fade-right"
                              data-aos-duration="900"
                              data-aos-delay="0"
                              className={styles.contactCta}
                              href={mailObj.numlink}>
                              {mailObj.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <form className={styles.formFooter} onSubmit={sendDataForm}>
                    <input
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      type="text"
                      name=""
                      id="f_name"
                      className={`${styles.filedForm} ${styles.inputForm}`}
                      placeholder="Name"
                    />
                    <input
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      type="text"
                      name=""
                      id="f_email"
                      className={`${styles.filedForm} ${styles.inputForm}`}
                      placeholder="Email Address"
                    />
                    <div
                      className={styles.lastInputsForm}
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0">
                      <textarea
                        name=""
                        id="f_message"
                        className={`${styles.filedForm} ${styles.textareaForm}`}
                        placeholder="Message"></textarea>
                      <p id="messageForm"></p>
                      <div className={styles.submitGroup}>
                        <button className={styles.innerSubmitGroup}>
                          <div className={`${styles.arrowSubmit} bg-ct`}></div>
                          <p className={styles.submitText}>SUBMIT</p>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </>
            )}

            {changeLayout && (
              <>
                <div className={'container'}>
                  <h2
                    className={`${styles.titleProud} ${Bigola.className}`}
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="0"
                    dangerouslySetInnerHTML={{ __html: formtitle }}></h2>
                  <h3
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="0"
                    className={styles.subtitleProudMembers}
                    dangerouslySetInnerHTML={{ __html: formtext }}></h3>
                </div>
                <form
                  className={`${styles.formFooterB} formB`}
                  onSubmit={sendDataFormFull}>
                  <div className={styles.inputsGroup}>
                    <p
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      className={styles.labelTextInputs}>
                      Name*
                    </p>
                    <input
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      type="text"
                      name=""
                      id="first_name_form"
                      className={`${styles.filedForm} ${styles.inputForm}`}
                      placeholder="First Name"
                    />
                    <input
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      type="text"
                      name=""
                      id="last_name_form"
                      className={`${styles.filedForm} ${styles.inputForm}`}
                      placeholder="Last Name"
                    />
                  </div>
                  <div className={`${styles.inputsGroup} ${styles.longInput}`}>
                    <p
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      className={styles.labelTextInputs}>
                      Email*
                    </p>
                    <input
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      type="text"
                      name=""
                      id="email_form"
                      className={`${styles.filedForm} ${styles.inputForm}`}
                    />
                  </div>
                  <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                    <p
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      className={styles.labelTextInputs}>
                      Approximated Duration Days
                    </p>
                    <input
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      type="number"
                      name=""
                      id="duration_days"
                      className={`${styles.filedForm} ${styles.inputForm}`}
                    />
                  </div>
                  <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                    <p
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      className={styles.labelTextInputs}>
                      Number of Travelers
                    </p>
                    <input
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      type="number"
                      name=""
                      id="number_travelers"
                      className={`${styles.filedForm} ${styles.inputForm}`}
                    />
                  </div>
                  <div
                    className={`${styles.inputsGroup} ${styles.shortGroup} ${styles.dateInput}`}>
                    <p
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      className={styles.labelTextInputs}>
                      Approximated Start date
                    </p>
                    <select
                      defaultValue="default"
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      type="month"
                      name=""
                      id="start_date_month"
                      className={`${styles.filedForm} ${styles.inputForm} ${styles.selectMonth}`}
                      placeholder="MM">
                      <option value="default" selected disabled>
                        MM
                      </option>
                      {theMonths.map((month, i) => (
                        <option value={i} key={`${i}-${month}`}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <input
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      type="number"
                      name=""
                      id="start_date_day"
                      className={`${styles.filedForm} ${styles.inputForm}`}
                      placeholder="DD"
                      max={31}
                      min={1}
                    />
                    <input
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      type="number"
                      name=""
                      id="start_date_year"
                      className={`${styles.filedForm} ${styles.inputForm}`}
                      placeholder="YYYY"
                    />
                  </div>
                  <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                    <p
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      className={styles.labelTextInputs}>
                      Your Travel Style
                    </p>
                    <select
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      className={styles.selectInput}
                      name=""
                      id="travel_style">
                      <option key={'styles_def'} value="">
                        Select Your Travel Style
                      </option>
                      {styles_form &&
                        styles_form.length > 0 &&
                        styles_form.map((item, i) => (
                          <option key={`styles_${i}`} value={item}>
                            {item}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                    <p
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      className={styles.labelTextInputs}>
                      Accomodation
                    </p>
                    <select
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      className={styles.selectInput}
                      name=""
                      id="accomodation_form">
                      <option key={'accomodation_def'} value="">
                        Select Your Accomodation
                      </option>
                      {accomodations_form &&
                        accomodations_form.length > 0 &&
                        accomodations_form.map((item, i) => (
                          <option key={`accomodation_${i}`} value={item}>
                            {item}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className={`${styles.inputsGroup} ${styles.shortGroup}`}>
                    <p
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      className={styles.labelTextInputs}>
                      Your Destination
                    </p>
                    <select
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      className={styles.selectInput}
                      name=""
                      id="destination_form">
                      <option key={'destination_def'} value="">
                        Select Your Destination
                      </option>
                      {destinations_form &&
                        destinations_form.length > 0 &&
                        destinations_form.map((item, i) => (
                          <option key={`destination_${i}`} value={item}>
                            {item}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className={`${styles.inputsGroup} ${styles.longInput}`}>
                    <p
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      className={styles.labelTextInputs}>
                      Comments
                    </p>
                    <textarea
                      data-aos="fade-left"
                      data-aos-duration="900"
                      data-aos-delay="0"
                      type="text"
                      name=""
                      id="comments_form"
                      className={`${styles.filedForm} ${styles.inputForm} ${styles.textAreaFormB}`}></textarea>
                  </div>
                  <p id="messageForm"></p>
                  <div className={styles.submitGroup}>
                    <button className={styles.innerSubmitGroup}>
                      <div
                        data-aos="fade-left"
                        data-aos-duration="900"
                        data-aos-delay="0"
                        className={`${styles.arrowSubmit} bg-ct`}></div>
                      <p
                        data-aos="fade-left"
                        data-aos-duration="900"
                        data-aos-delay="0"
                        className={styles.submitText}>
                        SUBMIT
                      </p>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        )}
      </section>

      <footer className={`${styles.siteFooter} siteFooter`}>
        <div className={`container ${styles.containerFooter}`}>
          <div className={styles.headerFooter}>
            <div className={styles.yellowLine}></div>
            <div className={`${styles.logoFooter} bg-ct`}></div>
            <div className={styles.yellowLine}></div>
          </div>
          {footermenu.length > 0 && (
            <nav className={styles.footerNav}>
              {footermenu.map((item, i) => (
                <Link
                  key={`itemmenu${i}`}
                  target={item.target}
                  href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}${item.link}`}
                  className={`${styles.itemFooterNav} ${styles.withPoint}`}>
                  {item.label}{' '}
                  {i < footermenu.length - 1 && (
                    <span className={styles.divisorPoint}></span>
                  )}
                </Link>
              ))}
            </nav>
          )}
          {disclaimer !== '' && (
            <p className={styles.infoRegister}>{disclaimer}</p>
          )}
          <div className={styles.legalItems}>
            <Link
              href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}${privacylink}`}
              className={styles.copyrightText}>
              Privacy Policy
            </Link>
            <p className={styles.copyrightText}>© {copiright}</p>
            <Link
              href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}${termslink}`}
              className={styles.copyrightText}>
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className={styles.socialIcons}>
          {social_networks &&
            social_networks.length > 0 &&
            social_networks.map((item, i) => (
              <a
                key={`social_n_${i}`}
                href={item.link}
                target="_blank"
                rel="noreferer"
                className={`bg-ct ${styles.socialIcon} ${
                  styles[item.type]
                }`}></a>
            ))}
        </div>

        <div className={styles.paperplaneContainer}>
          <p className={styles.designedText}>
            Proudly made and designed in Colombia by:
          </p>
          <div className={`${styles.paperplaneLog} bg-ct`}>
            <a
              href="https://paperplane.com.co"
              target="_blank"
              rel="noreferrer"></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
