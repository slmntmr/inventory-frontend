// src/components/tools/AddToolComponent.js
"use client";
import ToolForm from "./ToolForm";
import { saveTool } from "@/services/api";

export default function AddToolComponent() {
  async function handleSave(tool) {
    try {
      const newTool = await saveTool(tool);
      alert("Tool başarıyla eklendi: " + JSON.stringify(newTool));
    } catch (err) {
      alert("Hata: " + err.message);
    }
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "auto", background: "#f5f5f5", borderRadius: "12px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Add New Tool</h2>
      <ToolForm onSubmit={handleSave} />
    </div>
  );
}
