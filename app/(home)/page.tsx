import Landing from "@/components/Landing";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import { sponsers } from "@/constants/home";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Landing />
      {/* Sponsers */}
      <div className="sponsers py-6 px-7 mb-[100px] max-lg:px-9 my-8 flex items-center justify-between flex-wrap gap-4 container mx-auto">
        { sponsers.map((ele, index) => (
          <div className="sponser" key={index} title={ele.title}>
            <Image src={ele.imgUrl} alt={ele.title} width={120} height={120} className="grayscale" />
          </div>
        )) }
      </div>
      <Services />
      <CaseStudies />
    </>
  )
}