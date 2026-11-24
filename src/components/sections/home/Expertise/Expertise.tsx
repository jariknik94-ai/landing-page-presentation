import Icon from '@/components/ui/Icon/Icon';
import ProfileQuote from '@/components/ui/ProfileQuote/ProfileQuote';
import { quotes } from '@/data/quotes';
import { instructionProfiles } from '@/data/resume';
import styles from './Expertise.module.scss';

const areas = [
  { icon: 'architecture', title: 'Архитектура решений', text: 'Проектирование и развитие информационных систем, архитектурные решения и ревью.', label: 'Видеть систему целиком' },
  { icon: 'analysis', title: 'Системный анализ', text: 'Исследование требований, декомпозиция задач и подготовка технической документации.', label: 'От задачи к требованиям' },
  { icon: 'integration', title: 'Интеграции и процессы', text: 'Проектирование взаимодействия систем, описание и развитие бизнес-процессов.', label: 'Связать важные элементы' },
  { icon: 'enterprise', title: 'Корпоративная архитектура', text: 'Архитектурные принципы, стандарты и оценка влияния изменений на ИТ-ландшафт.', label: 'Думать на перспективу' },
  { icon: 'security', title: 'Кибербезопасность', text: 'Анализ угроз и рисков, экспертиза требований безопасности и участие в приёмке систем.', label: 'Учитывать безопасность в решениях' },
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
        <ProfileQuote text={quotes.expertise} />
        <details className={styles['instruction-details']}>
          <summary>Подробнее о должностных обязанностях</summary>
          <p className={styles['instruction-intro']}>Направления и функции из должностных инструкций, с которыми ознакомился Владимир. Инструкции описывают обязанности должностей и требования к ним, а не результаты конкретных проектов.</p>
          <div className={styles['instruction-grid']}>
            {instructionProfiles.map((profile) => (
              <article className={styles['instruction-card']} key={profile.title}>
                <h3>{profile.title}</h3>
                <p className={styles['instruction-role']}>{profile.role}</p>
                <ul>{profile.duties.map((duty) => <li key={duty}>{duty}</li>)}</ul>
                {'requirements' in profile && <p className={styles['instruction-note']}>{profile.requirements}</p>}
              </article>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
