import "../globals.scss";
import { metadata as meta } from "../layout";
import { Metadata } from "next";
import { i18n } from "../i18n-config";

export const metadata: Metadata = meta;

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default RootLayout;
