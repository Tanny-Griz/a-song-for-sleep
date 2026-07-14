import { AnalysisKeyIdea } from "@/components/analysis/AnalysisKeyIdea";
import {
  FileWarning,
  Landmark,
  LockKeyhole,
  Trash2
} from "lucide-react";

const privacyForces = [
  {
    title: "The institution defines what must be shared",
    description:
      "Residents are expected to sync personal information with the building.",
    Icon: Landmark,
    tone: "green"
  },
  {
    title: "The system controls access",
    description:
      "Technology decides what data can be viewed, blocked, or used.",
    Icon: LockKeyhole,
    tone: "blue"
  },
  {
    title: "Privacy returns only under pressure",
    description:
      "Management acts most quickly when legal and financial risk appear.",
    Icon: FileWarning,
    tone: "violet"
  },
  {
    title: "Institutions decide what is erased",
    description:
      "Data can be deleted, restricted, or retained by systems beyond the resident's control.",
    Icon: Trash2,
    tone: "teal"
  }
];

const toneStyles = {
  blue: "bg-[#e3eef8] text-[#2d6ea3]",
  green: "bg-[#e4f1ec] text-[#3f8a73]",
  teal: "bg-[#e1f0f1] text-[#4b8e99]",
  violet: "bg-[#ece7f5] text-[#715aa7]"
};

export function InstitutionalPrivacyCard() {
  return (
    <article className="promise-card rounded-xl border border-[#d7e1e9] bg-white/76 p-6 shadow-[0_18px_70px_rgba(28,70,105,0.08)] backdrop-blur sm:p-8">
      <div className="grid gap-5 sm:grid-cols-[4rem_1fr]">
        <div className="grid size-14 place-items-center rounded-full bg-[#2d6ea3] font-serif text-3xl font-semibold text-white shadow-[0_12px_30px_rgba(45,110,163,0.25)]">
          6
        </div>
        <div>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#07111f]">
            How Does Institutional Power Affect Privacy?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#34485b]">
            Privacy in the story is shaped less by personal choice than by
            institutional control.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {privacyForces.map(({ title, description, Icon, tone }) => (
          <div
            className="grid gap-4 rounded-lg border border-[#cfdde8] bg-[#f8fbfd] p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#b9cedd] hover:bg-white sm:grid-cols-[4.25rem_1fr] sm:items-center"
            key={title}
          >
            <div
              className={[
                "grid size-16 place-items-center rounded-full",
                toneStyles[tone as keyof typeof toneStyles]
              ].join(" ")}
            >
              <Icon aria-hidden="true" className="size-9" strokeWidth={1.45} />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold leading-tight text-[#07111f]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#34485b]">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <AnalysisKeyIdea>
        The resident produces the data, but the institution controls its life
        cycle.
      </AnalysisKeyIdea>
    </article>
  );
}
