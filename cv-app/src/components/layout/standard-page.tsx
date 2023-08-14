import Head from "next/head";
import Header from "@/components/layout/header";
import Layout from "@/components/layout/layout";
import PageScrollLayout from "@/components/theme-components/page-scroll-layout";
import ScrollToTop from "@/components/theme-components/scroll-to-top";
import AnimatedBg from "../theme-components/animated-bg";
import Footer from "./footer";

export default function StandardPage({
  children,
}: {
  children: React.ReactNode;
}) {
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
        {children}
        <Footer></Footer>
      </PageScrollLayout>
    </Layout>
  );
}
