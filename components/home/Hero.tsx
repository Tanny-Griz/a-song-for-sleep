import Image from "next/image";
import { ProjectOverviewSection } from "@/components/home/ProjectOverviewSection";
import {
  CalendarDays,
  ChartNoAxesColumn,
  FileUser,
  UserRound
} from "lucide-react";
import type { CSSProperties } from "react";

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

export function Hero() {
  return (
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

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-10 pt-28 sm:px-8 lg:px-10">
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
                        } as CSSProperties
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
        </div>

        <ProjectOverviewSection className="mt-6 w-full max-w-5xl" />
      </div>
    </section>
  );
}
