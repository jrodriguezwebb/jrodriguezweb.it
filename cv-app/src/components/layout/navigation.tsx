import Link from "next/link";
import NavigationLayout from "../theme-components/navigation-layout";
import NavigationItem from "./navigation-item";
import { menuOptions } from "@/data/menuOptions";
import LocaleSwitcher from "../locale-switcher";

export default function Navigation() {
  
  return (
    <NavigationLayout>
      {menuOptions.map((menuOption, i) => (
        <NavigationItem key={i}>
          <Link href={menuOption.href}>{menuOption.description}</Link>
        </NavigationItem>
      ))}
      <NavigationItem>
        <LocaleSwitcher />
      </NavigationItem>
    </NavigationLayout>
  );
}
