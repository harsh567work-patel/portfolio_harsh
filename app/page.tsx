import { HeroSection } from "@/sections/HeroSection";
import { ProjectIndex } from "@/components/projects/ProjectIndex";
import { ThesisStatement } from "@/components/thesis/ThesisStatement";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="bg-[#f7f5f0] text-[#111111]">
      <HeroSection />
      <ThesisStatement />
      <ProjectIndex />
      <About />
      <Contact />
    </div>
  );
}
