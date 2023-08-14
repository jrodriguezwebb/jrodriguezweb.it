import Script from "next/script";

export default function TemplateScripts() {
  return (
    <>
      <Script src="/js/modernizr.custom.js" />
      <Script src="/js/jquery-3.5.1.min.js" />
      <Script src="/js/main.js" strategy="lazyOnload" />
      <Script src="/js/imagesloaded.pkgd.min.js" />
      <Script src="https://www.google.com/recaptcha/api.js" />
      <Script src="/js/jquery.shuffle.min.js" />
      <Script src="/js/masonry.pkgd.min.js" />
      <Script src="/js/owl.carousel.min.js" />
      <Script src="/js/jquery.magnific-popup.min.js" />
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrDf32aQTCVENBhFJbMBKOUTiUAABtC2o" />
      <Script src="/js/jquery.googlemap.js" />
      <Script src="/js/validator.js" />
    </>
  );
}
