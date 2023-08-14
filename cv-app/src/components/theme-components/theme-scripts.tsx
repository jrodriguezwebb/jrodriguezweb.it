import Script from "next/script";

export default function ThemeScripts() {
  return (
    <>
      <Script src="/js/modernizr.custom.js" />
      <Script src="/js/jquery-3.5.1.min.js" />
      <Script src="/js/imagesloaded.pkgd.min.js" />
      <Script src="/js/jquery.shuffle.min.js" />
      <Script src="/js/masonry.pkgd.min.js" />
      <Script src="/js/owl.carousel.min.js" />
      <Script src="/js/jquery.magnific-popup.min.js" />
      <Script src="/js/jquery.googlemap.js" />
      <Script src="/js/validator.js" />
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.google_api_key}`}
        strategy="lazyOnload"
      />
      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  );
}
