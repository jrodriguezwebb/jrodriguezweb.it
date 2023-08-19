"use client";
import $ from "jquery";
import * as main from "@/assets/js/jquery-functions";
export default function AnimatedBg() {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      main.animateLayout($);
    }, 100);
  }
  return <div className="lm-animated-bg"></div>;
}
