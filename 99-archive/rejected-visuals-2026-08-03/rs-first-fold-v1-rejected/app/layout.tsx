import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RS Consultoria — estudo visual privado",
  description: "Estudo privado de primeira dobra para a RS Consultoria.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
