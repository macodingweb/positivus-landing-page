import { TeamCardsValues } from "@/constants/home";
import SectionTitle from "./ui/SectionTitle";
import TeamCard from "./ui/TeamCard";

export default function Team() {
  return (
    <section className="team py-6 px-7 container mx-auto">
      <SectionTitle
        title="Team"
        desc="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <div className="cards gap-8 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        {TeamCardsValues.map((ele, index) => (
          <TeamCard key={index} imgUrl={ele.imgUrl} name={ele.name} work={ele.job} desc={ele.desc} />
        ))}
      </div>
      <button className="see-all-team block ml-auto px-14 py-4 bg-slate-900 text-white mt-12 rounded-[12px] transition-all hover:bg-[#b9ff66] hover:scale-[105%] hover:text-slate-900">See All Team</button>
    </section>
  );
}
