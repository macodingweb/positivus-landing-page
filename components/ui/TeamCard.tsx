import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

interface TeamTypes {
  imgUrl: string,
  name: string,
  work: string,
  desc: string,
}

export default function TeamCard({ imgUrl, name, work, desc } : TeamTypes) {
  return (
    <div className="card p-8 transition-all hover:-translate-y-2 bg-slate-50 rounded-[28px] border-solid border-[1px] border-slate-950 shadow-card">
      <div className="info flex gap-4 w-full max-md:flex-col">
        <div className="img">
          <Image src={imgUrl} alt={name} width={120} height={120} />
        </div>
        <div className="details flex flex-col justify-between w-full">
          <div className="linked-in flex bg-slate-950 text-[#b9ff66] w-fit p-2 rounded-full ml-auto">
            <FaLinkedinIn />
          </div>
          <div className="name-work flex flex-col items-start">
            <span className="text-[18px] font-bold">{name}</span>
            <span>{work}</span>
          </div>
        </div>
      </div>
      <div className="line my-4 w-full h-[2px] bg-slate-500"></div>
      <p>{desc}</p>
    </div>
  )
}