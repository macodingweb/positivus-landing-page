import Image from "next/image";

export default function Landing() {
  return (
    <section className="landing py-6 px-7 flex items-center justify-between container mx-auto max-lg:flex-col-reverse">

      {/* Left Side */}
      <div className="left max-lg:flex max-lg:flex-col max-lg:items-center">
        <h1 className="title text-[64px] max-lg:text-[38px] max-lg:text-center font-semibold text-black grid leading-[1.4] mb-6">
          <span>Navigating the</span>
          <span>digital landscape</span>
          <span>for success</span>
        </h1>
        <p className="desc text-[22px] text-slate-700 leading-[1.7] max-lg:text-center w-[600px] mb-6 max-lg:w-full">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button type="button" className="px-8 py-4 bg-slate-900 text-white rounded-[12px] border-2 border-solid border-transparent transition-all hover:border-slate-900 hover:bg-transparent hover:text-slate-900">Book a consultation</button>
      </div>

      {/* Right Side */}
      <div className="right w-[500px] max-lg:w-[320px]">
        <Image src={"/Illustration.png"} width={500} height={0} alt="Landing Img" />
      </div>

    </section>
  );
}
