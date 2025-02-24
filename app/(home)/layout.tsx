import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function HomeLayout({ children } : { children: ReactNode }) {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      { children }
    </main>
  )
}