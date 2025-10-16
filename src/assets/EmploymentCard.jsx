import React from "react";
import { Building2 } from "lucide-react";
import { styles } from "../styles/styles";
import Stat from "./Stat";

export default function EmploymentCard({ user, formatDate }) {
  return (
    <div className={styles.infoCard}>
      <div className={styles.employmentCardTitle}>
        <Building2 size={28} className="text-purple-500" />
        <h3>Employment Details</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <Stat label="Years of Service" value={user.registered.age} color="text-blue-600" />
        <Stat label="Age" value={user.dob.age} color="text-green-600" />
        <Stat label="Nationality" value={user.nat} color="text-purple-600" />
        <Stat label="Gender" value={user.gender} color="text-orange-600" capitalize />
      </div>

      <div className="mt-10 pt-8 border-t border-gray-200 grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-600 mb-1">Employee ID</p>
          <p className="text-xl font-bold font-mono text-gray-900">
            EMP-{user.login.uuid.substring(0, 8).toUpperCase()}
          </p>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Join Date</p>
          <p className="text-xl font-bold text-gray-900">
            {formatDate(user.registered.date)}
          </p>
        </div>
      </div>
    </div>
  );
}
