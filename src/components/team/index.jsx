import { ColombianContext } from '@/context/ColombianContext';
import React, { useContext, useEffect } from 'react';
import styles from './team.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = ({ teamData }) => {
  const { Bigola } = useContext(ColombianContext);
  const members = teamData;

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className={`siteSection ${styles.teamSection}`}>
      <div className={`container flex f-s f-as ${styles.containerTeam}`}>
        {members.map((member, i) => (
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="0"
            key={typeof window !== 'undefined' ? window.crypto.randomUUID() : i}
            className={styles.cardTeam}>
            <div className={`${styles.imgTeamMember}`}>
              <img
                src={member.img.sizes ? member.img.sizes.medium : ''}
                className={styles.innerImgTeamMember}
                alt="team-image"
              />
              <div
                className={styles.hideInfo}
                style={{ backgroundColor: `${member.color}` }}>
                <p
                  className={styles.infoTeamMember}
                  dangerouslySetInnerHTML={{ __html: member.info }}
                />
              </div>
            </div>
            <div className={styles.contNameTeam}>
              <h2
                className={` ${Bigola.className} ${styles.teamMemberName}`}
                dangerouslySetInnerHTML={{ __html: member.name }}
              />
              <h3
                className={`${styles.teamMemberRol}`}
                dangerouslySetInnerHTML={{ __html: member.rol }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
