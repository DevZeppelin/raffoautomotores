import { Client } from "../../prismic-configuration";
import Layout from "../../components/Layout";
import Head from "next/head";
import SlugLayout from "../../components/SlugLayout";

export default function MotoSlug({ article }) {
  return (
    <div>
      <Head>
        <title>Raffo Automotores - Motos</title>
      </Head>
      <Layout>
        <SlugLayout article={article}/>
      </Layout>
    </div>
  );
}

// this gets called on each request

export async function getServerSideProps(context) {
  const article = await Client().getByUID("car", context.query.moto);

  return {
    props: {
      article: article,
    },
  };
}
