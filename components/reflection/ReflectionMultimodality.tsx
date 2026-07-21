"use client";

import {
  Columns2,
  FileText,
  HeartPulse,
  MessagesSquare,
  Monitor,
  MousePointer2,
  Network,
  Quote,
  Scale,
  Table2,
  Volume2
} from "lucide-react";
import { useState } from "react";

type ViewMode = "website" | "compare" | "essay";

const comparisonRows = [
  {
    websiteTitle: "Visualize Power and Control",
    websiteText:
      "Profile fields, system warnings, and access restrictions show how the building observes, categorizes, and limits the resident.",
    essayTitle: "Explain Power and Control",
    essayText:
      "A traditional essay could explain how the system controls the resident, but the reader would encounter that power through linear description rather than as a visible interface.",
    WebsiteIcon: Network,
    EssayIcon: FileText
  },
  {
    websiteTitle: "Visualize How Private Life Becomes Data",
    websiteText:
      "Health, movement, appliance use, and preferences appear as measurable profile fields.",
    essayTitle: "Describe How Private Life Becomes Data",
    essayText:
      "A traditional essay can explain what information is collected, but the reader encounters it in paragraphs rather than seeing a person’s life sorted into a data profile.",
    WebsiteIcon: HeartPulse,
    EssayIcon: Table2
  },
  {
    websiteTitle: "Compare Human Identity and Data Profile",
    websiteText:
      "Side-by-side cards reveal the gap between a complete human life and what the system can measure.",
    essayTitle: "Explain the Contrast Sequentially",
    essayText:
      "A traditional essay can describe both sides, but readers encounter them one after another instead of comparing them at the same moment.",
    WebsiteIcon: Scale,
    EssayIcon: MessagesSquare
  },
  {
    websiteTitle: "Hear and Interact with the System",
    websiteText:
      "Audio cards and structured sections let readers encounter Elevator-5 as a voice.",
    essayTitle: "Quote the System from a Distance",
    essayText:
      "A traditional essay can quote Elevator-5, but the reader remains outside the interface.",
    WebsiteIcon: Volume2,
    EssayIcon: Quote
  }
];

const modeButtons = [
  {
    id: "website" as const,
    label: "Website",
    Icon: Monitor
  },
  {
    id: "compare" as const,
    label: "Compare Both",
    Icon: Columns2
  },
  {
    id: "essay" as const,
    label: "Traditional Essay",
    Icon: FileText
  }
];

export function ReflectionMultimodality() {
  const [mode, setMode] = useState<ViewMode>("compare");
  const showWebsite = mode === "website" || mode === "compare";
  const showEssay = mode === "essay" || mode === "compare";

  return (
    <section className="border-b border-[#d7e1e9] bg-[#f7f9fb] px-5 py-[var(--section-padding-y)] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-4xl font-semibold leading-tight text-[#07111f] sm:text-5xl">
          What Multimodality Allowed Me to Do
        </h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <aside className="promise-reveal lg:border-r lg:border-[#d7e1e9] lg:pr-10">
          <p className="max-w-md text-base leading-8 text-[#34485b]">
            This format helped me turn Marxist analysis into something readers
            could see, hear, navigate, and compare.
          </p>

          <div className="mt-12 hidden space-y-4 border-t border-[#d7e1e9] pt-8 text-sm font-medium text-[#637181] lg:block">
            <p className="flex items-center gap-3">
              <span className="size-3 rounded-full bg-[#2d8b90]" />
              Website view
            </p>
            <p className="flex items-center gap-3">
              <span className="size-3 rounded-full bg-[#9aa7b5]" />
              Traditional essay
            </p>
          </div>
        </aside>

        <div>
          <div className="grid w-full grid-cols-1 gap-3 rounded-xl border border-[#d7e1e9] bg-white/68 p-2 shadow-[0_16px_45px_rgba(28,70,105,0.07)] sm:grid-cols-3">
            {modeButtons.map(({ id, label, Icon }) => {
              const isActive = mode === id;

              return (
                <button
                  className={[
                    "inline-flex items-center justify-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition duration-300",
                    isActive
                      ? "bg-white text-[#2d7f86] shadow-[0_10px_28px_rgba(45,127,134,0.14)] ring-1 ring-[#96c4c8]"
                      : "text-[#6a7785] hover:bg-white/70 hover:text-[#34485b]"
                  ].join(" ")}
                  key={id}
                  onClick={() => setMode(id)}
                  type="button"
                >
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
                  {label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 space-y-4">
            {comparisonRows.map(
              ({
                websiteTitle,
                websiteText,
                essayTitle,
                essayText,
                WebsiteIcon,
                EssayIcon
              }) => (
                <article
                  className={[
                    "promise-card overflow-hidden rounded-xl border border-[#d7e1e9] bg-white/74 shadow-[0_18px_60px_rgba(28,70,105,0.07)] backdrop-blur transition duration-500",
                    mode === "website" ? "border-[#9bc9c9] bg-[#f8fcfb]" : "",
                    mode === "essay" ? "bg-white/58 grayscale" : ""
                  ].join(" ")}
                  key={websiteTitle}
                >
                  <div
                    className={[
                      "grid",
                      mode === "compare" ? "lg:grid-cols-[1fr_auto_1fr]" : ""
                    ].join(" ")}
                  >
                    {showWebsite && (
                      <div className="grid gap-5 p-5 sm:grid-cols-[5rem_1fr] sm:items-center sm:p-6">
                        <div className="grid size-20 place-items-center rounded-full border border-[#cfe1df] bg-white/76 text-[#2d8b90]">
                          <WebsiteIcon
                            aria-hidden="true"
                            className="size-10"
                            strokeWidth={1.45}
                          />
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl font-semibold leading-tight text-[#0f3f43]">
                            {websiteTitle}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-[#34485b] sm:text-base sm:leading-7">
                            {websiteText}
                          </p>
                        </div>
                      </div>
                    )}

                    {mode === "compare" && (
                      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-2 lg:hidden">
                        <span className="h-px bg-[#d7e1e9]" />
                        <span className="grid size-11 place-items-center rounded-full border border-[#d7e1e9] bg-white font-serif text-sm font-semibold text-[#637181]">
                          vs.
                        </span>
                        <span className="h-px bg-[#d7e1e9]" />
                      </div>
                    )}

                    {mode === "compare" && (
                      <div className="relative hidden place-items-center px-5 lg:grid">
                        <span
                          aria-hidden="true"
                          className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#d7e1e9]"
                        />
                        <span className="relative z-10 grid size-12 place-items-center rounded-full border border-[#d7e1e9] bg-white font-serif text-sm font-semibold text-[#637181]">
                          vs.
                        </span>
                      </div>
                    )}

                    {showEssay && (
                      <div
                        className={[
                          "grid gap-5 border-t border-[#d7e1e9] p-5 sm:grid-cols-[1fr_5rem] sm:items-center sm:p-6 lg:border-t-0",
                          mode === "compare" ? "border-t-0" : "",
                          mode === "essay" ? "opacity-90" : "opacity-64"
                        ].join(" ")}
                      >
                        <div>
                          <h3 className="font-serif text-2xl font-semibold leading-tight text-[#343f4d]">
                            {essayTitle}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-[#5f6b78] sm:text-base sm:leading-7">
                            {essayText}
                          </p>
                        </div>
                        <div className="grid size-20 place-items-center rounded-full border border-[#d7e1e9] bg-white/64 text-[#7c8793] sm:order-last">
                          <EssayIcon
                            aria-hidden="true"
                            className="size-10"
                            strokeWidth={1.45}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              )
            )}
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm leading-6 text-[#637181]">
            <MousePointer2
              aria-hidden="true"
              className="size-4 text-[#2d8b90]"
              strokeWidth={1.6}
            />
            Switch views to see how the same argument changes across modes.
          </p>
        </div>
      </div>
    </section>
  );
}
