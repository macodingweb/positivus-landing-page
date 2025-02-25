"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AccordionItem = ({ number, title, content } : { number: string, title: string, content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl my-2 shadow-card transition-all p-8 max-md:p-6 border-solid border-[1px] border-slate-900 ${
        isOpen ? "bg-lime-300" : "bg-white"
      }`}
    >
      <div
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-bold text-[36px] max-lg:text-[32px] max-md:text-[16px]">
          <span className="mr-5 max-md:mr-3 ">{number}</span>
          <span>{title}</span>
        </h3>
        <span className="text-xl max-lg:text-[16px]">{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {isOpen && (
        <div className="content-p">
          <div className="line w-full my-5 h-[2px] bg-slate-700"></div>
          <p className="mt-2 text-gray-700 border-t pt-2">{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
