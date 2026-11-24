import styles from "./About.module.scss";
import ProfileQuote from "@/components/ui/ProfileQuote/ProfileQuote";
import { quotes } from "@/data/quotes";

export default function About() {
  return (
    <section className={styles["section"] + " " + styles["about"]} id="about"><div className={styles["wrap"]}><div className={styles["section-grid"]}><div><p className={styles["eyebrow"]}>О специалисте</p><h2>От требований —<br /><em>к архитектуре.</em></h2></div><div className={styles["about-copy"]}><p className={styles["lead"]}>Системный аналитик, архитектор решений и эксперт по кибербезопасности с опытом в банковских технологиях и корпоративных информационных системах.</p><p>В Сбере работаю с архитектурой решений и системным анализом, в том числе в направлении цифровых финансовых активов. Ранее занимался корпоративными системами в «Транснефть-Технологиях» и бизнес-процессами аэропорта Домодедово.</p><p>Объединяю бизнес-требования, технические ограничения и вопросы безопасности: проектирую интеграции, документирую решения и сопровождаю их реализацию.</p><div className={styles["about-tags"]}><span>Архитектура</span><span>Анализ</span><span>Интеграции</span><span>Кибербезопасность</span><span>Бизнес-процессы</span></div></div></div><ProfileQuote text={quotes.about} /></div></section>
  );
}

