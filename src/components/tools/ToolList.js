"use client";
import styles from "@/style/ToolList.module.css";

// Sadece UI katmanı, datayı props’tan alıyor
export default function ToolList({ tools }) {
  if (!tools || tools.length === 0) {
    return <p className={styles.empty}>Henüz kayıtlı tool yok.</p>;
  }

  return (
    <ul className={styles.list}>
      {tools.map((tool) => (
        <li key={tool.id} className={styles.item}>
          <span className={styles.name}>{tool.name}</span>
          <span className={styles.description}>{tool.description}</span>
        </li>
      ))}
    </ul>
  );
}
