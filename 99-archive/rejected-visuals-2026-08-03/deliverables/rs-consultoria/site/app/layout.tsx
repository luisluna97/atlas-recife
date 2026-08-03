import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uma conversa contábil para começar | RS Consultoria — conceito privado",
  description: "Conceito privado para apresentar a terceirização contábil e as frentes contábil, tributária, fiscal e trabalhista da RS Consultoria em Recife.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
