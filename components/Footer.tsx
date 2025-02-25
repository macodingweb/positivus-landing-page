import { SocialLinks } from "@/constants/home"
import { NavLinks } from "@/constants/navbar"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <section className="footer container mx-auto p-10 bg-slate-900 rounded-t-[32px] mt-[120px]">
      <nav className="navbar flex items-center justify-between max-lg:flex-col mb-8">
        <div className="logo">
          <Image src={"/logo-light.png"} alt="Logo Light" width={120} height={120} />
        </div>
        <ul className="main-list flex items-center gap-2 max-lg:w-full justify-center max-lg:my-5 max-lg:flex-wrap">
          { NavLinks.map((ele, index) => (
            <li className="list-item text-white py-3 cursor-pointer px-5 border-solid border-0 border-transparent border-b-[3px] transition-all hover:border-b-white" key={index}>
              <Link href={ele.url}>{ele.text}</Link>
            </li>
          )) }
        </ul>
        <div className="social-links flex items-center gap-3">
          { SocialLinks.map((ele, index) => (
            <Link href={ele.url} className="social-link p-1 text-slate-900 bg-white rounded-full" key={index}>{ele.icon}</Link>
          )) }
        </div>
      </nav>
      <div className="middle-side flex items-center justify-between text-white max-lg:flex-col">
        <div className="contact-us-info grid max-lg:mb-5">
          <span className="title px-2 bg-[#b9ff66] text-slate-900 rounded-[4px] mb-5 w-fit">Contact us:</span>
          <span className="mb-6">Email: info@positivus.com</span>
          <span className="mb-6">Phone: 555-567-8901</span>
          <div className="address grid gap-1">
            <span>Address: 1234 Main St</span>
            <span>Moonstone City, Stardust State 12345</span>
          </div>
        </div>
        <form className="recieve-emails p-12 rounded-[26px] max-md:flex-col max-lg:w-full max-lg:p-8 bg-slate-800 flex items-center gap-3">
          <input type="email" name="email" className="py-3 px-5 max-md:w-full bg-transparent border-2 border-solid rounded-[12px] placeholder-white text-white border-white" placeholder="Email" />
          <input type="submit" value="Subscribe to news" className="py-3 max-md:w-full bg-[#b9ff66] text-slate-900 rounded-[8px] px-8 transition-all cursor-pointer border-solid border-2 border-transparent hover:bg-transparent hover:text-[#b9ff66] hover:border-[#b9ff66]" />
        </form>
      </div>
      <div className="line my-10 h-0.5 w-full bg-slate-500"></div>
      <span className="copyrights text-slate-100">&copy;2025 Positivus; All copyrights reserved</span>
    </section>
  )
}