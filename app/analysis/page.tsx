import { AnalysisHero } from "@/components/analysis/AnalysisHero";
import { OwnershipQuestionCard } from "@/components/analysis/OwnershipQuestionCard";

export default function AnalysisPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fa] text-[#07111f]">
      <AnalysisHero />
      <OwnershipQuestionCard />
    </main>
  );
}
