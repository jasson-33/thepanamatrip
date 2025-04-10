import { useContext } from 'react';
import styles from './calendar.module.css';
import { ColombianContext } from '@/context/ColombianContext';

const Calendar = ({ contentgetintouch }) => {
  const { Bigola } = useContext(ColombianContext);
  const { title, text, iframe_url, height_desk, height_mob } =
    contentgetintouch;
  return (
    <section className={styles.calendarSection}>
      <div className={`container ${styles.calendarContainer}`}>
        {title && title !== '' && (
          <h2
            className={`${styles.calendarTitle} ${Bigola.className}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {text && text !== '' && (
          <p
            className={styles.calendarInfo}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
        {iframe_url && iframe_url !== '' && (
          <iframe
            src={iframe_url}
            style={{ '--heightdesk': height_desk, '--heightmob': height_mob }}
            className={styles.calendarIframe}></iframe>
        )}
      </div>
    </section>
  );
};

export default Calendar;
