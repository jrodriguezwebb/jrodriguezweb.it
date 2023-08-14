import AnimatedBg from "@/components/theme-components/animated-bg";
import Footer from "@/components/layout/footer";
import Head from "next/head";
import Header from "@/components/layout/header";
import Layout from "@/components/layout";
import PageScrollLayout from "@/components/theme-components/page-scroll-layout";
import ScrollToTop from "@/components/theme-components/scroll-to-top";
import Home from "@/components/home";

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
        <Home></Home>
        <Footer></Footer>
      </PageScrollLayout>
    </Layout>
  );
}
