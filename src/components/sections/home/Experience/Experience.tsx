import { experience } from '@/data/resume';
import styles from './Experience.module.scss';

export default function Experience() {
  return (
    <section className={`${styles.section} ${styles.experience}`} id="experience">
      <div className={`${styles.wrap} ${styles['section-grid']}`}>
        <div>
          <p className={styles.eyebrow}>Профессиональный путь</p>
          <h2>Опыт<br /><em>работы.</em></h2>
          <p className={styles['section-intro']}>Роли и зоны ответственности в банковских технологиях, корпоративных системах и развитии бизнес-процессов.</p>
        </div>
        <div className={styles.timeline}>
          {experience.map((position) => (
            <article className={styles['timeline-item']} key={`${position.company}-${position.period}`}>
              <span className={styles['timeline-date']}>{position.period}</span>
              <h3>{position.company}</h3>
              <p className={styles['timeline-role']}>{position.role}</p>
              <p>{position.summary}</p>
              <details className={styles.details}>
                <summary>Подробнее о работе</summary>
                <ul>{position.details.map((item) => <li key={item}>{item}</li>)}</ul>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
