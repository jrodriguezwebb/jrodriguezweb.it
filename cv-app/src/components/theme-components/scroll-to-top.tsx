"use client";
import $ from "jquery";
import { jqueryScrollToTop } from "@/assets/js/jquery-functions";
export default function ScrollToTop() {
  function scrollToTop() {
    jqueryScrollToTop($);
  }
  return (
    <div className="lmpixels-scroll-to-top" onClick={scrollToTop}>
      <i className="lnr lnr-chevron-up"></i>
    </div>
  );
}
