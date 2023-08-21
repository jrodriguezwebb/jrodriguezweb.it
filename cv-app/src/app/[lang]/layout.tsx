import { Inter } from "next/font/google";
import "../globals.scss";
import type { Metadata } from "next";
import ThemeScripts from "@/components/theme-components/theme-scripts";
import { i18n } from "../i18n-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jrodriguezweb.it",
  description:
    "Soy Jesús Rodríguez un desarrollador web apasionado por Javascript y todas las tecnologías relacionadas.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <ThemeScripts></ThemeScripts>
      <body className={inter.className + " page"}>{children}</body>
    </html>
  );
}
