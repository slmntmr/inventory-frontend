"use client";

import { useEffect, useState } from "react";
import { getTools } from "@/services/api"; // Sadece servis çağrısı
import ToolList from "@/components/tools/ToolList"; // UI componentini import ediyoruz
import styles from "@/style/ToolList.module.css";

export default function ToolListContainer() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTools();
        setTools(data);
      } catch (err) {
        alert("Hata: " + err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tool List</h2>
      <ToolList tools={tools} /> {/* datayı props olarak geçiyoruz */}
    </div>
  );
}
