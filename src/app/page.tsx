import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { SignalPath } from "@/components/sections/SignalPath";
import { Journey } from "@/components/sections/Journey";
import { Work } from "@/components/sections/Work";
import { Philosophy } from "@/components/sections/Philosophy";
import { Certifications } from "@/components/sections/Certifications";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <SignalPath />
      <Journey />
      <Work />
      <Philosophy />
      <Certifications />
      <GitHubSection />
      <Contact />
      <Footer />
    </>
  );
}
