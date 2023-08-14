import AnimatedBg from "@/components/animated-bg";
import Footer from "@/components/footer";
import Head from "next/head";
import Header from "@/components/header";
import Layout from "@/components/layout";
import MainHome from "@/components/main-home";
import PageScrollLayout from "@/components/theme-components/page-scroll-layout";
import ScrollToTop from "@/components/scroll-to-top";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>jrodriguezweb.it</title>
      </Head>

      <AnimatedBg></AnimatedBg>

      {/* <Preload></Preload> */}
      <ScrollToTop></ScrollToTop>

      <PageScrollLayout>
        <Header></Header>
        <MainHome></MainHome>
        <Footer></Footer>
      </PageScrollLayout>
    </Layout>
  );
}
