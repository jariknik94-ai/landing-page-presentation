import styles from "./Credentials.module.scss";

export default function Credentials() {
  return (
    <section className={styles["section"] + " " + styles["credentials"]}><div className={styles["wrap"] + " " + styles["credentials-inner"]}><div><p className={styles["eyebrow"]}>Образование и развитие</p><h2>Учиться.<br /><em>Применять.</em></h2></div><div className={styles["credentials-list"]}><div><span>Образование</span><p>Кузбасский государственный технический университет имени Т. Ф. Горбачёва<br /><small>Электроэнергетика и электротехника · магистратура</small></p></div><div><span>Архитектура</span><p>Сертификация архитектора 1 уровня<br /><small>Сбер · 2024</small></p></div><div><span>Системный анализ</span><p>Школа системного анализа и программа по корпоративной архитектуре<br /><small>Корпоративный университет Сбербанка · 2023</small></p></div></div></div></section>
  );
}

