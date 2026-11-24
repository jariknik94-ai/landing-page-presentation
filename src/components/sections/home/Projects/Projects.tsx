import { cases } from '@/data/resume';
import ProjectVisual from '@/components/ui/ProjectVisual/ProjectVisual';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <section className={`${styles.section} ${styles.projects}`} id="projects">
      <div className={styles.wrap}>
        <div className={styles['section-heading']}>
          <div>
            <p className={styles.eyebrow}>Проекты и достижения</p>
            <h2>
              Опыт в задачах <em>и результатах.</em>
            </h2>
          </div>
          <p>Ключевые проекты и вклад в развитие корпоративных систем и бизнес-процессов.</p>
        </div>
        <div className={styles['project-list']}>
          {cases.map((project, index) => (
            <article className={styles.project} key={project.title}>
              <div className={styles['project-meta']}>
                <div className={styles['project-index']}>
                  <span>{project.category}</span>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className={styles['project-placeholder']}>
                  <ProjectVisual variant={project.visual} />
                  <span className={styles['placeholder-caption']}>
                    Изображение проекта появится позже
                  </span>
                </div>
              </div>
              <div className={styles['project-content']}>
                <h3>{project.title}</h3>
                <span className={styles['project-label']}>Контекст</span>
                <p>{project.description}</p>
                <span className={styles['project-label']}>Роль</span>
                <p className={styles['project-role']}>{project.role}</p>
                <span className={styles['project-label']}>Результаты и вклад</span>
                <ul>
                  {project.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className={styles['future-projects']} aria-label="Места для будущих проектов">
          <article className={styles['future-card']}>
            <span aria-hidden="true">+</span>
            <div>
              <h3>Новый проект</h3>
              <p>Место для будущего кейса и его результатов.</p>
            </div>
          </article>
          <article className={styles['future-card']}>
            <span aria-hidden="true">+</span>
            <div>
              <h3>Новый проект</h3>
              <p>Здесь можно будет добавить ещё одну работу.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
