import Head from "next/head";
import Layout from "@/components/layout";
import Header from "@/components/header";
import MainHome from "@/components/main-home";
import Footer from "@/components/layout copy";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>jrodriguezweb.it</title>
      </Head>

      <div className="lm-animated-bg"></div>

      {/* <!-- Loading animation --> */}
      {/* <div className="preloader">
          <div className="preloader-animation">
            <div className="preloader-spinner"></div>
          </div>
        </div> */}
      {/* <!-- /Loading animation --> */}

      {/* <!-- Scroll To Top Button --> */}
      <div className="lmpixels-scroll-to-top">
        <i className="lnr lnr-chevron-up"></i>
      </div>
      {/* <!-- /Scroll To Top Button --> */}

      <div className="page-scroll">
        <div
          id="page_container"
          className="page-container bg-move-effect"
          data-animation="transition-flip-in-right"
        >
          <Header></Header>
          <MainHome></MainHome>
          <Footer></Footer>
        </div>
      </div>
    </Layout>
  );
}
