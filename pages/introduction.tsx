import { IntroContainer } from "@/container/introduction";
import Layout from "@/container/maincontainer/layout";
import { Vendors } from "@/container/vendors";
import Head from "next/head";

const Intro = () => {
  return (
    <>
      <Head>
        <title>Valentina 2.0</title>
        <meta name="description" content="GET A VAL!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/valentina-small.png" />
      </Head>
      <Layout>
        <IntroContainer />
        <Vendors />
      </Layout>
    </>
  );
};

export default Intro;
