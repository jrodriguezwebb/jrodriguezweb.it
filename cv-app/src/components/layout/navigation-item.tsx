"use client";

import { usePathname } from "next/navigation";

export default function NavigationItem({
  children,
}: {
  children: React.ReactElement;
}) {
  const currentPage: string = usePathname();
  const {
    props: { href },
  } = children;
  const isActive = currentPage === href ? "current-menu-item" : "";
  return <li className={"menu-item " + isActive}>{children}</li>;
}

{
  /* TODO: Hay que hacer menu dropdown cuando hay varias opciones */
  /* <li className="menu-item menu-item-has-children current-menu-item">
        <a href="index.html">About Me</a>
        <ul className="sub-menu">
          <li className="menu-item current-menu-item">
            <a href="index.html">About Me 1</a>
          </li>
          <li className="menu-item">
            <a href="index-2.html">About Me 2</a>
          </li>
        </ul>
      </li> */
}
