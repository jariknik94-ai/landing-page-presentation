"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (<header className={styles["site-header"]}>
    <div className={styles["wrap"] + " " + styles["header-inner"]}>
      <a href="#top" className={styles["brand"]} aria-label="Владимир Скворцов, на главную"><span className={styles["brand-mark"]} aria-hidden="true"><i></i><i></i><i></i></span><span>Владимир Скворцов</span></a>
      <button className={styles["menu-toggle"]} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} aria-controls="site-nav"><span></span><span></span><span className={styles["sr-only"]}>{menuOpen ? "Закрыть меню" : "Открыть меню"}</span></button>
      <nav className={`${styles["nav"]} ${menuOpen ? styles["is-open"] : ""}`} onClick={() => setMenuOpen(false)} id="site-nav" aria-label="Основная навигация">
        <a href="#about">Обо мне</a><a href="#expertise">Экспертиза</a><a href="#experience">Опыт</a><a href="#projects">Практика</a><a href="#contact">Контакты</a>
      </nav>
    </div>
  </header>);
}

