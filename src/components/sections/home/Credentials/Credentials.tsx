import { courses, education } from '@/data/resume';
import styles from './Credentials.module.scss';

export default function Credentials() {
  return (
    <section className={`${styles.section} ${styles.credentials}`} id="education">
      <div className={styles.wrap}>
        <div className={styles['credentials-inner']}>
          <div><p className={styles.eyebrow}>Образование и развитие</p><h2>Учиться.<br /><em>Применять.</em></h2></div>
          <div className={styles['credentials-list']}>
            {education.map((item) => (
              <div key={item.label}><span>{item.label}</span><p>{item.title}<br /><small>{item.detail}</small></p></div>
            ))}
          </div>
        </div>
        <details className={styles['courses-details']}>
          <summary>Другие программы и сертификаты</summary>
          <div className={styles['courses-list']}>
            {courses.map((group) => (
              <div key={group.year}><h3>{group.year}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
