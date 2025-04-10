import React, { useRef, useEffect, useContext } from 'react';
import styles from './horizontal-section.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ColombianContext } from '@/context/ColombianContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

gsap.registerPlugin(ScrollTrigger);

const HorizontalSection = ({ horizontalType, horizontalData }) => {
  const { Bigola, Gotham_Bold } = useContext(ColombianContext);
  const scroller = useRef();

  const router = useRouter();
  const { pathname } = router;

  const goToForm = () => {
    window.scrollTo({
      top:
        document.querySelector('body').getBoundingClientRect().height -
        document.querySelector('.siteFooter').offsetHeight -
        document.querySelector('.siteContact').offsetHeight,
      behavior: 'smooth',
    });
  };

  // const horizontalBlocks = horizontalData;

  /*
  const horizontalBlocksWorks = [
    {
      title: 'Step 1: Connect',
      content: [
        'Send us your brief travel inquiry form to get started—we’ll get back to you within 24 hours with follow up questions or to schedule a complimentary consultation.',
        'We want to make sure we gather all the details we need to customize your trip!',
      ],
      img: '/images/how-it-works/30.jpg',
      backgroundColor: '#D23250',
      invertBtn: false,
      colorText: '#ffffff',
    },
    {
      title: 'Step 2: Design',
      content: [
        'Next, we’ll get to work designing your ideal itinerary, with multiple destination and hotel options to choose from.',
        'We’ll also counsel you on the best excursions and activities to embark on—this is how we’ll bring Colombia to life for you.',
      ],
      img: '/images/how-it-works/31.jpg',
      backgroundColor: '#FCBE15',
      invertBtn: true,
      colorText: '#7A5D0C',
    },
    {
      title: 'Step 3: Book',
      content: [
        'Next, we’ll get to work designing your ideal itinerary, with multiple destination and hotel options to choose from.',
        'We’ll also counsel you on the best excursions and activities to embark on—this is how we’ll bring Colombia to life for you.',
      ],
      img: '/images/how-it-works/32.jpg',
      backgroundColor: '#AFCA0C',
      invertBtn: true,
      colorText: '#576409',
    },
    {
      title: 'Step 4: Depart',
      content: [
        'Next, we’ll get to work designing your ideal itinerary, with multiple destination and hotel options to choose from.',
        'We’ll also counsel you on the best excursions and activities to embark on—this is how we’ll bring Colombia to life for you.',
      ],
      img: '/images/how-it-works/33.jpg',
      backgroundColor: '#34BBDB',
      invertBtn: true,
      colorText: '#124F5E',
    },
  ];
  */

  const objectToIterate = horizontalData;
  // horizontalType === 'home' ? horizontalBlocks : horizontalBlocksWorks;

  // const useWidth = () => {
  //   const [width, setWidth] = useState(0); // default width, detect on server.

  //   const handleResize = () => setWidth(window.innerWidth);
  //   useEffect(() => {
  //     window.addEventListener('resize', handleResize);
  //     return () => window.removeEventListener('resize', handleResize);
  //   }, [handleResize]);
  //   return width;
  // };
  useEffect(() => {
    const blocks = gsap.utils.toArray('.itemHorizontal');
    ScrollTrigger.matchMedia({
      '(min-width: 1025px)': () => {
        if (blocks.length === 0) {
          return;
        }
        const to = gsap.to(blocks, {
          xPercent: () => -100 * (blocks.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: scroller.current,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onEnter: () => {
              document
                .querySelector('.siteHeader')
                .classList.add('transparent');
            },
            onLeave: () => {
              document
                .querySelector('.siteHeader')
                .classList.remove('transparent');
            },
            onEnterBack: () => {
              document
                .querySelector('.siteHeader')
                .classList.add('transparent');
            },
            onLeaveBack: () => {
              document
                .querySelector('.siteHeader')
                .classList.remove('transparent');
            },
            // snap: 1 / (blocks.length - 1),

            end: () => `+=${window.innerWidth * 3.5}`,
          },
        });

        const changeBackground = (bg, parent) => {
          parent.classList.remove(styles.hide);
          gsap.to(scroller.current, {
            backgroundColor: bg,
          });
        };

        let blockTl;

        blocks.forEach((block, i) => {
          blockTl = gsap.to(block.querySelector('.wrapperBlock'), {
            transform: `translateX(-${
              i === blocks.length - 1 ? 0 : 0
            }%) scale(1)`,
            scrollTrigger: {
              trigger: block.querySelector('.wrapperBlock'),
              containerAnimation: to,
              start:
                i === blocks.length - 1
                  ? '-70% 0%'
                  : i === 0
                  ? '-40% 0%'
                  : 'top 80%',
              end:
                i === blocks.length - 1
                  ? '100% 95%'
                  : i === 0
                  ? '120% 80%'
                  : 'end -50%',
              scrub: 3,
              onEnter: (e) => {
                changeBackground(
                  e.trigger._gsap.target.parentElement.getAttribute('data-bg'),
                  e.trigger._gsap.target.parentElement
                );
              },
              onEnterBack: (e) => {
                changeBackground(
                  e.trigger._gsap.target.parentElement.getAttribute('data-bg'),
                  e.trigger._gsap.target.parentElement
                );
              },
              onLeave: (e) => {
                e.trigger._gsap.target.parentElement.classList.add(styles.hide);
              },
              onLeaveBack: (e) => {
                i === blocks.length - 1 || i === 0
                  ? ''
                  : e.trigger._gsap.target.parentElement.classList.add(
                      styles.hide
                    );
              },
              // markers: i === blocks.length - 1 ? true : false
            },
          });
        });

        return () => {
          to.kill();
          blocks.forEach((block, i) => {
            blockTl.kill();
          });
        };
      },
    });
    ScrollTrigger.matchMedia({
      '(max-width: 1024px)': () => {
        const changeBackground = (bg, parent) => {
          parent.classList.remove(styles.hide);
          gsap.to(scroller.current, {
            backgroundColor: bg,
          });
        };

        let blockTl;

        blocks.forEach((block, i) => {
          blockTl = gsap.to(block.querySelector('.wrapperBlock'), {
            transform: `translateX(-${
              i === blocks.length - 1 ? 0 : 0
            }%) scale(1)`,
            scrollTrigger: {
              trigger: block.querySelector('.wrapperBlock'),
              // containerAnimation: to,
              start: 'top 80%',
              end: '100% 0%',
              scrub: 3,
              onEnter: (e) => {
                changeBackground(
                  e.trigger._gsap.target.parentElement.getAttribute('data-bg'),
                  e.trigger._gsap.target.parentElement
                );
              },
              onEnterBack: (e) => {
                changeBackground(
                  e.trigger._gsap.target.parentElement.getAttribute('data-bg'),
                  e.trigger._gsap.target.parentElement
                );
              },
            },
          });
        });

        return () => {
          blocks.forEach((block, i) => {
            blockTl.kill();
          });
        };
      },
    });
  }, []);

  // const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : '1920');
  // const imgItems = useRef([]);
  // useEffect(() => {
  //   if(typeof window !== 'undefined'){
  //       const handleResize = () => {
  //         setScreenWidth(window.innerWidth);
  //         console.log(document.querySelectorAll('.imgItem'));
  //         if(screenWidth > 768){
  //           document.querySelectorAll('.imgItem').forEach((img, i) => { img.style.height = '80vh';});
  //           imgItems.current.forEach((img, i) => { img.style.height = '80vh';});
  //           console.log(imgItems);
  //         }else{
  //           document.querySelectorAll('.imgItem').forEach((img, i) => { img.style.height = `${img.offsetWidth}px`;
  //           imgItems.current.forEach((img, i) => { img.style.height = `${img.offsetWidth}px`;});
  //           console.log(imgItems);});
  //         }
  //         console.log(screenWidth);
  //       };
  //       window.addEventListener('resize', handleResize);
  //       return () => window.removeEventListener('resize', handleResize);
  //   }
  // }, [screenWidth]);

  return (
    <div className={`siteSection ${styles.horizontalSection}`}>
      <div className={`${styles.containerHorizontal} containerHorizontal`}>
        {objectToIterate && (
          <div
            id="block"
            className={`${styles.wrapperScroller} wrapperScroller`}
            style={{
              width: `${objectToIterate.length * 100}vw`,
              backgroundColor: '#34BBDB',
            }}
            ref={scroller}>
            {objectToIterate.map((block, i) => (
              <div
                key={
                  typeof window !== 'undefined' ? window.crypto.randomUUID() : i
                }
                className={`${styles.block} itemHorizontal itemHorizontal-${i}`}
                data-bg={block.backgroundColor}>
                <div className={`${styles.wrapperBlock} wrapperBlock`}>
                  {pathname === '/how-it-works' && (
                    <>
                      <div
                        className={`${styles.contentItemHorizontal} ${styles.contentItemHorizontalWork}`}>
                        {horizontalType === 'home' && (
                          <>
                            <h2
                              className={`${styles.titleBlock} ${Bigola.className}`}>
                              {block.title}
                            </h2>
                            <div className={styles.wrapperSubtitle}>
                              {block.colorLine && (
                                <div
                                  className={styles.lineSubtitle}
                                  style={{
                                    backgroundColor: block.colorLine,
                                  }}></div>
                              )}

                              <h3
                                className={`${styles.subtitleBlock} ${Gotham_Bold.className}`}>
                                {block.subtitle}
                              </h3>
                            </div>

                            <div
                              className={styles.infoItemHorizontal}
                              style={{
                                backgroundColor: block.backgroundColor,
                              }}>
                              <p className={`${styles.number}`}>0{i + 1}</p>
                              <p className={styles.detailItemHorizontal}>
                                {block.content}
                              </p>
                            </div>
                          </>
                        )}

                        {horizontalType === 'works' && (
                          <>
                            <div className={styles.infoWork}>
                              <h2
                                className={`${styles.titleBlock} ${styles.titleBlockWork} ${Bigola.className}`}
                                dangerouslySetInnerHTML={{
                                  __html: block.title,
                                }}
                              />
                              <div className={styles.innerInfoWork}>
                                <span
                                  className={styles.textWork}
                                  style={{ color: block.colorText }}
                                  dangerouslySetInnerHTML={{
                                    __html: block.content,
                                  }}
                                />
                              </div>

                              <div
                                className={`${styles.goTrip} ${
                                  block.invertBtn ? styles.invertColors : ''
                                }`}
                                onClick={goToForm}>
                                <div
                                  className={`${styles.arrowIcon} bg-ct`}></div>
                                <p
                                  className={styles.textBtn}
                                  style={{ color: block.colorText }}>
                                  DESIGN MY TRIP
                                </p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  )}
                  {pathname !== '/how-it-works' && (
                    <Link
                      rel="stylesheet"
                      href={
                        block.url
                          ? `${process.env.NEXT_PUBLIC_CURR_DOMAIN}${block.url}`
                          : ''
                      }>
                      <div
                        className={`${styles.contentItemHorizontal} ${styles.contentItemHorizontalWork}`}>
                        {horizontalType === 'home' && (
                          <>
                            <h2
                              className={`${styles.titleBlock} ${Bigola.className}`}>
                              {block.title}
                            </h2>
                            <div className={styles.wrapperSubtitle}>
                              {block.colorLine && (
                                <div
                                  className={styles.lineSubtitle}
                                  style={{
                                    backgroundColor: block.colorLine,
                                  }}></div>
                              )}

                              <h3
                                className={`${styles.subtitleBlock} ${Gotham_Bold.className}`}>
                                {block.subtitle}
                              </h3>
                            </div>

                            <div
                              className={styles.infoItemHorizontal}
                              style={{
                                backgroundColor: block.backgroundColor,
                              }}>
                              <p className={`${styles.number}`}>0{i + 1}</p>
                              <p className={styles.detailItemHorizontal}>
                                {block.content}
                              </p>
                            </div>
                          </>
                        )}

                        {horizontalType === 'works' && (
                          <>
                            <div className={styles.infoWork}>
                              <h2
                                className={`${styles.titleBlock} ${styles.titleBlockWork} ${Bigola.className}`}
                                dangerouslySetInnerHTML={{
                                  __html: block.title,
                                }}
                              />
                              <div className={styles.innerInfoWork}>
                                <p
                                  className={styles.textWork}
                                  style={{ color: block.colorText }}
                                  dangerouslySetInnerHTML={{
                                    __html: block.content,
                                  }}
                                />
                              </div>

                              <div
                                className={`${styles.goTrip} ${
                                  block.invertBtn ? styles.invertColors : ''
                                }`}>
                                <div
                                  className={`${styles.arrowIcon} bg-ct`}></div>
                                <p
                                  className={styles.textBtn}
                                  style={{ color: block.colorText }}>
                                  YOUR TRIP
                                </p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </Link>
                  )}

                  <div
                    // ref = {(img) => {imgItems.current[i] = img;}}
                    className={`bg-cv imgItem imgItem-${i} ${
                      styles.imgItemHorizontal
                    } ${horizontalType === 'works' && styles.worksImg}`}
                    style={{
                      backgroundImage: `url(${
                        block.img.sizes ? block.img.sizes.large : ''
                      })`,
                    }}></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalSection;
