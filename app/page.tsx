import { BuildingKnowsSection } from "@/components/home/BuildingKnowsSection";
import { Hero } from "@/components/home/Hero";
import { PromiseSection } from "@/components/home/PromiseSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f4f7fa] text-[#07111f]">
      <Hero />
      <PromiseSection />
      <BuildingKnowsSection />
    </main>
  );
}
