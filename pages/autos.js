import Head from "next/head";
import Layout from "../components/Layout";
import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import BlogLayout from "../components/BlogLayout";

export default function Autos({autos}) {
  return (
    <div>
      <Head>
        <title>Raffo Automotores - Todos los autos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <BlogLayout tag="auto" title="Autos" autos={autos} />          
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
    const autos = await Client().query(
      Prismic.Predicates.at("document.tags", ["auto"])
    );     
    
    return {
      props: {
        autos: autos        
      },
    };
  }
 
