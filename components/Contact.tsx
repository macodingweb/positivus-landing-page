import SectionTitle from "./ui/SectionTitle";
import { formInputs } from "@/constants/home";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="contact-us py-6 px-7 container mx-auto">
      <SectionTitle title={"Contact Us"} desc={"Connect with Us: Let's Discuss Your Digital Marketing Needs"} />
      <form className="contct-us-form overflow-hidden relative p-8 bg-gray-200 rounded-[32px] flex items-center justify-between">
        <div className="left w-[500px]">
          <div className="checkbox-group flex items-center gap-5 mb-10">
            <div className="checkbox flex items-center gap-2">
              <input type="radio" name="same" className="w-[25px] h-[25px] rounded-full border-solid border-[1px] border-slate-900" id="say-hi" checked />
              <label htmlFor="say-hi">Say, Hi</label>
            </div>
            <div className="checkbox flex items-center gap-2">
              <input type="radio" name="same" className="w-[25px] h-[25px] rounded-full border-solid border-[1px] border-slate-900" id="get-a-quote" />
              <label htmlFor="get-a-quote">Get a Quote</label>
            </div>
          </div>
          { formInputs.map((ele, index) => (
            <div className="form-group grid gap-2 mb-5" key={index}>
              <label htmlFor={ele.name} className="form-label">{ ele.label }</label>
              <input type={ele.Inptype} className="py-3 px-6 w-full border-solid border-2 border-slate-900 rounded-[12px]" placeholder={ele.placeHolder} id={ele.name} name={ele.name} />
            </div>
          )) }
          <div className="form-group grid gap-2 mb-5">
            <label htmlFor="message" className="form-label">Message*</label>
            <textarea placeholder="Message" className="py-3 px-6 w-full border-solid resize-none border-2 border-slate-900 rounded-[12px]" name="message" id="message" rows={5}></textarea>
          </div>
          <input type="submit" value="Send Message" className="form-submit px-14 py-4 bg-slate-900 text-white rounded-[12px] w-full cursor-pointer transition-all hover:bg-[#b9ff66] hover:text-slate-900 hover:scale-[105%]" />
        </div>
        <div className="right">
          <div className="img w-[500px] h-[500px] relative max-lg:w-[350px] max-md:hidden">
            <Image src={"/contact-us-img.png"} width={500} height={300} alt="Contact US" className="absolute right-[-55%] top-2/4 -translate-y-2/4"  />
          </div>
        </div>
      </form>
    </section>
  )
}