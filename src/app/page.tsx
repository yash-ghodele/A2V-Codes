import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Positioning } from "@/components/landing/Positioning";
import { Authority } from "@/components/landing/Authority";
import { Mentors } from "@/components/landing/Mentors";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { LeadMagnet } from "@/components/landing/LeadMagnet";
import { Education } from "@/components/landing/Education";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      <Hero />
      <Problem />
      <Positioning />
      <Authority />
      <Mentors />
      <Features />
      <HowItWorks />
      <Pricing />
      <LeadMagnet />
      <Education />
      <FinalCTA />
      <Footer />
    </main>
  );
}
