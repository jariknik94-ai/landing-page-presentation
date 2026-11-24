import { experience } from '@/data/resume';
import Image from 'next/image';
import styles from './Experience.module.scss';

type Position = (typeof experience)[number];

const employers = experience.reduce<{ company: string; positions: Position[] }[]>(
  (groups, position) => {
    const last = groups[groups.length - 1];

    if (last?.company === position.company) {
      last.positions.push(position);
    } else {
      groups.push({ company: position.company, positions: [position] });
    }

    return groups;
  },
  [],
);

export default function Experience() {
  return (
    <section className={`${styles.section} ${styles.experience}`} id="experience">
      <div className={styles.wrap}>
        <div className={styles['section-heading']}>
          <div>
            <p className={styles.eyebrow}>Профессиональный путь</p>
            <h2>
              Опыт <em>работы.</em>
            </h2>
          </div>
          <p>
            Роли и зоны ответственности в банковских технологиях, корпоративных системах и развитии
            бизнес-процессов.
          </p>
        </div>
        <div className={styles['career-layout']}>
          <div className={styles.portrait}>
            <Image
              src="/assets/experience-portrait-mirrored.webp"
              alt="Владимир Скворцов"
              width={800}
              height={1200}
              sizes="(max-width: 700px) 54vw, (max-width: 1366px) and (orientation: portrait) 260px, (max-width: 1500px) 100vw, 1392px"
            />
          </div>
          <div className={styles.timeline}>
            {employers.map((employer) => (
              <article
                className={styles['timeline-company']}
                key={`${employer.company}-${employer.positions[0].period}`}
              >
                <h3>{employer.company}</h3>
                {employer.positions.map((position) => (
                  <section
                    className={styles['timeline-item']}
                    key={`${position.company}-${position.period}`}
                  >
                    <span className={styles['timeline-date']}>{position.period}</span>
                    <h4 className={styles['timeline-role']}>{position.role}</h4>
                    <p>{position.summary}</p>
                    <details className={styles.details}>
                      <summary>Подробнее о работе</summary>
                      <ul>
                        {position.details.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </details>
                  </section>
                ))}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
