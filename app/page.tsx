import { BuildingKnowsSection } from "@/components/home/BuildingKnowsSection";
import { CriticalLensSection } from "@/components/home/CriticalLensSection";
import { Hero } from "@/components/home/Hero";
import { HumanDataProfileSection } from "@/components/home/HumanDataProfileSection";
import { IncompleteProfileSection } from "@/components/home/IncompleteProfileSection";
import { PromiseSection } from "@/components/home/PromiseSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f4f7fa] text-[#07111f]">
      <Hero />
      <PromiseSection />
      <BuildingKnowsSection />
      <IncompleteProfileSection />
      <HumanDataProfileSection />
      <CriticalLensSection />
    </main>
  );
}
