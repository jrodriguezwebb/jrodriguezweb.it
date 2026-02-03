"use client";
import Button from "./button";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { i18n, Locale } from "@/app/i18n-config";

export default function HomeButtons() {
  const pathName = usePathname();
  const [currentLocale, setCurrentLocale] = useState<Locale>(i18n.defaultLocale);

  useEffect(() => {
    const currentLanguage = pathName.split("/").filter(Boolean)[0];
    if (currentLanguage && i18n.locales.includes(currentLanguage as Locale)) {
      setCurrentLocale(currentLanguage as Locale);
      return;
    }

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
        onClick={() => {
          console.log("Hola mundo");
        }}
      >
        Download CV
      </Button>
      <Button href={contactHref} type="secondary">
        Contact
      </Button>
    </>
  );
}
