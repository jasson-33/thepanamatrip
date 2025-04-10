import { useContext } from 'react';
import styles from './title-text.module.css';
import { ColombianContext } from '@/context/ColombianContext';

const TitleText = ({ content }) => {
  const { Bigola } = useContext(ColombianContext);
  const { title, paragraphs } = content;
  return (
    <section className={`${styles.titleTextBlock} `}>
      <div className={`${styles.container}`}>
        {title && (
          <h2 className={`${styles.titleBlock} ${Bigola.className}`}>
            {title}
          </h2>
        )}
        {paragraphs && paragraphs !== '' && (
          <p
            className={`${styles.paragraphText}`}
            dangerouslySetInnerHTML={{ __html: paragraphs }}
          />
        )}
      </div>
    </section>
  );
};

export default TitleText;
