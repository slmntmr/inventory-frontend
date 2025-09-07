// src/components/tools/ToolForm.js
"use client";

import { useState } from "react";
import styles from "@/style/ToolForm.module.css"; // Güncel yol

export default function ToolForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, quantity });
    setName("");
    setQuantity(0);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label}>Tool Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          placeholder="Enter tool name"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className={styles.input}
          placeholder="Enter quantity"
          required
        />
      </div>

      <button type="submit" className={styles.button}>
        Save Tool
      </button>
    </form>
  );
}
