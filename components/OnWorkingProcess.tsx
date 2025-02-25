import { AccordionItemCard } from "@/constants/home";
import AccordingCard from "./ui/AccordingCard";
import SectionTitle from "./ui/SectionTitle";

export default function OnWorkingProcess() {
  return (
    <section className="on-working-process py-6 px-7 container mx-auto">
      <SectionTitle title="Our Working Process" desc="Step-by-Step Guide to Achieving Your Business Goals" />
      <div className="cards flex flex-col gap-4">
        { AccordionItemCard.map((ele, index) => (
          <AccordingCard key={index} number={ele.number} title={ele.title} content={ele.content} />
        )) }
      </div>
    </section>
  )
}