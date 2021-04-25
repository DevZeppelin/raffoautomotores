import { RichText } from "prismic-reactjs";
import Link from "next/link";


export default function SlugLayout({ article }) {
  return (
    <div className="w-5/6 md:w-2/3 text-center mx-auto">
      <h1 className=" text-xl md:text-3xl uppercase font-bold opacity-50 my-10">
        {RichText.render(article.data["title"])}
      </h1>
      <img
        className="shadow-xl mb-10 md:mb-20 mx-auto"
        src={article.data["foto1"].url}
        alt="image"
      />
      <img
        className="shadow-xl mb-10 md:mb-20 mx-auto"
        src={article.data["foto2"].url}
        alt="image"
      />
      <img
        className="shadow-xl mb-10 md:mb-20 mx-auto"
        src={article.data["foto3"].url}
        alt="image"
      />
      <div className="text-base md:text-lg opacity-75 space-y-2 md:space-y-4">
        {RichText.render(article.data["texto"])}
      </div>
      <Link href="/" >
        <button className="bg-secundary text-lightSilver2 py-3 px-10 my-4 text-lg uppercase">
          {" "}
          Back &nbsp; 👈
        </button>
      </Link>
    </div>
  );
}
