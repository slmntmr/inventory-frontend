// src/services/api.js

// Bilal için: Bu dosya backend ile konuşmanın tek merkezi.
// Eğer backend URL'si değişirse (ör: prod veya test) sadece NEXT_PUBLIC_API_BASE'i .env'de değiştirirsin.
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8080/api/tools";

/**
 * GET /getAll
 * - Backend'e GET isteği atar, tüm tool'ları JSON olarak döner.
 * - Hata durumunda bir hata fırlatır (caller catch'leyebilir).
 */
export async function getAllTools() {
  // Bilal için: fetch() browser'da bulunan yerleşik fonksiyon. Burada GET isteği atıyoruz.
  const res = await fetch(`${API_BASE}/getAll`, {
    method: "GET",
    // Bilal için: credentials veya headers eklemek istersen buraya ekle.
  });

  // Eğer status 200-299 aralığında değilse, hata fırlat
  if (!res.ok) {
    // Bilal için: hata mesajını console'a da basıyoruz ki debugging kolay olsun.
    const text = await res.text().catch(() => "");
    throw new Error(`getAllTools failed: ${res.status} ${text}`);
  }

  // Dönen body'yi JSON olarak parse et ve geri döndür
  return res.json();
}

/**
 * GET /getById/{id}
 */
export async function getToolById(id) {
  const res = await fetch(`${API_BASE}/getById/${id}`, { method: "GET" });
  if (!res.ok) throw new Error(`getToolById failed: ${res.status}`);
  return res.json();
}

/**
 * POST /save
 * - tool: { name: string, quantity: number, ... }
 */
export async function saveTool(tool) {
  const res = await fetch(`${API_BASE}/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tool),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`saveTool failed: ${res.status} ${text}`);
  }
  return res.json();
}

/**
 * PUT /update/{id}
 */
export async function updateTool(id, tool) {
  const res = await fetch(`${API_BASE}/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tool),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`updateTool failed: ${res.status} ${text}`);
  }
  return res.json();
}

/**
 * DELETE /delete/{id}
 */
export async function deleteTool(id) {
  const res = await fetch(`${API_BASE}/delete/${id}`, { method: "DELETE" });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`deleteTool failed: ${res.status} ${text}`);
  }
  // delete genelde body dönmez; başarılıysa sadece döndüğü kabul et
  return;
}
