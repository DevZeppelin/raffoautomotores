import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";

export default function Otros({autos}) {
  return (
    <div>
      <Head>
        <title>Raffo Automototres - Otros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <BlogLayout tag="otros" title="Otros" autos={autos} />          
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
    const autos = await Client().query(
      Prismic.Predicates.at("document.tags", ["otros"])
    );
      
    return {
      props: {
        autos: autos,       
      },
    };
  }
 
