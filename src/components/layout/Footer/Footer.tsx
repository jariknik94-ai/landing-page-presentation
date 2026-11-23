import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}><div className={styles["wrap"] + " " + styles["footer-inner"]}><a className={styles["brand"] + " " + styles["footer-brand"]} href="#top"><span className={styles["brand-mark"]} aria-hidden="true"><i></i><i></i><i></i></span><span>Владимир Скворцов</span></a><span>Системный аналитик · Архитектор решений</span><a href="#top">Наверх ↑</a></div></footer>
  );
}

