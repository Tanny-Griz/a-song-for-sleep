import { AnalysisHero } from "@/components/analysis/AnalysisHero";
import { AnalysisQuestionsSection } from "@/components/analysis/AnalysisQuestionsSection";

export default function AnalysisPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fa] text-[#07111f]">
      <AnalysisHero />
      <AnalysisQuestionsSection />
    </main>
  );
}
