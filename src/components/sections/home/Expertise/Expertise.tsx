import Icon from '@/components/ui/Icon/Icon';
import styles from './Expertise.module.scss';

const areas = [
  { icon: 'architecture', title: 'Архитектура решений', text: 'Проектирование и развитие информационных систем, архитектурные решения и ревью.', label: 'Видеть систему целиком' },
  { icon: 'analysis', title: 'Системный анализ', text: 'Исследование требований, декомпозиция задач и подготовка технической документации.', label: 'От задачи к требованиям' },
  { icon: 'integration', title: 'Интеграции и процессы', text: 'Проектирование взаимодействия систем, описание и развитие бизнес-процессов.', label: 'Связать важные элементы' },
  { icon: 'enterprise', title: 'Корпоративная архитектура', text: 'Архитектурные принципы, стандарты и оценка влияния изменений на ИТ-ландшафт.', label: 'Думать на перспективу' },
] as const;

export default function Expertise() {
  return (
    <section className={`${styles.section} ${styles.expertise}`} id="expertise">
      <div className={styles.wrap}>
        <div className={styles['section-heading']}>
          <div><p className={styles.eyebrow}>Направления работы</p><h2>Экспертиза<span className={styles.dot}>.</span></h2></div>
          <p>От понимания задачи до целостного видения решения.</p>
        </div>
        <div className={styles['expertise-grid']}>
          {areas.map((area) => (
            <article className={styles['expertise-card']} key={area.title}>
              <span className={styles['card-icon']}><Icon name={area.icon} /></span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <span className={styles['card-label']}>{area.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
