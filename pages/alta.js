import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";

export default function Alta({autos}) {
  return (
    <div>
      <Head>
        <title>Raffo Automototres - Autos Gama Alta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <BlogLayout tag="alta" title="Gama Alta" autos={autos} />          
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
    const autos = await Client().query(
      Prismic.Predicates.at("document.tags", ["alta"])
    );
      
    return {
      props: {
        autos: autos,       
      },
    };
  }
 
