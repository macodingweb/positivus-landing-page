import SectionTitle from "./ui/SectionTitle"
import { CaseStudiesCards } from "@/constants/home";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section className="case-studies py-6 px-7 container mx-auto">
      <SectionTitle title="Case Studies" desc="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" />

      {/* Case Studies Cards */}
    <div className="card-group grid grid-cols-3 gap-8 bg-slate-950 rounded-[18px] max-lg:grid-cols-2 max-md:grid-cols-1">
      { CaseStudiesCards.map((ele, index) => (
        <div className="card p-10 max-lg:p-8 flex flex-col justify-between" key={index}>
          <p className="mb-8 text-slate-200">{ ele.text }</p>
          <Link href={ele.url} className="text-[#b9ff66] flex items-center gap-4 transition-all hover:underline">
            Learn More
            <GoArrowRight size={24} />
          </Link>
        </div>
      )) }
    </div>

    </section>
  )
}