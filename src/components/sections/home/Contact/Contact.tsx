import { site } from '@/data/site';
import styles from './Contact.module.scss';

type ContactIconName = 'phone' | 'email' | 'telegram' | 'vk' | 'instagram';

function ContactIcon({ name }: { name: ContactIconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {name === 'phone' && <path d="M21 16.5v2.7a2 2 0 0 1-2.2 2 17.6 17.6 0 0 1-7.7-2.7 17.3 17.3 0 0 1-5.3-5.3 17.6 17.6 0 0 1-2.7-7.8 2 2 0 0 1 2-2.2h2.7a2 2 0 0 1 2 1.7l.4 2.3a2 2 0 0 1-.6 1.8L8.3 10.3a14.2 14.2 0 0 0 5.4 5.4l1.3-1.3a2 2 0 0 1 1.8-.6l2.3.4a2 2 0 0 1 1.9 2.3Z" />}
      {name === 'email' && <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>}
      {name === 'telegram' && <path d="M21.5 4.6 18.4 19c-.2 1-1 1.3-1.8.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.8 8.7-7.8c.4-.4-.1-.6-.6-.3L6.4 12.8l-4.6-1.4c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.6.2 1.5 1.6Z" fill="currentColor" stroke="none" />}
      {name === 'vk' && <path d="M12.6 18.2c-5.5 0-8.6-3.8-8.7-10.2h2.8c.1 4.7 2.2 6.7 3.9 7.1V8h2.6v4.1c1.7-.2 3.4-2 4-4.1h2.6a7.7 7.7 0 0 1-3.5 5 7.9 7.9 0 0 1 4.1 5.2h-2.9c-.7-2-2.2-3.5-4.3-3.7v3.7h-.6Z" fill="currentColor" stroke="none" />}
      {name === 'instagram' && <><rect x="3.3" y="3.3" width="17.4" height="17.4" rx="5" /><circle cx="12" cy="12" r="4.1" /><circle cx="17.5" cy="6.8" r="1" fill="currentColor" stroke="none" /></>}
    </svg>
  );
}

const contacts: { icon: ContactIconName; label: string; href: string; external?: boolean }[] = [
  { icon: 'phone', label: `Позвонить: ${site.phone.label}`, href: site.phone.href },
  { icon: 'email', label: `Написать на почту: ${site.email}`, href: `mailto:${site.email}` },
  { icon: 'telegram', label: 'Написать в Telegram', href: site.social.telegram, external: true },
  { icon: 'vk', label: 'Открыть ВКонтакте', href: site.social.vk, external: true },
  { icon: 'instagram', label: 'Открыть Instagram', href: site.social.instagram, external: true },
];

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
          <span className={styles['contact-label']}>Контакты и социальные сети</span>
          <div className={styles['contact-buttons']}>
            {contacts.map(({ icon, label, href, external }) => (
              <a className={styles['contact-button']} key={icon} href={href} aria-label={label} title={label} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
                <ContactIcon name={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
