// app/layout.jsx (atau app/root-layout.jsx jika Next.js 13+)
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TerapisReport - Sistem Manajemen Pendapatan Terapis",
  description: "Platform manajemen pendapatan terapis profesional dengan laporan detail dan komisi otomatis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}