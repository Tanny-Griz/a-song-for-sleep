import {
  BarChart3,
  BriefcaseBusiness,
  Code2,
  GraduationCap
} from "lucide-react";

const useCases = [
  {
    title: "Web Design & Development",
    description:
      "I can use multimodal composition to build interfaces where structure, interaction, and visual choices help users understand complex ideas clearly.",
    Icon: Code2
  },
  {
    title: "Education & Storytelling",
    description:
      "Interactive lessons, visual comparisons, and guided sections can help people learn difficult concepts through more than written explanation.",
    Icon: GraduationCap
  },
  {
    title: "Client Presentations",
    description:
      "A multimodal format can make research, strategy, and design decisions easier to see, remember, and discuss with clients.",
    Icon: BriefcaseBusiness
  },
  {
    title: "Data Visualization",
    description:
      "Charts, interface states, and spatial layouts can turn data into meaningful visuals that support ethical and thoughtful decision-making.",
    Icon: BarChart3
  }
];

export function ReflectionUseBeyondClass() {
  return (
    <section className="border-b border-[#d7e1e9] bg-[#f4f7fa] px-5 py-[var(--section-padding-y)] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#07111f] sm:text-5xl">
            Where I Might Use This Outside of Class
          </h2>
          <p className="mt-5 text-base leading-8 text-[#34485b] sm:text-lg">
            The skills from this project can move beyond one assignment into
            practical work that combines design, explanation, and interaction.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map(({ title, description, Icon }) => (
            <article
              className="promise-card group flex min-h-72 flex-col rounded-xl border border-[#d7e1e9] bg-white/74 p-6 text-center shadow-[0_18px_60px_rgba(28,70,105,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#a8c8d8] hover:bg-white"
              key={title}
            >
              <div className="mx-auto grid size-20 place-items-center rounded-full border border-[#d7e1e9] bg-[#f8fbfd] text-[#2d6ea3] transition duration-300 group-hover:border-[#9bc9c9] group-hover:text-[#2d8b90]">
                <Icon aria-hidden="true" className="size-10" strokeWidth={1.45} />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold leading-tight text-[#07111f]">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#34485b]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
