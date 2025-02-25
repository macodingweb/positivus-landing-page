"use client";

import SectionTitle from "./ui/SectionTitle";
import TestimonialCard from "./ui/TestimonialCard";
import { TestimonialsCards } from "@/constants/home";
import { useRef, useState } from "react";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null); // ✅ تحديد نوع المرجع
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // ✅ تصحيح التعامل مع MouseEvent و TouchEvent
  const startDrag = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);

    if ("touches" in e) {
      setStartX(e.touches[0].pageX);
    } else {
      setStartX((e as React.MouseEvent<HTMLDivElement>).pageX);
    }

    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onDrag = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();

    let x: number;
    if ("touches" in e) {
      x = e.touches[0].pageX;
    } else {
      x = (e as React.MouseEvent<HTMLDivElement>).pageX;
    }

    const walk = (x - startX) * 2; // سرعة السحب
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  return (
    <section className="tesimonials py-6 px-7 container mx-auto">
      <SectionTitle
        title="Testimonials"
        desc="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />
      <div className="cards flex overflow-hidden items-center justify-center w-full p-10 bg-slate-900 rounded-[32px]" ref={scrollRef}
          onMouseDown={startDrag}
          onMouseMove={onDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={startDrag}
          onTouchMove={onDrag}
          onTouchEnd={stopDrag}>
        <div
          className="custome-content flex items-center justify-center gap-14"
          
        >
          {TestimonialsCards.map((ele, index) => (
            <TestimonialCard
              key={index}
              name={ele.name}
              job={ele.job}
              content={ele.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
