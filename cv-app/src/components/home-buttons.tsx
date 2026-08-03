"use client";
import Button from "./button";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { i18n, Locale } from "@/app/i18n-config";

export default function HomeButtons() {
  const pathName = usePathname();
  const [currentLocale, setCurrentLocale] = useState<Locale>(i18n.defaultLocale);

  useEffect(() => {
    // Extract language from pathname
    if (!pathName) return;

    const pathParts = pathName.split("/").filter(Boolean);
    if (pathParts.length > 0) {
      const detectedLocale = pathParts[0];
      if (i18n.locales.includes(detectedLocale as Locale)) {
        setCurrentLocale(detectedLocale as Locale);
        return;
      }
    }

    // Fallback to localStorage
    const storedLocale = localStorage.getItem("selectedLocale");
    if (storedLocale && i18n.locales.includes(storedLocale as Locale)) {
      setCurrentLocale(storedLocale as Locale);
    }
  }, [pathName]);

  const contactHref = useMemo(() => {
    const prefix = currentLocale ? `/${currentLocale}` : "";
    return `${prefix}/contact`;
  }, [currentLocale]);

  return (
    <>
      <Button
        type="primary"
        href="/images/CV-Jesus-Rodriguez28-10.pdf"
        target="_blank"
        aria-label="Download CV in PDF format"
      >
        Download CV
      </Button>
      <Button
        href={contactHref}
        type="secondary"
        aria-label="Contact me"
      >
        Contact
      </Button>
    </>
  );
}
