"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n } from "@/app/i18n-config";
import { ChangeEvent, useEffect, useState } from "react";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathName = usePathname();
  const [languageSelected, setLanguageSelected] = useState('')

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value;
    setLanguageSelected(locale);
    const noLocalizedPath = pathName.split('/').slice(2).join('/');
    router.push(`/${locale}/${noLocalizedPath}`);
  };

  useEffect(() => {
    const currentLanguage = pathName.split('/')[1]
    setLanguageSelected(currentLanguage)
  }, [])

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
