import { cases } from '@/data/resume';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <section className={`${styles.section} ${styles.projects}`} id="projects">
      <div className={styles.wrap}>
        <div className={styles['section-heading']}>
          <div><p className={styles.eyebrow}>Проекты и достижения</p><h2>Опыт в задачах <em>и результатах.</em></h2></div>
          <p>Ключевые проекты и вклад в развитие корпоративных систем и бизнес-процессов.</p>
        </div>
        <div className={styles['project-list']}>
          {cases.map((project) => (
            <article className={styles.project} key={project.title}>
              <div className={styles['project-index']}>{project.category}</div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>{project.results.map((result) => <li key={result}>{result}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
        <p className={styles['project-note']}>Описания подготовлены по материалам резюме.</p>
      </div>
    </section>
  );
}
