import React, { useEffect, useState } from "react";
import { styles } from "./styles/styles";
import InfoCard from "./assets/InfoCard";
import OfficeCard from "./assets/HomeCard";
import EmploymentCard from "./assets/EmploymentCard";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      setUser(data.results[0]);
    } catch {
      setError("Gagal memuat data karyawan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const getDepartment = () => {
    const d = ["Human Resources", "Finance & Accounting", "Marketing", "Operations", "Technology", "Legal Affairs"];
    return d[Math.floor(Math.random() * d.length)];
  };

  const getPosition = () => {
    const p = ["Senior Manager", "Director", "Vice President", "Senior Analyst", "Team Lead", "Principal Consultant"];
    return p[Math.floor(Math.random() * p.length)];
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-blue-100">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-12 text-center animate-pulse">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-indigo-300 to-blue-300 rounded-2xl mb-6"></div>
          <p className="text-gray-600 text-lg font-medium">Memuat profil karyawan...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-red-50 to-orange-50">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md border border-red-100">
          <h2 className="text-3xl font-bold text-red-600 mb-3">Terjadi Kesalahan</h2>
          <p className="text-gray-600 mb-8 text-lg">{error}</p>
          <button
            onClick={fetchUser}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            🔁 Coba Lagi
          </button>
        </div>
      </div>
    );

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.headerTitle}>Profile Karyawan</h1>
            <p className={styles.headerSubtitle}>Perusahaan Professional Profile</p>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <div className={styles.status}>
              <div className={styles.statusDot}></div>
              Active
            </div>
            <div className={styles.idBadge}>
              ID: EMP-{user.login.uuid.substring(0, 6).toUpperCase()}
            </div>
          </div>
        </header>

        <section className={styles.card}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
            <div className={styles.profileImageWrap}>
              <img src={user.picture.large} alt="Employee" className={styles.profileImage} />
              <span className={styles.activeBadge}></span>
            </div>

            <div className="flex-1">
              <h2 className={styles.name}>
                {user.name.first} {user.name.last}
              </h2>
              <p className={styles.position}>{getPosition()}</p>
              <p className={styles.department}>{getDepartment()}</p>

              <div className={styles.infoGrid}>
                <p>📍 {user.location.city}, {user.location.country}</p>
                <p>🎂 {user.dob.age} years old</p>
                <p>✉️ {user.email}</p>
                <p>📞 {user.phone}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <button className={styles.buttonOutline}>💬 Send Message</button>
              <button onClick={fetchUser} className={styles.buttonGradient}>
                🔄 Load Profil Karyawan
              </button>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8">
          <InfoCard
            title="Contact Information"
            items={[
              ["Email", user.email],
              ["Office Phone", user.phone],
              ["Mobile", user.cell],
            ]}
          />
          <OfficeCard user={user} />
        </div>

        <EmploymentCard user={user} formatDate={formatDate} />

      </div>
    </div>
  );
}
