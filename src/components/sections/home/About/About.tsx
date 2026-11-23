import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles["section"] + " " + styles["about"]} id="about"><div className={styles["wrap"] + " " + styles["section-grid"]}><div><p className={styles["eyebrow"]}>Знакомство</p><h2>Сложное становится <em>понятным.</em></h2></div><div className={styles["about-copy"]}><p className={styles["lead"]}>Я работаю на пересечении бизнеса и технологий: исследую задачи, проектирую решения и помогаю командам воплощать их в работающих системах.</p><p>В моём опыте — системный и бизнес-анализ, архитектура решений, развитие корпоративных систем и работа с интеграциями. Мне важно видеть систему целиком, учитывать связи между её частями и находить подход, который понятен и бизнесу, и разработке.</p><div className={styles["about-tags"]}><span>Архитектура</span><span>Анализ</span><span>Интеграции</span><span>Бизнес-процессы</span></div></div></div></section>
  );
}

