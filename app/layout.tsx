import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Driveon | Sistema operacional para oficinas modernas",
  description:
    "Driveon centraliza agendamento, ordens de servico, clientes, financeiro e performance para oficinas que querem operar como empresas de alto crescimento.",
  openGraph: {
    title: "Driveon | A oficina inteira em um sistema de comando",
    description:
      "Controle agenda, patio, mecanicos, financeiro e experiencia do cliente em uma plataforma premium para oficinas.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body>{children}</body>
    </html>
  );
}
