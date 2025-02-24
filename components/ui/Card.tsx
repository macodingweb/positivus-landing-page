import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

export default function Card({ ...pageProps }) {
  return (
    <div className={`card transition-all flex items-center p-8 max-lg:p-5 justify-between rounded-[24px] shadow-card border-solid border-[1px] border-slate-900 ${pageProps.bg} hover:-translate-y-2`}>
      <div className="info flex flex-col justify-between h-full">
        <div className="title grid max-lg:mb-10">
          { pageProps.title.length > 0 ? pageProps.title.map((ele: string, index: number) => (
            <span key={index} className={`${pageProps.text} text-[22px] max-lg:text-[16px] font-semibold rounded-[6px] px-2 w-fit`}>{ele}</span>
          )) : "UnKnown" }
        </div>
        <div className="learn-more flex items-center gap-5">
          <div className={`${pageProps.bg == "bg-slate-950" ? "bg-white text-slate-900" : "bg-slate-950 text-[#b9ff66]"} cursor-pointer transition-all hover:-translate-y-1 rounded-full p-2 flex items-center justify-center`}>
            <FiArrowUpRight size={20} />
          </div>
          <span className={`${pageProps.bg == "bg-slate-950" ? "text-white" : "text-slate-900"}`}>Learn More</span>
        </div>
      </div>
      <div className="img w-[200px] max-md:w-[120px]">
        <Image src={pageProps.imgUrl} alt="" width={300} height={0} />
      </div>
    </div>
  )
}