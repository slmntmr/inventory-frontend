"use client";

import { useState } from "react";
import { getAllTools } from "@/services/api";

import ToolList from "@/components/tools/ToolList";
import styles from "@/style/ToolList.module.css";

export default function ToolListContainer() {
  const [tools, setTools] = useState([]);

  async function handleFetch() {
    try {
      const data = await getAllTools();
      setTools(data);
    } catch (err) {
      alert("Hata: " + err.message);
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tool List</h2>

      {/* Buton ekliyoruz */}
      <button onClick={handleFetch} className={styles.fetchBtn}>
        Araçları Getir
      </button>

      {/* Listeleme */}
      <ToolList tools={tools} />
    </div>
  );
}
