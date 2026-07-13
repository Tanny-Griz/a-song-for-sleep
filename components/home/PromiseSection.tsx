import type { CSSProperties } from "react";
import {
  Building2,
  Clock3,
  HeartPulse,
  ShieldCheck,
  Thermometer
} from "lucide-react";

const promiseMetrics = [
  {
    title: "Temperature",
    value: "22°C",
    caption: "Optimal",
    Icon: Thermometer,
    visual: "line"
  },
  {
    title: "Health Monitoring",
    value: "Stable",
    caption: "All systems normal",
    Icon: HeartPulse,
    visual: "bars"
  },
  {
    title: "Security",
    value: "Secure",
    caption: "No threats detected",
    Icon: ShieldCheck,
    visual: "check"
  },
  {
    title: "Daily Routine",
    value: "On Track",
    caption: "7:00    12:00    18:00    22:00",
    Icon: Clock3,
    visual: "timeline"
  }
];

export function PromiseSection() {
  return (
    <section className="border-b border-[#d7e1e9] bg-[#f4f7fa] px-5 py-[var(--section-padding-y)] sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-center">
        <div className="promise-reveal">
          <div className="mb-5">
            <span className="mb-4 grid size-14 place-items-center rounded-full border border-[#7aa5bc] bg-white/65 text-[#0b2a3f] shadow-sm">
              <Building2 aria-hidden="true" className="size-7" strokeWidth={1.6} />
            </span>
            <h2 className="font-serif text-4xl leading-[0.95] text-[#07111f] sm:text-5xl">
              The Promise
              <br />
              of Convenience
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#334454] sm:text-base sm:leading-7">
            Smart buildings are designed to anticipate needs, optimize comfort,
            and simplify daily life. Through interconnected systems, they create
            environments that respond, adapt, and care, making every moment
            seamless and efficient.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {promiseMetrics.map(({ title, value, caption, Icon, visual }, index) => (
            <article
              className="promise-card rounded-lg border border-[#cfdbe4] bg-white/72 p-5 shadow-[0_16px_45px_rgba(7,17,31,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#9fc5d8] hover:shadow-[0_22px_60px_rgba(7,17,31,0.11)]"
              key={title}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="mb-5 flex items-center gap-3 border-b border-[#e0e8ee] pb-4">
                <Icon
                  aria-hidden="true"
                  className="size-7 text-[#092033]"
                  strokeWidth={1.7}
                />
                <h3 className="text-sm font-semibold text-[#07111f]">{title}</h3>
              </div>

              <div className="min-h-28">
                <p className="text-center text-2xl font-medium tracking-[-0.02em] text-[#07111f]">
                  {value}
                </p>

                {visual === "line" && (
                  <div className="mt-4 h-12 overflow-hidden rounded bg-[#eaf5f6]">
                    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 180 56">
                      <path
                        className="promise-line"
                        d="M2 42 C18 8 31 10 45 34 S72 45 88 26 118 17 135 34 153 50 178 20"
                        fill="none"
                        stroke="#57aebd"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>
                )}

                {visual === "bars" && (
                  <div className="mt-4 rounded bg-[#eef7f8] px-3 pb-2 pt-3">
                    <div className="relative flex h-14 items-end justify-center gap-1.5 border-b border-[#c9dfe3]">
                      <div className="absolute inset-x-0 top-1/3 border-t border-dashed border-[#c9dfe3]" />
                      <div className="absolute inset-x-0 top-2/3 border-t border-dashed border-[#d9e9ec]" />
                      {[34, 18, 42, 27, 47, 16, 23, 28, 21, 37, 18, 31, 43, 24].map(
                        (height, barIndex) => (
                          <span
                            aria-hidden="true"
                            className="promise-bar relative z-10 w-1.5 rounded-t bg-[#77bdc5]"
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
                    <div className="mt-1 flex justify-between font-mono text-[0.55rem] text-[#7b8b98]">
                      <span>06</span>
                      <span>12</span>
                      <span>18</span>
                      <span>24</span>
                    </div>
                  </div>
                )}

                {visual === "check" && (
                  <div className="mt-4 flex justify-center">
                    <span className="promise-check grid size-16 place-items-center rounded-full border-4 border-[#c6e4e5] text-[#168a99]">
                      <ShieldCheck aria-hidden="true" className="size-8" strokeWidth={1.8} />
                    </span>
                  </div>
                )}

                {visual === "timeline" && (
                  <div className="mt-7">
                    <div className="relative h-1 rounded-full bg-[#b7dce3]">
                      {[0, 33, 66, 100].map((position) => (
                        <span
                          aria-hidden="true"
                          className="promise-dot absolute top-1/2 size-3 -translate-y-1/2 rounded-full bg-[#43aabd]"
                          key={position}
                          style={{ left: `calc(${position}% - 0.375rem)` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <p className="mt-4 text-center text-xs text-[#607180]">{caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
