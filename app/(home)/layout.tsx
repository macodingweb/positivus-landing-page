import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function HomeLayout({ children } : { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      { children }
    </main>
  )
}