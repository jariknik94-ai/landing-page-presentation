import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <section className={styles["section"] + " " + styles["projects"]} id="projects"><div className={styles["wrap"]}><div className={styles["section-heading"]}><div><p className={styles["eyebrow"]}>Примеры практики</p><h2>За каждой схемой — <em>задача.</em></h2></div><p>Несколько направлений из профессионального опыта.</p></div><div className={styles["project-list"]}>
      <article className={styles["project"]}><div className={styles["project-index"]}>01 <span> / Финансовые технологии</span></div><div><h3>Портал цифровых финансовых активов</h3><p>Аналитика и архитектурное решение для подтверждения операций, архитектурное ревью портала и проработка кэширования данных.</p></div><span className={styles["project-symbol"]} aria-hidden="true">↗</span></article>
      <article className={styles["project"]}><div className={styles["project-index"]}>02 <span> / Корпоративная архитектура</span></div><div><h3>Архитектура и стандарты</h3><p>Актуализация корпоративной архитектуры в области безопасности, участие в разработке стандартов и внедрении референсных архитектур.</p></div><span className={styles["project-symbol"]} aria-hidden="true">↗</span></article>
      <article className={styles["project"]}><div className={styles["project-index"]}>03 <span> / Бизнес-процессы</span></div><div><h3>От процессов к системным изменениям</h3><p>Описание процессов электроснабжения, разработка регламентов и требований к корпоративной информационной системе.</p></div><span className={styles["project-symbol"]} aria-hidden="true">↗</span></article>
    </div><p className={styles["project-note"]}>Описания приведены по материалам резюме и не раскрывают внутренних деталей проектов.</p></div></section>
  );
}

