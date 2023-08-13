import Head from "next/head";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <main>
        <p>Hello world</p>
      </main>
    </Layout>
  );
}
