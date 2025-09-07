// src/app/layout.js
export const metadata = {
  title: "Inventory App",
  description: "Manage your tools easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
