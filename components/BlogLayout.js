import { RichText } from "prismic-reactjs";
import Link from "next/link";

export default function BlogLayout({ tag, title, autos, secundary }) {
  return (
    <div className="md:w-4/5">
      <div className="flex justify-center">
        <div className="flex flex-col ml-4 md:ml-24 mr-4 md:mr-20 text-center">
          <h1 className=" text-2xl font-bold md:text-3xl text-center my-8 mb-16">
            Sección {title}
          </h1>
          {autos.results.map((article, index) => (
            <div className=" mb-4 md:mb-10" key={article.uid}>
              <Link href={`autos/${article.uid}`}>
                <h1 className="bold uppercase text-xl md:text-2xl text-secundary font-bold cursor-pointer mb-4">
                  {RichText.render(article.data["title"])}
                </h1>
              </Link>

              <img
                className="w-2/3 flex  mx-auto border-gray-800 border-2"
                src={article.data["foto1"].url}
                alt="img"
              />

              <h1 className="mt-5 mb-6 px-4 text-2xl">
                <div className="flex justify-center font-bold">
                  $ {RichText.render(article.data["precio"])}
                </div>
              </h1>
              <h1 className="mt-5 mb-6 px-8">
                {" "}
                {RichText.render(article.data["preview"])}
              </h1>

              <hr className="mt-5 text-secundary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
