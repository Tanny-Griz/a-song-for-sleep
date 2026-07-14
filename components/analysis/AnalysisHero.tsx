import Image from "next/image";
import { Check } from "lucide-react";

const marxistQuestions = [
  "Who owns and controls the system?",
  "Who benefits from collected information?",
  "How does private life become a resource?",
  "How is consumer behavior predicted?",
  "What happens when a person cannot be classified?",
  "How does institutional power affect privacy?",
  "What happens when memory is erased?",
  "What makes a person valuable when they can no longer produce useful data?"
];

export function AnalysisHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#d7e1e9] bg-[#f7f9fb] px-5 pb-[var(--section-padding-y)] pt-[calc(var(--section-padding-y)+4rem)] sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.72),rgba(238,245,251,0.74))]" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
        <div className="promise-reveal max-w-5xl">
          <h1 className="font-serif text-[clamp(4rem,18vw,6.7rem)] leading-[0.82] text-[#07111f] sm:text-[clamp(5.5rem,11vw,7.8rem)] lg:text-[clamp(5.8rem,8vw,8.8rem)]">
            Marxist Analysis
          </h1>
          <p className="mt-7 max-w-4xl text-xl leading-8 tracking-[0.08em] text-[#4f7897] sm:text-2xl sm:leading-10">
            Who Owns a Human Life? A Marxist reading of Bora Chung&apos;s{" "}
            <span className="italic">“A Song for Sleep.”</span>
          </p>

          <div className="mt-8 h-px w-24 bg-[#4f9fc4]">
            <div className="h-px w-10 translate-y-2 bg-[#b7c8d5]" />
          </div>

          <p className="mt-9 max-w-4xl text-base leading-8 text-[#34485b] sm:text-lg">
            In a smart building where every trace becomes data, the resident&apos;s
            life is fragmented, predicted, and monetized. Through a Marxist
            lens, this analysis reveals how Elevator-5 turns daily living into
            labor, and how the incomplete profile of Resident 5305 resists total
            extraction.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="relative hidden justify-center lg:flex">
            <div className="absolute inset-y-[-2.5rem] left-1/2 border-l border-dashed border-[#4f89ad]/70" />
            <div className="profile-orbit relative grid size-56 place-items-center rounded-full border border-[#d5e2eb] bg-white/40">
              <div className="relative size-36 overflow-hidden rounded-full border-4 border-[#a8c4db] bg-[#d9e5ed] shadow-[0_18px_55px_rgba(28,70,105,0.18)]">
                <Image
                  src="/images/acc.png"
                  alt="Portrait of the elderly tenant represented inside a circular profile scan."
                  fill
                  sizes="144px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <aside className="promise-card rounded-lg border border-[#d0dce7] bg-white/78 p-6 shadow-[0_18px_55px_rgba(28,70,105,0.08)] backdrop-blur sm:p-7">
            <h2 className="font-serif text-3xl font-semibold text-[#07111f]">
              Marxist Questions Addressed
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {marxistQuestions.map((question) => (
                <li
                  className="grid grid-cols-[1.35rem_1fr] gap-3 text-sm leading-6 text-[#34485b]"
                  key={question}
                >
                  <span className="mt-0.5 grid size-5 place-items-center rounded-full bg-[#4da99f] text-white">
                    <Check aria-hidden="true" className="size-3.5" strokeWidth={2.4} />
                  </span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
