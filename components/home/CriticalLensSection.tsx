import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Database,
  Heart,
  Landmark,
  Search
} from "lucide-react";

const lensCards = [
  {
    title: "Ownership",
    text: "The building’s owners control the system, while residents have little control over how their lives are monitored.",
    Icon: Landmark
  },
  {
    title: "Data as a Resource",
    text: "Private information becomes a resource used for profiling, prediction, and commercial benefit.",
    Icon: Database
  },
  {
    title: "Consumer Prediction",
    text: "Behavioral patterns allow the system to anticipate residents’ needs and influence future consumption.",
    Icon: BarChart3
  },
  {
    title: "Human Value",
    text: "The system measures residents through data but cannot measure memory, care, grief, or dignity.",
    Icon: Heart
  }
];

export function CriticalLensSection() {
  return (
    <section className="border-b border-[#d7e1e9] bg-[#f7f9fb] px-5 py-[var(--section-padding-y)] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.2fr_0.52fr_0.28fr] lg:items-start">
          <div className="promise-reveal">
            <span className="mb-4 grid size-14 place-items-center rounded-full border border-[#a9bed0] bg-white/72 text-[#4f7897] shadow-sm">
              <Search aria-hidden="true" className="size-7" strokeWidth={1.7} />
            </span>
            <h2 className="font-serif text-4xl leading-[0.95] text-[#07111f] sm:text-5xl">
              Critical Lens
            </h2>
          </div>

          <div className="promise-reveal">
            <h3 className="font-serif text-4xl leading-tight text-[#07111f] sm:text-5xl">
              Read the Story Through a Marxist Lens
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-6 text-[#34485b] sm:text-base sm:leading-7">
              Technology in “A Song for Sleep” is not neutral. It reflects
              economic structures, extracts value from daily life, and
              determines whose humanity is recognized.
            </p>
          </div>

          <aside className="promise-card rounded-lg border border-[#b7c8d8] bg-white/74 p-5 shadow-[0_16px_45px_rgba(28,70,105,0.08)] backdrop-blur">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#4f7897]">
              Thesis Statement
            </p>
            <p className="mt-3 text-sm font-semibold leading-6 text-[#34485b]">
              In “A Song for Sleep,” the smart building reveals how
              technological convenience is built on unequal systems of control
              that prioritize information over humanity.
            </p>
          </aside>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {lensCards.map(({ title, text, Icon }, index) => (
            <article
              className="promise-card rounded-lg border border-[#d7e1e9] bg-white/72 p-6 shadow-[0_16px_45px_rgba(28,70,105,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#9fb9cf] hover:shadow-[0_22px_60px_rgba(28,70,105,0.11)]"
              key={title}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="grid gap-4 sm:grid-cols-[3rem_1fr]">
                <Icon aria-hidden="true" className="size-10 text-[#34485b]" strokeWidth={1.5} />
                <div>
                  <h4 className="font-serif text-2xl font-semibold leading-none text-[#07111f]">
                    {title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-[#34485b]">{text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          <Link
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#356fbe] bg-[#356fbe] px-6 py-4 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(53,111,190,0.25)] transition hover:-translate-y-0.5 hover:bg-[#285fa9]"
            href="/analysis"
          >
            Read the Full Marxist Analysis
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.8} />
          </Link>
          <Link
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#9fb5c8] bg-white/70 px-6 py-4 text-sm font-semibold text-[#34485b] transition hover:-translate-y-0.5 hover:border-[#356fbe] hover:text-[#285fa9]"
            href="/reflection"
          >
            Read the Reflection
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}
