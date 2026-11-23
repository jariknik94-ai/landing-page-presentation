import { skillGroups } from '@/data/resume';
import styles from './Skills.module.scss';

export default function Skills() {
  return (
    <section className={`${styles.section} ${styles.skills}`} id="skills">
      <div className={styles.wrap}>
        <div className={styles['section-heading']}>
          <div><p className={styles.eyebrow}>Инструменты и методы</p><h2>Навыки<span className={styles.dot}>.</span></h2></div>
          <p>Практика архитектуры, аналитики и моделирования — в системах и бизнес-процессах.</p>
        </div>
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article className={styles.group} key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
