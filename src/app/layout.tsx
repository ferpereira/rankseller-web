import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "../components/layout/Sidebar";
import { Header } from "../components/layout/Header";

export const metadata: Metadata = {
  title: "RankSeller",
  description: "Crescimento orgânico para marketplaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#F5F7FB] text-slate-900 antialiased">
        <div className="flex min-h-screen">
          <Sidebar />

          <main className="flex-1">
            <Header />
            <div className="mx-auto max-w-7xl p-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}