import { Lightbulb } from "lucide-react";
import type { ReactNode } from "react";

type AnalysisKeyIdeaProps = {
  children: ReactNode;
};

export function AnalysisKeyIdea({ children }: AnalysisKeyIdeaProps) {
  return (
    <div className="mt-7 grid gap-4 rounded-lg border border-[#cfdde8] bg-[#f8fbfd] p-5 sm:grid-cols-[3.5rem_1fr] sm:items-center">
      <Lightbulb
        aria-hidden="true"
        className="size-9 text-[#2d6ea3]"
        strokeWidth={1.5}
      />
      <p className="font-serif text-xl font-semibold leading-snug text-[#07111f]">
        {children}
      </p>
    </div>
  );
}
