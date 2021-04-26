import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>Raffo Automotores</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Automotores Pablo Raffo Maipu Compra Venta Autos Usados"
        />

        <meta name="author" content="Gino Pietrobon" />
      </Head>
      <Layout>
        <div className="flex">
          <h1 className=" w-full md:w-2/3 text-center text-secundary text-2xl md:text-3xl uppercase font-bold mt-16 ml-2 mb-5 md:ml-24">
            ¡Encontrá un auto para vos!
          </h1>
        </div>
        <div className="flex mb-4 flex-wrap-reverse md:flex-wrap mx-auto my-auto">
          <div className="flex flex-col w-4/5 md:w-2/5 my-10 ml-8 md:ml-24  mt-8">
            <div className="space-y-4 text-secundary text-lg">
              <p>
                En esta página encontrarás varios tipos de vehículos a la{" "}
                <strong>VENTA</strong>.
              </p>
              <p>
                También podés contactar con migo para vender tu auto y que sea
                visible.
              </p>
              <p>
                Los autos están divididos en diferentes secciones. Esta página
                web es muy rápida así que podés navegar tranquilo.
              </p>

              <Link href="/autos">
                <div className="flex justify-center">
                  <button className="uppercase text-lg hover:bg-primary hover:text-secundary rounded-md bg-secundary text-lightSilver1 mt-2 p-2 font-bold">
                    Ver Autos
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-auto items-center justify-center align-middle max-h-72 max-w-72 mr-6 ">
            <img
              className="flex my-auto"
              src="logo.png"
              alt="img"
              width="500"
              height="300"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
