import Home from "@/components/home";
import StandardPage from "@/components/layout/standard-page";
import { Locale } from "../i18n-config";
import { getDictionary } from "../get-dictionary";
import LocaleSwitcher from "@/components/locale-switcher";

export default async function IndexWithI18nPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <StandardPage>
      <Home></Home>
    </StandardPage>
  );
}
