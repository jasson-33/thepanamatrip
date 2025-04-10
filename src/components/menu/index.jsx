import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import styles from './menu.module.css';
import { ColombianContext } from '@/context/ColombianContext';

const Menu = ({ animate, setAnimate, mainmenu }) => {
  const { Gotham } = useContext(ColombianContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setShow(true);
      }, 100);
    } else {
      setShow(false);
    }
  }, [animate]);

  const hideMenu = () => {
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  };

  const menuArr = mainmenu.menu;
  const bgMenuImg = mainmenu.bgMenu;

  if (!mainmenu) {
    return <></>;
  }

  return (
    <div
      className={`${styles.siteMenu} ${
        show ? styles.active : ''
      } flex f-c f-ac`}>
      <div
        className={`${styles.leftMenu} bg-cv`}
        style={{
          backgroundImage: `${
            bgMenuImg.sizes ? `url(${bgMenuImg.sizes.thumbnail})` : ''
          }`,
        }}></div>
      <div className={styles.rightMenu}>
        <div className={`${styles.halfFace} bg-ct`}></div>
        <ul className={`${styles.ulMenu} ${Gotham.className}`}>
          {menuArr.map((item, index) => (
            <li
              className={styles.itemMenu}
              key={
                typeof window !== 'undefined'
                  ? window.crypto.randomUUID()
                  : index
              }>
              <Link
                href={`${process.env.NEXT_PUBLIC_CURR_DOMAIN}${item.link}`}
                onClick={() => hideMenu()}
                target={item.target}>
                <span className={styles.numberItemMenu}>
                  {index < 10 ? `0${index + 1}` : index + 1}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
