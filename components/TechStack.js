import { useState } from "react";
import styles from "../styles/tech-stack.module.css";

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");

  const techStack = {
    frontend: [
      { name: "HTML & CSS", icon: "🎨", color: "#FF6B6B" },
      { name: "Tailwind CSS", icon: "💅", color: "#FFA07A" },
      { name: "Javascript", icon: "⚡", color: "#FFE66D" },
      { name: "React JS", icon: "⚛️", color: "#FF6B6B" },
      { name: "Next JS", icon: "▲", color: "#FFA07A" },
      { name: "Git & GitHub", icon: "🔧", color: "#FFE66D" },
    ],
    backend: [
      { name: "Python", icon: "🐍", color: "#FF6B6B" },
      { name: "Flask", icon: "🌶️", color: "#FFA07A" },
      { name: "Django", icon: "🎯", color: "#FFE66D" },
      { name: "PostgreSQL", icon: "🐘", color: "#FF6B6B" },
      { name: "Docker", icon: "🐳", color: "#FFA07A" },
      { name: "Supabase", icon: "⚡", color: "#FFE66D" },
    ],
  }

  const currentTech = techStack[activeTab];

  return (
    <div className={styles.techStack}>
      <div className={styles.techHeader}>
        <h3 className={styles.techTitle}>
          <span className={styles.techTitleIcon}>🚀</span>
          Stack tecnológico
        </h3>
        <div className={styles.techTabs}>
          <button
            className={`${styles.techTab} ${
              activeTab === "frontend" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("frontend")}
          >
            Frontend
          </button>
          <button
            className={`${styles.techTab} ${
              activeTab === "backend" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("backend")}
          >
            Backend
          </button>
        </div>
      </div>

      <div className={styles.techGrid}>
        {currentTech.map((tech, index) => (
          <div
            key={`${activeTab}-${tech.name}`}
            className={styles.techCard}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className={styles.techIcon}>{tech.icon}</span>
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}