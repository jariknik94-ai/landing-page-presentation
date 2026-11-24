import Icon from '@/components/ui/Icon/Icon';
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}><div className={styles["wrap"] + " " + styles["footer-inner"]}><a className={styles["brand"] + " " + styles["footer-brand"]} href="#top"><img className={styles["brand-mark"]} src="/assets/logo.svg" alt="" aria-hidden="true" /><span>Владимир Скворцов</span></a><span>Системный аналитик · Архитектор решений · Эксперт по кибербезопасности</span><a href="#top" className={styles['back-to-top']}>Наверх <Icon name="arrow-up" /></a></div></footer>
  );
}

