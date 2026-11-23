import styles from "./Expertise.module.scss";

export default function Expertise() {
  return (
    <section className={styles["section"] + " " + styles["expertise"]} id="expertise"><div className={styles["wrap"]}><div className={styles["section-heading"]}><div><p className={styles["eyebrow"]}>Направления работы</p><h2>Экспертиза<span className={styles["dot"]}>.</span></h2></div><p>От понимания задачи до целостного видения решения.</p></div><div className={styles["expertise-grid"]}>
      <article className={styles["expertise-card"]}><span className={styles["card-icon"]} aria-hidden="true">◇</span><h3>Архитектура<br />решений</h3><p>Проектирование и развитие информационных систем, архитектурные решения и ревью.</p><span className={styles["card-label"]}>Видеть систему целиком</span></article>
      <article className={styles["expertise-card"]}><span className={styles["card-icon"]} aria-hidden="true">⌘</span><h3>Системный<br />анализ</h3><p>Исследование требований, декомпозиция задач и подготовка технической документации.</p><span className={styles["card-label"]}>От задачи к требованиям</span></article>
      <article className={styles["expertise-card"]}><span className={styles["card-icon"]} aria-hidden="true">↗</span><h3>Интеграции<br />и процессы</h3><p>Проектирование взаимодействия систем, описание и развитие бизнес-процессов.</p><span className={styles["card-label"]}>Связать важные элементы</span></article>
      <article className={styles["expertise-card"]}><span className={styles["card-icon"]} aria-hidden="true">✳</span><h3>Корпоративная<br />архитектура</h3><p>Архитектурные принципы, стандарты и оценка влияния изменений на ИТ-ландшафт.</p><span className={styles["card-label"]}>Думать на перспективу</span></article>
    </div></div></section>
  );
}

