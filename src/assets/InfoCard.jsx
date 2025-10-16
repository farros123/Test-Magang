import React from "react";
import { Mail } from "lucide-react";
import { styles } from "../styles/styles";

export default function InfoCard({ title, items }) {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoCardTitleWrap}>
        <Mail size={28} className="text-blue-500" />
        <h3 className={styles.infoCardTitle}>{title}</h3>
      </div>
      <div className="space-y-4">
        {items.map(([label, value]) => (
          <div key={label} className={styles.infoItem}>
            <span className={styles.infoLabel}>{label}</span>
            <span className={styles.infoValue}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
