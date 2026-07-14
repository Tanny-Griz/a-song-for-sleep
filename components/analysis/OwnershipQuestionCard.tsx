import {
  ArrowUp,
  Building2,
  Network,
  Server,
  UserRound,
  UtilityPole
} from "lucide-react";

const hierarchy = [
  {
    label: "Building Owners / Management",
    Icon: Building2
  },
  {
    label: "System Master",
    Icon: Server
  },
  {
    label: "Great Nest of Objects",
    Icon: Network
  },
  {
    label: "Elevator-5",
    Icon: UtilityPole
  },
  {
    label: "Resident 5305",
    Icon: UserRound
  }
];

export function OwnershipQuestionCard() {
  return (
    <section className="border-b border-[#d7e1e9] bg-[#f4f7fa] px-5 py-[var(--section-padding-y)] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <article className="promise-card rounded-xl border border-[#d7e1e9] bg-white/76 p-6 shadow-[0_18px_70px_rgba(28,70,105,0.08)] backdrop-blur sm:p-8 lg:w-1/2">
          <div className="grid gap-5 sm:grid-cols-[4rem_1fr]">
            <div className="grid size-14 place-items-center rounded-full bg-[#2d6ea3] font-serif text-3xl font-semibold text-white shadow-[0_12px_30px_rgba(45,110,163,0.25)]">
              1
            </div>
            <div>
              <h2 className="font-serif text-4xl font-semibold leading-tight text-[#07111f]">
                Who Owns the System?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#34485b]">
                Power flows upward. Ownership and control remain at the top,
                while the resident sits at the bottom of the data hierarchy.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.34fr_0.66fr]">
            <aside className="rounded-lg border border-[#d7e1e9] bg-white/72 p-5 shadow-sm">
              <p className="text-sm leading-6 text-[#34485b]">
                The system is owned by building owners and managed by corporate
                interests. Data extracted from residents flows upward and
                consolidates as profit and control.
              </p>
              <div className="mt-20 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.12em] text-[#4f7897]">
                <span className="h-px flex-1 border-t border-dashed border-[#4f89ad]" />
                <ArrowUp
                  aria-hidden="true"
                  className="size-5 rotate-90 text-[#4f89ad]"
                  strokeWidth={1.8}
                />
                <span>Data Flow</span>
              </div>
            </aside>

            <div className="relative px-2">
              <div className="absolute bottom-8 right-0 top-4 hidden border-r border-dashed border-[#6e9fc1] sm:block" />
              <div className="space-y-4">
                {hierarchy.map(({ label, Icon }, index) => (
                  <div className="relative" key={label}>
                    <div className="grid min-h-16 items-center rounded-lg border border-[#cfdde8] bg-[#f8fbfd] px-5 shadow-sm sm:grid-cols-[3.5rem_1fr]">
                      <Icon
                        aria-hidden="true"
                        className="mx-auto size-7 text-[#34485b]"
                        strokeWidth={1.6}
                      />
                      <p className="text-center text-base font-semibold text-[#223748] sm:text-left">
                        {label}
                      </p>
                    </div>
                    {index < hierarchy.length - 1 && (
                      <ArrowUp
                        aria-hidden="true"
                        className="mx-auto mt-1 size-5 text-[#4f89ad]"
                        strokeWidth={1.8}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
