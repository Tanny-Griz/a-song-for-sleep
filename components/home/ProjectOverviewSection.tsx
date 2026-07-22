import { Building2, Search, UserRound } from "lucide-react";

const overviewItems = [
  {
    eyebrow: "The Story",
    text: "A 93-year-old woman enters a building that cannot complete her profile.",
    Icon: UserRound
  },
  {
    eyebrow: "The Conflict",
    text: "Elevator-5 can collect fragments of her life but cannot fully understand her.",
    Icon: Building2
  },
  {
    eyebrow: "The Lens",
    text: "A Marxist reading of ownership, data, control, and human value.",
    Icon: Search
  }
];

export function ProjectOverviewSection({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#2d7f86]">
        Project Overview
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {overviewItems.map(({ eyebrow, text, Icon }, index) => (
          <article
            className="promise-card group grid gap-4 rounded-xl border border-white/70 bg-white/48 p-4 shadow-[0_18px_55px_rgba(28,70,105,0.13)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/62 sm:grid-cols-[3.5rem_1fr_auto] sm:items-center"
            key={eyebrow}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="grid size-12 place-items-center rounded-full border border-[#cfe0e5] bg-white/72 text-[#2d8b90] shadow-sm">
              <Icon aria-hidden="true" className="size-6" strokeWidth={1.45} />
            </div>
            <div>
              <h2 className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#2d7f86]">
                {eyebrow}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#34485b]">
                {text}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="hidden text-2xl leading-none text-[#4f9fc4] transition duration-300 group-hover:translate-x-0.5 sm:block"
            >
              ›
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
