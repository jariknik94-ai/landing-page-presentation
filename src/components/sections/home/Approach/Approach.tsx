import styles from "./Approach.module.scss";
import ProfileQuote from "@/components/ui/ProfileQuote/ProfileQuote";
import { quotes } from "@/data/quotes";

export default function Approach() {
  return (
    <section className={styles["section"] + " " + styles["approach"]}><div className={styles["wrap"]}><div className={styles["section-heading"]}><div><p className={styles["eyebrow"]}>Принцип работы</p><h2>От идеи — <em>к решению.</em></h2></div><p>Последовательный подход помогает видеть детали, не теряя целого.</p></div><div className={styles["steps"]}><div><span>01</span><h3>Понять</h3><p>Разобраться в контексте, целях и потребностях участников.</p></div><div><span>02</span><h3>Связать</h3><p>Выявить требования, зависимости и точки взаимодействия.</p></div><div><span>03</span><h3>Спроектировать</h3><p>Сформировать понятное архитектурное решение и документацию.</p></div><div><span>04</span><h3>Сопроводить</h3><p>Помочь команде сохранить замысел на пути к реализации.</p></div></div><ProfileQuote text={quotes.approach} /></div></section>
  );
}

