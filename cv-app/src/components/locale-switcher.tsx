"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n } from "@/app/i18n-config";
import { ChangeEvent, useEffect, useState } from "react";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathName = usePathname();
  const [languageSelected, setLanguageSelected] = useState("");

  const buildLocalizedPath = (locale: string) => {
    const segments = pathName.split("/").filter(Boolean);
    const hasLocale = i18n.locales.includes(segments[0] as typeof i18n.locales[number]);
    const rest = hasLocale ? segments.slice(1) : segments;
    const suffix = rest.length ? `/${rest.join("/")}` : "";
    return `/${locale}${suffix}`;
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value;
    setLanguageSelected(locale);
    localStorage.setItem("selectedLocale", locale);
    router.push(buildLocalizedPath(locale));
  };

  useEffect(() => {
    const currentLanguage = pathName.split("/").filter(Boolean)[0];
    if (currentLanguage && i18n.locales.includes(currentLanguage as typeof i18n.locales[number])) {
      setLanguageSelected(currentLanguage);
      localStorage.setItem("selectedLocale", currentLanguage);
      return;
    }

    const storedLocale = localStorage.getItem("selectedLocale");
    if (storedLocale && i18n.locales.includes(storedLocale as typeof i18n.locales[number])) {
      setLanguageSelected(storedLocale);
    }
  }, [pathName]);

  return (
    <div>
      <select 
        onChange={handleChange} 
        value={languageSelected}>
          {i18n.locales.map((locale) => {
            return (
              <option
                value={locale}
                key={locale}
              >
                {locale}
              </option>
            );
          })}
      </select>
    </div>
  );
}
