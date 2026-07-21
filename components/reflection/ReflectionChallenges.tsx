"use client";

import {
  BookOpen,
  ChevronRight,
  Eye,
  GraduationCap,
  Lightbulb,
  MousePointerClick,
  Paintbrush,
  PanelsTopLeft,
  Scale,
  Search
} from "lucide-react";
import { useState } from "react";

const challenges = [
  {
    title: "Balancing design and literary analysis",
    summary:
      "I wanted the site to feel polished, modern, and interactive, but the design could not become decoration. Every image, card, animation, and interface element had to support my reading of the story and the Marxist lens.",
    tags: ["design vs. analysis", "visual clarity", "academic purpose"],
    Icon: Scale
  },
  {
    title: "Moving from technology themes to a Marxist lens",
    summary:
      "The story clearly raises questions about AI, surveillance, and privacy, so it was easy to drift into a general argument about technology. The harder task was connecting each idea to ownership, profit, data extraction, institutional power, and economic value.",
    tags: ["ownership", "data profit", "institutional power"],
    Icon: Search
  },
  {
    title: "Turning a long argument into a website structure",
    summary:
      "A traditional essay moves paragraph by paragraph. For this project, I had to decide what belonged on the homepage, what belonged on the Analysis page, how to divide the argument into questions, and how the visitor should move through those ideas.",
    tags: ["site hierarchy", "question cards", "reader path"],
    Icon: PanelsTopLeft
  },
  {
    title: "Choosing the right mode for each idea",
    summary:
      "Not every idea works best as an image. Some needed written explanation, while others worked better as comparison panels, diagrams, status cards, or interaction. The challenge was deciding whether an idea should be read, seen, or revealed through use.",
    tags: ["mode choice", "visual argument", "written analysis"],
    Icon: Paintbrush
  },
  {
    title: "Preserving the complexity of the story",
    summary:
      "I did not want the project to flatten the story into technology is bad. Elevator-5 watches the woman, but it also begins to care for her. The design had to hold both surveillance and care, data and memory, institutional control and personal connection.",
    tags: ["surveillance / care", "data / memory", "human value"],
    Icon: BookOpen
  },
  {
    title: "Creating interactivity without overload",
    summary:
      "I had many ideas: sliders, expanding cards, glitch effects, sound, and scroll animation. Too much interaction would distract from the analysis, so I kept only interactions that helped the argument, such as system errors, comparison cards, and focused navigation.",
    tags: ["restraint", "purposeful motion", "interactive evidence"],
    Icon: MousePointerClick
  }
];

type Challenge = (typeof challenges)[number];

function ChallengeDetail({
  challenge,
  index,
  className = ""
}: {
  challenge: Challenge;
  index: number;
  className?: string;
}) {
  const ActiveIcon = challenge.Icon;

  return (
    <article
      className={[
        "promise-card rounded-xl border border-[#d7e1e9] bg-white/76 p-6 shadow-[0_18px_70px_rgba(28,70,105,0.08)] backdrop-blur sm:p-8",
        className
      ].join(" ")}
    >
      <div className="grid gap-5 border-b border-[#d7e1e9] pb-7 sm:grid-cols-[5rem_1fr] sm:items-center">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-[#eef5fa] text-[#2d6ea3] sm:mx-0 sm:size-20">
          <ActiveIcon
            aria-hidden="true"
            className="size-9 sm:size-11"
            strokeWidth={1.45}
          />
        </div>
        <div className="flex items-start gap-4">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#2d6ea3] font-serif text-xl font-semibold text-white">
            {index + 1}
          </span>
          <h3 className="font-serif text-2xl font-semibold leading-tight text-[#07111f] sm:text-3xl">
            {challenge.title}
          </h3>
        </div>
      </div>

      <p className="mt-7 text-base leading-8 text-[#34485b] sm:text-lg">
        {challenge.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {challenge.tags.map((tag, tagIndex) => {
          const TagIcon =
            tagIndex === 0 ? Scale : tagIndex === 1 ? Eye : GraduationCap;

          return (
            <span
              className="inline-flex items-center gap-2 rounded-lg border border-[#d7e1e9] bg-[#f8fbfd] px-4 py-3 text-sm font-semibold text-[#34485b]"
              key={tag}
            >
              <TagIcon
                aria-hidden="true"
                className="size-4 text-[#4f89ad]"
                strokeWidth={1.6}
              />
              {tag}
            </span>
          );
        })}
      </div>
    </article>
  );
}

export function ReflectionChallenges() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(
    null
  );
  const [viewedChallenges, setViewedChallenges] = useState<Set<number>>(
    () => new Set()
  );
  const activeChallenge = challenges[activeIndex];
  const viewedProgress = (viewedChallenges.size / challenges.length) * 100;

  function markChallengeViewed(index: number) {
    setViewedChallenges((currentViewed) => {
      const nextViewed = new Set(currentViewed);
      nextViewed.add(index);
      return nextViewed;
    });
  }

  function handleDesktopChallengeClick(index: number) {
    markChallengeViewed(index);
    setActiveIndex(index);
  }

  function handleMobileChallengeClick(index: number) {
    markChallengeViewed(index);
    setMobileActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  }

  return (
    <section className="relative border-b border-[#d7e1e9] bg-[#f4f7fa] px-5 pb-[calc(var(--section-padding-y)+3.5rem)] pt-[var(--section-padding-y)] sm:px-8 lg:px-10 lg:py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-7xl">
        <div>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#07111f] sm:text-5xl">
            Challenges of Composing Multimodally
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#34485b] sm:text-lg">
            Key difficulties I encountered while building this project.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="grid gap-3 lg:hidden">
            {challenges.map(({ title, Icon }, index) => {
              const isActive = index === mobileActiveIndex;

              return (
                <div className="grid gap-3" key={title}>
                  <button
                    aria-expanded={isActive}
                    className={[
                      "group grid w-full grid-cols-[2.4rem_2.6rem_1fr_1.25rem] items-center gap-3 rounded-lg border bg-white/72 p-4 text-left shadow-sm transition duration-300 sm:grid-cols-[2.75rem_3rem_1fr_1.5rem] sm:gap-4",
                      isActive
                        ? "border-[#84b7d0] bg-[#eef7fb] shadow-[0_16px_45px_rgba(28,70,105,0.1)]"
                        : "border-[#d7e1e9] hover:-translate-y-0.5 hover:border-[#b9cedd] hover:bg-white"
                    ].join(" ")}
                    onClick={() => handleMobileChallengeClick(index)}
                    type="button"
                  >
                    <span
                      className={[
                        "grid size-9 place-items-center rounded-full font-serif text-lg font-semibold sm:size-10 sm:text-xl",
                        isActive
                          ? "bg-[#d8ebf5] text-[#2d6ea3]"
                          : "bg-[#eef2f6] text-[#657789]"
                      ].join(" ")}
                    >
                      {index + 1}
                    </span>
                    <Icon
                      aria-hidden="true"
                      className="mx-auto size-8 text-[#20384b] sm:size-9"
                      strokeWidth={1.5}
                    />
                    <span className="font-serif text-lg font-semibold leading-tight text-[#07111f] sm:text-xl">
                      {title}
                    </span>
                    <ChevronRight
                      aria-hidden="true"
                      className={[
                        "size-5 justify-self-end transition duration-300",
                        isActive
                          ? "rotate-90 text-[#2d6ea3]"
                          : "text-[#7a8b9a] group-hover:translate-x-0.5"
                      ].join(" ")}
                      strokeWidth={1.8}
                    />
                  </button>

                  {isActive && (
                    <ChallengeDetail
                      challenge={challenges[index]}
                      className="lg:hidden"
                      index={index}
                    />
                  )}
                </div>
              );
            })}

            <p className="mt-3 flex items-center gap-2 text-sm leading-6 text-[#637181]">
              <Lightbulb
                aria-hidden="true"
                className="size-5 text-[#4f89ad]"
                strokeWidth={1.5}
              />
              Click each challenge to expand.
            </p>
          </div>

          <div className="hidden gap-3 lg:grid">
            {challenges.map(({ title, Icon }, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  aria-expanded={isActive}
                  className={[
                    "group grid w-full grid-cols-[2.75rem_3rem_1fr_1.5rem] items-center gap-4 rounded-lg border bg-white/72 p-4 text-left shadow-sm transition duration-300",
                    isActive
                      ? "border-[#84b7d0] bg-[#eef7fb] shadow-[0_16px_45px_rgba(28,70,105,0.1)]"
                      : "border-[#d7e1e9] hover:-translate-y-0.5 hover:border-[#b9cedd] hover:bg-white"
                  ].join(" ")}
                  key={title}
                  onClick={() => handleDesktopChallengeClick(index)}
                  type="button"
                >
                  <span
                    className={[
                      "grid size-10 place-items-center rounded-full font-serif text-xl font-semibold",
                      isActive
                        ? "bg-[#d8ebf5] text-[#2d6ea3]"
                        : "bg-[#eef2f6] text-[#657789]"
                    ].join(" ")}
                  >
                    {index + 1}
                  </span>
                  <Icon
                    aria-hidden="true"
                    className="mx-auto size-9 text-[#20384b]"
                    strokeWidth={1.5}
                  />
                  <span className="font-serif text-xl font-semibold leading-tight text-[#07111f]">
                    {title}
                  </span>
                  <ChevronRight
                    aria-hidden="true"
                    className={[
                      "size-5 justify-self-end transition duration-300",
                      isActive
                        ? "translate-x-0.5 text-[#2d6ea3]"
                        : "text-[#7a8b9a] group-hover:translate-x-0.5"
                    ].join(" ")}
                    strokeWidth={1.8}
                  />
                </button>
              );
            })}

            <p className="mt-3 flex items-center gap-2 text-sm leading-6 text-[#637181]">
              <Lightbulb
                aria-hidden="true"
                className="size-5 text-[#4f89ad]"
                strokeWidth={1.5}
              />
              Click each challenge to expand.
            </p>
          </div>

          <ChallengeDetail
            challenge={activeChallenge}
            className="hidden lg:block"
            index={activeIndex}
          />
        </div>

        <div className="mt-8 hidden gap-4 rounded-lg border border-[#d7e1e9] bg-white/70 p-5 lg:grid lg:grid-cols-[3rem_1fr] lg:items-center">
          <p className="font-mono text-sm font-semibold text-[#4f7897]">
            {viewedChallenges.size}/{challenges.length}
          </p>
          <div className="h-2 overflow-hidden rounded-full bg-[#e3eaf0]">
            <div
              className="h-full rounded-full bg-[#9b86c8] transition-all duration-500"
              style={{ width: `${viewedProgress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="sticky bottom-4 z-20 mt-8 rounded-full border border-[#d7e1e9]/55 bg-white/48 p-3 shadow-[0_12px_34px_rgba(28,70,105,0.1)] backdrop-blur-md lg:hidden">
        <div
          aria-label={`${viewedChallenges.size} of ${challenges.length} reflection challenges viewed`}
          aria-valuemax={challenges.length}
          aria-valuemin={0}
          aria-valuenow={viewedChallenges.size}
          className="h-2 overflow-hidden rounded-full bg-[#dfe8ef]"
          role="progressbar"
        >
          <div
            className="h-full rounded-full bg-[#9b86c8] transition-all duration-500"
            style={{ width: `${viewedProgress}%` }}
          />
        </div>
      </div>
    </section>
  );
}
