import Logo from "./logo";
import MobileToggleMenu from "./mobile-toggle-menu";
import Navigation from "./navigation";
import HeaderLayout from "../theme-components/header-layout";

export default function Header() {
  return (
    <HeaderLayout>
      <Logo></Logo>
      <Navigation></Navigation>
      <MobileToggleMenu></MobileToggleMenu>
    </HeaderLayout>
  );
}
