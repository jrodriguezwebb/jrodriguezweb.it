import Link from "next/link";
import NavigationLayout from "../theme-components/navigation-layout";
import NavigationItem from "./navigation-item";

export default function Navigation() {
  return (
    <NavigationLayout>
      <NavigationItem>
        <Link href="/">About Me</Link>
      </NavigationItem>
      <NavigationItem>
        <Link href="/resume">Resume</Link>
      </NavigationItem>
      <NavigationItem>
        <Link href="/blog">Blog</Link>
      </NavigationItem>
      <NavigationItem>
        <Link href="/contact">Contact</Link>
      </NavigationItem>
    </NavigationLayout>
  );
}
