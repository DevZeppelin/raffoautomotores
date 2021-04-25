import React, { useState } from "react";

import { FiSearch, FiMail } from "react-icons/fi";
import { GiHamburgerMenu, GiCarKey, GiCarWheel } from "react-icons/gi";
import { FaWhatsapp, FaFacebook, FaCar  } from "react-icons/fa"
import Link from "next/link";


export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div>
      <div className="px-2 w-screen md:px-24 bg-secundary text-lightSilver1 flex justify-between h-16">
        <Link href="/">
          <a className="text-lightSilver2 text-2xl flex align-baseline px-2 md:px-10 my-auto hover:text-lightSilver1">
            <FaCar className="inline text-4xl mr-4" /> Raffo Automotores
          </a>
        </Link>

        <div className="hidden md:flex items-center w-1/3 text-lg">
          <input
            type="text"
            className="bg-transparent border-b w-full border-lightSilver1 outline-none"
          />
          <FiSearch className="ml-8 text-2xl hover:text-lightSilver2 cursor-pointer" />
        </div>

        <div className="hidden md:flex items-center text-2xl">
          <GiCarKey className="mr-2 cursor-pointer hover:text-lightSilver2" />
          <GiCarWheel className="mr-2 cursor-pointer hover:text-lightSilver2" />
        </div>

        <div className="p-2 md:p-4 md:hidden flex justify-center w-10 text-2xl">
          <button onClick={toggleNav}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      <div
        className="absolute z-20 right-0 bg-secundary text-lightSilver1 w-1/2"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="flex text-right flex-col text-base p-2 text-lightSilver2 divide-y mb-5">
          <Link href="/">
            <a className="mr-2  mt-2 px-5 border-b-2 border-transparent hover:border-secundary">
              Home
            </a>
          </Link>
          <Link href="/autos">
            <a className="mr-2 mt-5 px-5 border-b-2 border-transparent hover:border-secundary">
              Todos los Autos
            </a>
          </Link>
          <Link href="/alta">
            <a className="mr-2 mt-5 px-5 border-b-2 border-transparent hover:border-secundary">
              Autos Gama Alta
            </a>
          </Link>
          <Link href="/baja">
            <a className="mr-2 mt-5 px-5 border-b-2 border-transparent hover:border-secundary">
              Autos Gama Baja
            </a>
          </Link>
          <Link href="/motos">
            <a className="mr-2 mt-5 px-5 border-b-2 border-transparent hover:border-secundary">
              Motos
            </a>
          </Link>
          <Link href="/otros">
            <a className="mr-2 mt-5 px-5 border-b-2 border-transparent hover:border-secundary">
              Otros
            </a>
          </Link>
          </div>          
      </div>

      <div className="hidden bg-primary font-bold md:flex px-2 md:px-24 bg-white border-b border-black text-base">
        <Link href="/">
          <a className="mr-10  mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Home
          </a>
        </Link>
        <Link href="/autos">
          <a className="mr-10 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Todos los Autos
          </a>
        </Link>
        <Link href="/alta">
          <a className="mr-10 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Autos Gama Alta
          </a>
        </Link>
        <Link href="/baja">
          <a className="mr-10 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Autos Gama Baja
          </a>
        </Link>
        <Link href="/motos">
          <a className="mr-10 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Motos
          </a>
        </Link>
        <Link href="/otros">
          <a className="mr-10 mt-5 px-3 border-b-2 border-transparent hover:border-black">
            Otros
          </a>
        </Link>
        
      </div>

      {children}

      <div className="bg-secundary text-lightSilver2 text-xl py-2 px-6 md:px-24 flex flex-col">
        
        <div className="flex space-x-5 md:space-x-10 mt-6 text-2xl md:text-4xl justify-center">
          
          <p className="text-2xl">
            Contacto:
          </p>
          
          
          <Link href="https://api.whatsapp.com/send?phone=5492613895142" target="_blank">            
          <button target="_blank" rel="noopener" alt="whatsapp-logo">
            <FaWhatsapp className="hover:text-green-700" />
            </button>
          </Link>

          <Link href="https://www.facebook.com/pablo.raffo.71">
          <button target="_blank" rel="noopener" alt="facebook-logo"> 
            <FaFacebook className="hover:text-blue-700" />
            </button>
          </Link>   

          <Link href="mailto:raffopabloandres@gmail.com">
           <button target="_blank" rel="noopener" alt="gmail-logo"> 
            <FiMail className="hover:text-red-600" />
            </button>
          </Link>
        </div>

        <div className="mt-10 text-sm">
          Raffo Automotores de Pablo Raffo. Página programada por Dev Zeppelin, de Gino Pietrobon. De Mendoza, Argentina. Todos los derechos reservados. &copy; &nbsp;{" "}
          {new Date().getFullYear()}
        </div>
      </div>

      <style jsx global>{`      
      
      :root {
        --silver-hard: #a1aab3;
        --silver-light: #bcc4cf;        
      }
      
      html {
        scroll-behavior: smooth;
        width: fit-content;
      }

      body {
        
        background: linear-gradient(
          90deg,
          var(--silver-hard) 0%,
          var(--silver-light) 50%,
          var(--silver-hard) 100%
        );
        
      }


    `}</style>

    </div>
  );
}
