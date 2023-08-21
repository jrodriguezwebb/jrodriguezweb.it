"use client";

import { redirect, usePathname, useRouter } from "next/navigation";
import { i18n } from "@/app/i18n-config";
import { ChangeEvent } from "react";

export const generateStaticParams = async () => {
  return i18n.locales.map((locale) => ({ lang: locale }));
};

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value;
    const path = redirectedPathName(locale);
    router.push(path);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {i18n.locales.map((locale) => {
          return (
            <option value={locale} key={locale}>
              {locale}
            </option>
          );
        })}
      </select>
    </div>
  );
}
