"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import NavigationLayout from "../theme-components/navigation-layout";
import NavigationItem from "./navigation-item";
import { menuOptions } from "@/data/menuOptions";
import LocaleSwitcher from "../locale-switcher";
import { i18n, Locale } from "@/app/i18n-config";

export default function Navigation() {
  const pathName = usePathname();
  const [currentLocale, setCurrentLocale] = useState<Locale>(i18n.defaultLocale);

  useEffect(() => {
    const currentLanguage = pathName.split("/").filter(Boolean)[0];
    if (currentLanguage && i18n.locales.includes(currentLanguage as Locale)) {
      setCurrentLocale(currentLanguage as Locale);
      if (typeof window !== "undefined") {
        localStorage.setItem("selectedLocale", currentLanguage);
      }
      return;
    }

    if (typeof window !== "undefined") {
      const storedLocale = localStorage.getItem("selectedLocale");
      if (storedLocale && i18n.locales.includes(storedLocale as Locale)) {
        setCurrentLocale(storedLocale as Locale);
      }
    }
  }, [pathName]);

  const buildLocalizedHref = useMemo(() => {
    const prefix = currentLocale ? `/${currentLocale}` : "";
    return (href: string) => {
      if (!href || href === "/") {
        return prefix || "/";
      }
      return `${prefix}${href}`;
    };
  }, [currentLocale]);

  return (
    <NavigationLayout>
      {menuOptions.map((menuOption, i) => (
        <NavigationItem key={i}>
          <Link href={buildLocalizedHref(menuOption.href)}>
            {menuOption.description}
          </Link>
        </NavigationItem>
      ))}
      <NavigationItem>
        <LocaleSwitcher />
      </NavigationItem>
    </NavigationLayout>
  );
}
