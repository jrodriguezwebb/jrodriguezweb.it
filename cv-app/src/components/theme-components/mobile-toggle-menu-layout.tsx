"use client";
import $ from "jquery";
import { openMenuJquery } from "@/assets/js/jquery-functions";
export default function MobileToggleMenuLayout() {
  function openMenu() {
    if (typeof window !== "undefined") {
      openMenuJquery($);
    }
  }

  return (
    <a className="menu-toggle mobile-visible" onClick={openMenu}>
      <i className="fa fa-bars"></i>
    </a>
  );
}
