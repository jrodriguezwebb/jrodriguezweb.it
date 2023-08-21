import "../globals.scss";
import { metadata as meta } from "../layout";
import { Metadata } from "next";

export const metadata: Metadata = meta;

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default RootLayout;
