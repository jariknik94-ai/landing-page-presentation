import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles["hero"]} id="top">
      <div className={styles["hero-glow"]} aria-hidden="true"></div>
      <svg className={styles["terrain"]} viewBox="0 0 1600 360" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="wave" x1="0" x2="1" y1="0" y2="0"><stop stopColor="#5e9db1" stopOpacity=".15"/><stop offset=".55" stopColor="#d0ffff" stopOpacity=".6"/><stop offset="1" stopColor="#05d8d1" stopOpacity=".4"/></linearGradient></defs><g fill="none" stroke="url(#wave)" strokeWidth="1"><path d="M-100 215 C180 30 320 340 610 191 S1010 270 1200 112 S1510 70 1700 125"/><path d="M-100 225 C180 40 320 350 610 201 S1010 280 1200 122 S1510 80 1700 135"/><path d="M-100 235 C180 50 320 360 610 211 S1010 290 1200 132 S1510 90 1700 145"/><path d="M-100 245 C180 60 320 370 610 221 S1010 300 1200 142 S1510 100 1700 155"/><path d="M-100 255 C180 70 320 380 610 231 S1010 310 1200 152 S1510 110 1700 165"/><path d="M-100 265 C180 80 320 390 610 241 S1010 320 1200 162 S1510 120 1700 175"/><path d="M-100 275 C180 90 320 400 610 251 S1010 330 1200 172 S1510 130 1700 185"/><path d="M-100 285 C180 100 320 410 610 261 S1010 340 1200 182 S1510 140 1700 195"/><path d="M-100 295 C180 110 320 420 610 271 S1010 350 1200 192 S1510 150 1700 205"/><path d="M-100 305 C180 120 320 430 610 281 S1010 360 1200 202 S1510 160 1700 215"/><path d="M-100 315 C180 130 320 440 610 291 S1010 370 1200 212 S1510 170 1700 225"/><path d="M-100 325 C180 140 320 450 610 301 S1010 380 1200 222 S1510 180 1700 235"/></g><path d="M350 365 C650 140 830 350 1060 215 S1370 70 1700 185" fill="none" stroke="#10f2df" strokeOpacity=".65" strokeWidth="2"/></svg>
      <div className={styles["wrap"] + " " + styles["hero-inner"]}>
        <div className={styles["hero-copy"]}><p className={styles["eyebrow"]}><span></span> Системное мышление · Архитектура решений</p><h1>Владимир<br />Скворцов</h1><div className={styles["accent-line"]}></div><p className={styles["hero-role"]}>Системный аналитик<br />и архитектор решений</p><p className={styles["hero-description"]}>Помогаю превращать сложные бизнес-задачи в понятные и устойчивые ИТ-решения.</p><div className={styles["hero-actions"]}><a className={styles["button"] + " " + styles["button-primary"]} href="#contact">Связаться</a><a className={styles["text-link"]} href="#expertise">Узнать больше <span aria-hidden="true">↓</span></a></div></div>
        <div className={styles["hero-visual"]}><img className={styles["hero-reference"]} src="/assets/hero-reference.png" alt="Владимир Скворцов на фоне архитектурной схемы" /></div>
        <div className={styles["hero-bottom"]}><span>Бизнес-задача</span><i></i><span>Системный анализ</span><i></i><span>Архитектура</span><i></i><span>Решение</span></div>
      </div>
    </section>
  );
}

