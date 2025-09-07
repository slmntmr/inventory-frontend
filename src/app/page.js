// src/app/page.js
"use client"; // <- Bu çok önemli



import AddToolComponent from "@/components/tools/AddToolComponent";
import ToolListContainer from "@/containers/ToolListContainer";

export default function HomePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Inventory Management</h1>

      {/* Ana sayfada sadece AddToolComponent'i gösteriyoruz */}
     { <AddToolComponent />}

     {/* Ana sayfada Tool listesi componentini gösteriyoruz */}
    {/*   <ToolListComponent /> */}
    <ToolListContainer/>
    </div>
  );
}
