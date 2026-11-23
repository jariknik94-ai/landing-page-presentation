import styles from "./Experience.module.scss";

export default function Experience() {
  return (
    <section className={styles["section"] + " " + styles["experience"]} id="experience"><div className={styles["wrap"] + " " + styles["section-grid"]}><div><p className={styles["eyebrow"]}>Профессиональный путь</p><h2>Опыт, который<br /><em>соединяет.</em></h2><p className={styles["section-intro"]}>Банковские технологии, корпоративные системы и управление бизнес-процессами.</p></div><div className={styles["timeline"]}>
      <article className={styles["timeline-item"]}><span className={styles["timeline-date"]}>2022 — настоящее время</span><h3>Сбер</h3><p className={styles["timeline-role"]}>Senior SA / Solution Architect · Корпоративный архитектор · Системный аналитик</p><p>Архитектура и развитие систем, проработка требований, архитектурное ревью и взаимодействие с командами разработки.</p></article>
      <article className={styles["timeline-item"]}><span className={styles["timeline-date"]}>2021 — 2022</span><h3>Транснефть-Технологии</h3><p className={styles["timeline-role"]}>Системный и бизнес-аналитик</p><p>Развитие корпоративных информационных систем, обследование процессов, согласование требований и поддержка внедрения.</p></article>
      <article className={styles["timeline-item"]}><span className={styles["timeline-date"]}>2020 — 2021</span><h3>Московский аэропорт Домодедово</h3><p className={styles["timeline-role"]}>Методолог по направлению «Электроснабжение»</p><p>Анализ и моделирование бизнес-процессов, разработка регламентов и требований к информационным системам.</p></article>
    </div></div></section>
  );
}

