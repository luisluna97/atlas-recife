import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trabalhista empresarial | Leonardo Coêlho Advocacia",
  description: "Conceito privado de uma página informativa sobre atuação trabalhista empresarial.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
