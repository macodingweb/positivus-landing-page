'use client';

import Image from "next/image";
import { NavLinks } from "@/constants/navbar";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";

export default function Navbar() {
  const [exchange, setExchange] = useState(false);

  return (
    <nav className="container mx-auto relative z-[1000] py-6 px-7 flex items-center justify-between max-lg:w-full bg-white">
      {/* Logo */}
      <Image src={"/logo.png"} alt="Logo" width={120} height={0} className="logo" />

      {/* Exchange Btn */}
      <button className="exchange-btn hidden max-lg:block" onClick={() => setExchange(!exchange)}>
        { exchange ? <CgMenuRight size={28} className="text-black" /> : <IoMenu size={28} className="text-black" /> }
      </button>

      {/* Right Side Of The Navbar */}
      <div className={`right-side flex items-center gap-6 max-lg:absolute max-lg:z-[50] max-lg:flex-col-reverse transition-all ${ exchange ? 'max-lg:top-[100%]' : 'max-lg:top-[-525%]' } max-lg:right-0 max-lg:w-full max-lg:bg-slate-900 max-lg:py-5 max-lg:rounded-[12px] max-lg:shadow-md`}>
        <ul className="main-list flex items-center gap-2 max-lg:flex-col">
          { NavLinks.map((ele, index) => (
            <li className="list-item py-3 cursor-pointer px-5 border-solid border-0 border-transparent border-b-[3px] transition-all hover:border-b-slate-900 max-lg:text-white max-lg:hover:border-b-white" key={index}>
              <Link href={ele.url}>{ele.text}</Link>
            </li>
          )) }
        </ul>
        <button type="button" className="request-a-quote px-5 py-4 border-solid border-[1px] rounded-[16px] cursor-pointer transition-all border-slate-900 hover:bg-slate-900 hover:text-white max-lg:text-white max-lg:border-white max-lg:hover:bg-white max-lg:hover:text-slate-900">Request a Quote</button>
      </div>

    </nav>
  );
}
