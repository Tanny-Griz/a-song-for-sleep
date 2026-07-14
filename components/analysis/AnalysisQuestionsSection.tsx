import { ClassificationFailureCard } from "@/components/analysis/ClassificationFailureCard";
import { ConsumerPredictionCard } from "@/components/analysis/ConsumerPredictionCard";
import { DataBeneficiariesCard } from "@/components/analysis/DataBeneficiariesSection";
import { InstitutionalPrivacyCard } from "@/components/analysis/InstitutionalPrivacyCard";
import { MemoryErasureCard } from "@/components/analysis/MemoryErasureCard";
import { OwnershipQuestionCard } from "@/components/analysis/OwnershipQuestionCard";
import { PrivateLifeResourceCard } from "@/components/analysis/PrivateLifeResourceCard";

export function AnalysisQuestionsSection() {
  return (
    <section className="border-b border-[#d7e1e9] bg-[#f4f7fa] px-5 py-[var(--section-padding-y)] sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 xl:hidden">
        <OwnershipQuestionCard />
        <DataBeneficiariesCard />
        <PrivateLifeResourceCard />
        <ConsumerPredictionCard />
        <ClassificationFailureCard />
        <InstitutionalPrivacyCard />
        <MemoryErasureCard />
      </div>

      <div className="mx-auto hidden max-w-7xl gap-6 xl:grid xl:grid-cols-2 xl:items-start">
        <div className="grid gap-6">
          <OwnershipQuestionCard />
          <PrivateLifeResourceCard />
          <ClassificationFailureCard />
          <MemoryErasureCard />
        </div>
        <div className="grid gap-6">
          <DataBeneficiariesCard />
          <ConsumerPredictionCard />
          <InstitutionalPrivacyCard />
        </div>
      </div>
    </section>
  );
}
