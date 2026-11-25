import Icon from '@/components/ui/Icon/Icon';
import Image from 'next/image';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`${styles.wrap} ${styles['hero-inner']}`}>
        <img
          className={styles['hero-architecture']}
          src="/assets/architecture.svg"
          alt=""
          aria-hidden="true"
        />
        <div className={styles['hero-copy']}>
          <p className={styles.eyebrow}>
            <span /> Системное мышление · Архитектура решений · Кибербезопасность
          </p>
          <div className={styles['hero-heading']}>
            <h1>
              Владимир
              <br />
              Скворцов
            </h1>
            <div className={styles['accent-line']} />
            <p className={styles['hero-role']}>
              Системный аналитик
              <br />
              Архитектор решений
              <br />
              Эксперт по кибербезопасности
            </p>
          </div>
          <p className={styles['hero-description']}>
            Проектирую ИТ-решения, прорабатываю требования и интеграции, учитываю риски
            информационной безопасности.
          </p>
          <div className={styles['hero-actions']}>
            <a className={`${styles.button} ${styles['button-primary']}`} href="#contact">
              Написать
            </a>
            <a className={styles['text-link']} href="#projects">
              Посмотреть результаты{' '}
              <span>
                <Icon name="arrow-down" />
              </span>
            </a>
          </div>
        </div>
        <div className={styles['hero-visual']}>
          <Image
            className={styles['hero-portrait']}
            src="/assets/hero-portrait.webp"
            alt="Владимир Скворцов"
            width={1672}
            height={941}
            sizes="(max-width: 364px) 356px, (max-width: 727px) 98vw, (max-width: 1000px) 712px, 1400px"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className={styles['hero-bottom']}>
          <span>Бизнес-задача</span>
          <i />
          <span>Системный анализ</span>
          <i />
          <span>Архитектура</span>
          <i />
          <span>Решение</span>
        </div>
      </div>
    </section>
  );
}
