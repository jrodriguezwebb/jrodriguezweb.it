import { Inter } from "next/font/google";
import "./globals.scss";
import type { Metadata } from "next";
import ThemeScripts from "@/components/theme-components/theme-scripts";
import { i18n } from "./i18n-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jrodriguezweb.it",
  description:
    "I am Jesús Alfredo Rodríguez Pérez, a seasoned Full Stack Developer with over 13 years in web technology. My journey fuses frontend and backend development. Equipped with skills and innovation, I navigate diverse technologies like TypeScript, JavaScript, PHP, Angular, React, Ionic, NodeJS, and more. Crafting captivating user experiences focused on UI design, robust APIs, databases like MySQL, and Agile methodologies. As a Full Stack Developer, I unite both worlds, creating fluid connections and delivering end-to-end solutions. Proficient in English and Spanish, I effectively engage stakeholders and teams. My goal is to craft impactful web solutions with innovation and user-centricity.",
};

export const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
  params?: { lang: string };
}) => {
  return (
    <html lang="en">
      <ThemeScripts></ThemeScripts>
      <body className={inter.className + " page"}>{children}</body>
    </html>
  );
};

export default RootLayout;
