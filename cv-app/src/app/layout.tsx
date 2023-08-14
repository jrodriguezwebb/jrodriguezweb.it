import TemplateScripts from "@/components/template-scripts";
import { Inter } from "next/font/google";
import "./globals.scss";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jrodriguezweb.it",
  description:
    "Soy Jesús Rodríguez un desarrollador web apasionado por Javascript y todas las tecnologías relacionadas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <TemplateScripts></TemplateScripts>
      <body className={inter.className + " page"}>{children}</body>
    </html>
  );
}
