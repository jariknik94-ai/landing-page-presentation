import { site } from '@/data/site';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={`${styles.wrap} ${styles['contact-inner']}`}>
        <div>
          <p className={styles.eyebrow}>На связи</p>
          <h2>Обсудим вашу<br /><em>задачу?</em></h2>
          <p>Открыт к профессиональному общению и интересным задачам в области системного анализа и архитектуры.</p>
          <a className={`${styles.button} ${styles['button-primary']}`} href={site.social.telegram} target="_blank" rel="noopener noreferrer">Написать в Telegram</a>
        </div>
        <div className={styles['contact-aside']}>
          <span className={styles['contact-label']}>Социальные сети</span>
          <a href={site.social.telegram} target="_blank" rel="noopener noreferrer">Telegram <span>↗</span></a>
          <a href={site.social.vk} target="_blank" rel="noopener noreferrer">ВКонтакте <span>↗</span></a>
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram <span>↗</span></a>
        </div>
      </div>
    </section>
  );
}
