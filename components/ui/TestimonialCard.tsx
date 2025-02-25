interface CardTypes {
  name: string,
  job: string,
  content: string
}

export default function TestimonialCard({ name, job, content } : CardTypes) {
  return (
    <div className="card w-[500px] select-none max-lg:w-[300px] max-md:w-[250px]">
      <div className="content p-6 relative text-slate-200 rounded-[36px] border-solid border-2 border-[#b9ff66]">
        {content}
        <div 
            className="absolute -bottom-4 left-[30px] w-0 h-0 
            border-l-[16px] border-l-transparent
            border-t-[16px] border-t-white
            border-r-[16px] border-r-transparent"
          >
        </div>
      </div>
      <div className="info grid p-6 ml-10 max-lg:ml-2">
        <span className="font-bold text-[#b9ff66]">{name}</span>
        <span className="text-slate-100">{job}</span>
      </div>
    </div>
  )
}
