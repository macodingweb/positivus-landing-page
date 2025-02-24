import SectionTitle from "./ui/SectionTitle";
import { servicesCards } from "@/constants/home";
import Card from "./ui/Card";
import Image from "next/image";

export default function Services() {
  return (
    <section className="services py-6 px-7 container mx-auto">
      <SectionTitle title={"Services"} desc={"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"} />
      <div className="services grid grid-cols-2 gap-6 max-lg:grid-cols-1">
        { servicesCards.map((ele, index) => (
          <Card title={ele.title} imgUrl={ele.imgUrl} key={index} bg={ele.bg} text={ele.text} />
        )) }
      </div>
      <div className="alert relative gap-6 my-14 p-8 bg-slate-100 rounded-[24px] max-lg:flex-col-reverse flex items-center justify-between">
        {/* Left Side */}
        <div className="left max-lg:flex max-lg:flex-col max-lg:items-center">
          <h1 className="title text-[28px] max-lg:text-[20px] max-lg:text-center font-semibold text-black grid leading-[1.4] mb-6">{"Let'"}s make things happen</h1>
          <p className="desc text-[16px] text-slate-700 leading-[1.7] max-lg:text-center w-[600px] mb-6 max-lg:w-full">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button type="button" className="px-5 py-4 text-[14px] bg-slate-900 text-white rounded-[12px] border-2 border-solid border-transparent transition-all hover:border-slate-900 hover:bg-transparent hover:text-slate-900">Book a consultation</button>
        </div>
        <div className="right">
          <div className="img w-[200px] block h-full">
            <Image src={"/service-img-7.png"} width={300} height={0} alt="Service Img" className="absolute -top-8 right-8 max-lg:relative max-lg:right-0 max-lg:top-0" />
          </div>
        </div> 
      </div>
    </section>
  );
}
