export default function SectionTitle({ title, desc } : { title: string, desc: string }) {
  return (
    <div className="title-container flex items-center gap-8 max-lg:flex-col max-lg:text-center mb-14">
      <div className="title px-2 rounded-[8px] text-black text-[32px] font-bold bg-[#b9ff66] w-fit">{ title }</div>
      <p className="w-[550px] max-md:w-full">{desc}</p>
    </div>
  )
}