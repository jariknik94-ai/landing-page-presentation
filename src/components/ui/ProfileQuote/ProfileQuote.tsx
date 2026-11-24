import Image from 'next/image';
import { site } from '@/data/site';
import styles from './ProfileQuote.module.scss';

type ProfileQuoteProps = {
  text: string;
};

export default function ProfileQuote({ text }: ProfileQuoteProps) {
  return (
    <figure className={styles.quote}>
      <span className={styles.mark} aria-hidden="true">“</span>
      <blockquote className={styles.text}>{text}</blockquote>
      <figcaption className={styles.author}>
        <span className={styles.avatar}>
          <Image src="/assets/vladimir-avatar.webp" alt="" width={64} height={64} />
        </span>
        <span><strong>{site.name}</strong><span className={styles.caption}>Системный аналитик · архитектор решений · эксперт по кибербезопасности</span></span>
      </figcaption>
    </figure>
  );
}
