import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/sectionndivider";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main  className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
    </main>
  )
}
