import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CalendarDays,
  ChartNoAxesColumn,
  Clock3,
  FileUser,
  HeartPulse,
  ShieldCheck,
  Thermometer,
  UserRound
} from "lucide-react";

const statusRows = [
  {
    label: "Tenant detected",
    status: "Normal",
    color: "#58c9a3",
    delay: "0.25s",
    Icon: UserRound
  },
  {
    label: "Age: 93",
    status: "Verified",
    color: "#4f9fc4",
    delay: "0.85s",
    Icon: CalendarDays
  },
  {
    label: "Digital profile: incomplete",
    status: "Gap",
    color: "#e5aa42",
    delay: "1.35s",
    Icon: FileUser
  },
  {
    label: "Prediction confidence: low",
    status: "Warning",
    color: "#d9604b",
    delay: "2.15s",
    Icon: ChartNoAxesColumn
  }
];

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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f4f7fa] text-[#07111f]">
      <section className="relative isolate min-h-[100svh] overflow-hidden border-b border-[#d7e1e9] bg-[#e9eef3]">
        <Image
          src="/images/elevator-5.png"
          alt="A bright automated elevator lobby with closed metal elevator doors and a translucent building AI interface."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,247,250,0.96)_0%,rgba(244,247,250,0.9)_34%,rgba(244,247,250,0.48)_58%,rgba(244,247,250,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.04),rgba(7,17,31,0.08))]" />

        <div className="absolute inset-x-0 top-0 z-20 border-b border-[#dce5ec]/80 bg-white/55 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded border border-[#9fb7c8] text-[#0a2235]">
                <span className="h-5 w-3 border-x border-t border-[#0a2235]" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#07111f]">
                  Smartlit Analytics
                </p>
                <p className="hidden text-[11px] text-[#657381] sm:block">
                  Understanding stories. Designing futures.
                </p>
              </div>
            </div>

            <Link
              className="hidden rounded border border-[#b7c8d5] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#07111f] transition hover:border-[#4f9fc4] hover:text-[#1f79a3] sm:inline-flex"
              href="/analysis"
            >
              Enter
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-10 pt-28 sm:px-8 lg:px-10">
          <div className="w-full max-w-xl">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#2b7fa7] sm:text-sm">
              A Multimodal Literary Analysis
            </p>
            <h1 className="max-w-[10ch] font-serif text-[clamp(4rem,18vw,6.7rem)] leading-[0.82] text-[#07111f] sm:text-[clamp(5.5rem,11vw,7.8rem)] lg:text-[clamp(5.8rem,8vw,8.8rem)]">
              A Song <span className="italic">for</span> Sleep
            </h1>

            <div className="mt-6 h-px w-24 bg-[#4f9fc4]">
              <div className="h-px w-10 translate-y-2 bg-[#b7c8d5]" />
            </div>

            <p className="mt-8 max-w-sm text-base leading-7 text-[#283747] sm:text-lg">
              When a smart building tries to understand a tenant who leaves
              almost no digital trace.
            </p>

            <div className="mt-7 w-full max-w-md rounded-lg border border-[#cfdbe4] bg-white/78 p-4 shadow-[0_18px_55px_rgba(7,17,31,0.08)] backdrop-blur">
              <div className="mb-3 flex items-center justify-between border-b border-[#dce5ec] pb-2">
                <p className="font-mono text-[0.64rem] font-medium uppercase tracking-[0.18em] text-[#637181]">
                  System status
                </p>
              </div>
              <dl className="space-y-3 text-sm text-[#07111f]">
                {statusRows.map(({ label, status, color, delay, Icon }) => (
                  <div
                    className="grid grid-cols-[1.35rem_1fr_auto] items-center gap-3 border-b border-[#e3eaf0] pb-2 last:border-b-0 last:pb-0"
                    key={label}
                  >
                    <dt className="contents">
                      <Icon
                        aria-hidden="true"
                        className="size-4 text-[#8a98a6]"
                        strokeWidth={1.7}
                      />
                      <span
                        className="status-typewriter font-mono text-[0.82rem] font-medium tracking-[-0.01em]"
                        style={
                          {
                            "--type-delay": delay,
                            "--type-steps": label.length,
                            "--type-width": `${label.length + 1}ch`
                          } as React.CSSProperties
                        }
                      >
                        {label}
                      </span>
                    </dt>
                    <dd className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[#637181]">
                      <span
                        aria-hidden="true"
                        className="size-2 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <span className="sr-only">{status}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              className="mt-7 inline-flex w-fit items-center rounded border border-[#07111f] bg-[#07111f] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#2b7fa7] hover:bg-[#2b7fa7]"
              href="/analysis"
            >
              Enter the Analysis
            </Link>
          </div>
        </div>
      </section>

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
              Smart buildings are designed to anticipate needs, optimize
              comfort, and simplify daily life. Through interconnected systems,
              they create environments that respond, adapt, and care, making
              every moment seamless and efficient.
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
                  <Icon aria-hidden="true" className="size-7 text-[#092033]" strokeWidth={1.7} />
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
                                } as React.CSSProperties
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
    </main>
  );
}
