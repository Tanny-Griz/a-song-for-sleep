import type { CSSProperties } from "react";
import {
  Database,
  Footprints,
  Music2,
  ShoppingCart,
  Stethoscope,
  TrendingUp
} from "lucide-react";

const knowledgeCards = [
  {
    title: "Medical Information",
    value: "Basic",
    caption: "Last update: 3 days ago",
    subvalue: "Available",
    Icon: Stethoscope,
    visual: "line"
  },
  {
    title: "Shopping History",
    value: "24",
    caption: "Last 30 days",
    subvalue: "Transactions",
    Icon: ShoppingCart,
    visual: "bars"
  },
  {
    title: "Movement Patterns",
    value: "Mostly",
    caption: "Low external travel",
    subvalue: "Home",
    Icon: Footprints,
    visual: "donut"
  },
  {
    title: "Music Preferences",
    value: "Classical",
    caption: "Low variety detected",
    subvalue: "Mostly",
    Icon: Music2,
    visual: "wave"
  },
  {
    title: "Behavior Forecast",
    value: "Routine",
    caption: "Confidence: Medium",
    subvalue: "Stable",
    Icon: TrendingUp,
    visual: "forecast"
  }
];

export function BuildingKnowsSection() {
  return (
    <section className="border-b border-[#cfdae7] bg-[#eef5fb] px-5 py-[var(--section-padding-y)] sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.22fr_0.78fr] lg:items-center">
        <div className="promise-reveal">
          <div className="mb-5">
            <span className="mb-4 grid size-14 place-items-center rounded-full border border-[#7ea7c4] bg-white/70 text-[#0b2a3f] shadow-sm">
              <Database aria-hidden="true" className="size-7" strokeWidth={1.6} />
            </span>
            <h2 className="font-serif text-4xl leading-[0.95] text-[#07111f] sm:text-5xl">
              What the
              <br />
              Building Knows
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#2f4356] sm:text-base sm:leading-7">
            From sensors, logs, and connected services, the building collects
            patterns that help it make predictions and recommendations.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {knowledgeCards.map(({ title, value, caption, subvalue, Icon, visual }, index) => (
            <article
              className="promise-card rounded-lg border border-[#c4d6e4] bg-white/74 p-5 shadow-[0_16px_45px_rgba(28,70,105,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#83b6d4] hover:shadow-[0_22px_60px_rgba(28,70,105,0.13)]"
              key={title}
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <div className="mb-5 flex items-center gap-3 border-b border-[#d8e5ee] pb-4">
                <Icon
                  aria-hidden="true"
                  className="size-7 text-[#356f92]"
                  strokeWidth={1.7}
                />
                <h3 className="text-sm font-semibold text-[#07111f]">{title}</h3>
              </div>

              <div className="min-h-28">
                <p className="text-center text-2xl font-medium tracking-[-0.02em] text-[#07111f]">
                  {value}
                </p>
                <p className="text-center text-sm font-medium text-[#2f4356]">{subvalue}</p>

                {visual === "line" && (
                  <div className="mt-4 h-12 overflow-hidden rounded bg-[#e6f2f8]">
                    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 180 56">
                      <path
                        className="promise-line"
                        d="M2 28 C16 42 28 42 43 26 S65 20 77 35 95 49 112 31 130 14 145 30 160 43 178 24"
                        fill="none"
                        stroke="#4f89ad"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>
                )}

                {visual === "bars" && (
                  <div className="mt-4 flex h-14 items-end justify-center gap-1.5 border-b border-[#c7dbe8] px-2">
                    {[12, 22, 18, 31, 27, 39, 44, 25, 51, 34, 41, 29].map(
                      (height, barIndex) => (
                        <span
                          aria-hidden="true"
                          className="promise-bar w-1.5 rounded-t bg-[#4f89ad]"
                          key={`${height}-${barIndex}`}
                          style={
                            {
                              "--bar-height": `${height}px`,
                              animationDelay: `${barIndex * 45}ms`
                            } as CSSProperties
                          }
                        />
                      )
                    )}
                  </div>
                )}

                {visual === "donut" && (
                  <div className="mt-4 flex justify-center">
                    <div className="knowledge-donut grid size-20 place-items-center rounded-full">
                      <span className="grid size-12 place-items-center rounded-full bg-white text-sm font-semibold text-[#07111f]">
                        82%
                      </span>
                    </div>
                  </div>
                )}

                {visual === "wave" && (
                  <div className="mt-5 flex h-12 items-center justify-center gap-1">
                    {[10, 18, 26, 14, 34, 20, 40, 18, 28, 12, 30, 22, 36, 16, 24, 10].map(
                      (height, waveIndex) => (
                        <span
                          aria-hidden="true"
                          className="knowledge-wave w-1 rounded-full bg-[#6aa4c5]"
                          key={`${height}-${waveIndex}`}
                          style={
                            {
                              "--wave-height": `${height}px`,
                              animationDelay: `${waveIndex * 55}ms`
                            } as CSSProperties
                          }
                        />
                      )
                    )}
                  </div>
                )}

                {visual === "forecast" && (
                  <div className="mt-4 h-14 overflow-hidden rounded bg-[#e6f2f8]">
                    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 180 56">
                      <path
                        className="promise-line"
                        d="M5 43 L28 34 L52 27 L76 33 L100 19 L124 34 L148 23 L174 14"
                        fill="none"
                        stroke="#4f89ad"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                      />
                      {[5, 28, 52, 76, 100, 124, 148, 174].map((x, dotIndex) => (
                        <circle
                          className="knowledge-forecast-dot"
                          cx={x}
                          cy={[43, 34, 27, 33, 19, 34, 23, 14][dotIndex]}
                          fill="#e6f2f8"
                          key={x}
                          r="3"
                          stroke="#4f89ad"
                          strokeWidth="2"
                        />
                      ))}
                    </svg>
                  </div>
                )}
              </div>

              <p className="mt-4 text-center text-xs text-[#5c7182]">{caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
