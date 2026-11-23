import Icon from '@/components/ui/Icon/Icon';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`${styles.wrap} ${styles['hero-inner']}`}>
        <img className={styles['hero-architecture']} src="/assets/architecture.svg" alt="" aria-hidden="true" />
        <div className={styles['hero-copy']}>
          <p className={styles.eyebrow}><span /> Системное мышление · Архитектура решений</p>
          <div className={styles['hero-heading']}>
            <h1>Владимир<br />Скворцов</h1>
            <div className={styles['accent-line']} />
            <p className={styles['hero-role']}>Системный аналитик<br />и архитектор решений</p>
          </div>
          <p className={styles['hero-description']}>Проектирую ИТ-решения, прорабатываю требования и интеграции в финансовых и корпоративных системах.</p>
          <div className={styles['hero-actions']}>
            <a className={`${styles.button} ${styles['button-primary']}`} href="#contact">Связаться</a>
            <a className={styles['text-link']} href="#projects">Посмотреть результаты <span><Icon name="arrow-down" /></span></a>
          </div>
        </div>
        <div className={styles['hero-visual']}>
          <img className={styles['hero-portrait']} src="/assets/hero-reference.png" alt="Владимир Скворцов" />
        </div>
        <div className={styles['hero-bottom']}><span>Бизнес-задача</span><i /><span>Системный анализ</span><i /><span>Архитектура</span><i /><span>Решение</span></div>
      </div>
    </section>
  );
}
