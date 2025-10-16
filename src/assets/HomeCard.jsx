import React from "react";
import { MapPin } from "lucide-react";
import { styles } from "../styles/styles";

export default function OfficeCard({ user }) {
  return (
    <div className={styles.infoCard}>
      <div className={styles.officeCardTitleWrap}>
        <MapPin size={28} className="text-green-500" />
        <h3 className={styles.officeCardTitle}>Lokasi Rumah</h3>
      </div>
      <div className={styles.officeDetails}>
        <p className={styles.officeAddress}>
          {user.location.street.number} {user.location.street.name}
        </p>
        <p>
          {user.location.city}, {user.location.state}
        </p>
        <p>{user.location.postcode}</p>
        <p className="font-semibold">{user.location.country}</p>
      </div>
      <div className="pt-6 mt-6 border-t border-gray-200 flex justify-between text-gray-600">
        <span>Time Zone</span>
        <span className={styles.timeZone}>UTC {user.location.timezone.offset}</span>
      </div>
    </div>
  );
}
