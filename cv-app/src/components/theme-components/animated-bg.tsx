"use client";
import $ from "jquery";
import { animateLayout } from "@/assets/js/jquery-functions";
export default function AnimatedBg() {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      animateLayout($);
    }, 100);
  }
  return <div className="lm-animated-bg"></div>;
}
