import {
  CalendarX2,
  ClipboardList,
  FileX2,
  LockKeyhole,
  MapPinX,
  Music2,
  TriangleAlert,
  UserRound,
  Clipboard
} from "lucide-react";
import { MissingDataAudioButton } from "@/components/home/MissingDataAudioButton";

const missingDataCards = [
  {
    title: "No destination found",
    status: "Unregistered",
    audioSrc: "/audio/No destination found.m4a",
    Icon: MapPinX
  },
  {
    title: "No schedule found",
    status: "No routine",
    audioSrc: "/audio/No schedule found.m4a",
    Icon: CalendarX2
  },
  {
    title: "No music library found",
    status: "Preference unknown",
    audioSrc: "/audio/No music library found.m4a",
    Icon: Music2
  },
  {
    title: "No content found",
    status: "Unsynced",
    audioSrc: "/audio/No content found.m4a",
    Icon: FileX2
  },
  {
    title: "Device access denied",
    status: "Limited access",
    audioSrc: "/audio/Device access denied.m4a",
    Icon: LockKeyhole
  }
];

export function IncompleteProfileSection() {
  return (
    <section className="border-b border-[#ead9d7] bg-[#f8f2f1] px-5 py-[var(--section-padding-y)] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-xl border border-[#d9c5c3] bg-white/64 p-6 shadow-[0_18px_70px_rgba(105,35,28,0.08)] backdrop-blur sm:p-8 lg:p-10">
        <div className="mb-8 flex flex-col gap-5 border-b border-[#ead9d7] pb-6 lg:flex-row lg:items-center lg:justify-end lg:gap-10">
          <div className="flex items-center gap-3 text-sm font-medium text-[#34485b]">
            <UserRound aria-hidden="true" className="size-5 text-[#62758a]" strokeWidth={1.7} />
            <span>Tenant: Unit 5305</span>
          </div>
          <div className="hidden h-7 w-px bg-[#d9c5c3] lg:block" />
          <div className="flex items-center gap-3 text-sm font-medium text-[#34485b]">
            <Clipboard aria-hidden="true" className="size-5 text-[#62758a]" strokeWidth={1.7} />
            <span>System: Elevator-5</span>
            <span className="size-2 rounded-full bg-[#c94d45]" />
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[0.28fr_0.72fr] xl:items-center">
          <div className="promise-reveal xl:border-r xl:border-[#ead9d7] xl:pr-10">
            <div className="mb-5">
              <span className="mb-4 grid size-14 place-items-center rounded-full border border-[#d77d78] bg-white/72 text-[#b94842] shadow-sm">
                <TriangleAlert aria-hidden="true" className="size-7" strokeWidth={1.7} />
              </span>
              <h2 className="font-serif text-4xl leading-[0.95] text-[#07111f] sm:text-5xl">
                The Incomplete
                <br />
                Profile
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#4a5969] sm:text-base sm:leading-7">
              The new resident arrives without the synchronized data the
              building expects. Elevator-5 detects only fragments of her daily
              life, while her destination, routine, and preferences remain
              largely unknown.
            </p>

            <div className="mt-7 border-t border-dashed border-[#d9c5c3] pt-6">
              <div className="flex items-start gap-3 text-sm leading-6 text-[#4a5969]">
                <ClipboardList
                  aria-hidden="true"
                  className="mt-1 size-6 shrink-0 text-[#62758a]"
                  strokeWidth={1.7}
                />
                <p>
                  <span className="font-semibold text-[#34485b]">
                    Detected fragments:
                  </span>
                  <br />
                  refrigerator contents, thermostat setting, washing-machine
                  cycles.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {missingDataCards.map(({ title, status, audioSrc, Icon }, index) => (
              <article
                className="incomplete-card promise-card relative flex min-h-80 flex-col overflow-hidden rounded-lg border border-[#e0aaa5] bg-white/68 p-5 text-center shadow-[0_16px_45px_rgba(105,35,28,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#cf6c65] hover:shadow-[0_22px_60px_rgba(105,35,28,0.13)]"
                key={title}
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-45" />
                <Icon
                  aria-hidden="true"
                  className="mx-auto mt-4 size-12 text-[#c0524b]"
                  strokeWidth={1.5}
                />
                <h3 className="mt-7 text-lg font-medium leading-6 text-[#07111f]">
                  {title}
                </h3>
                <p className="mt-8 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#c0524b]">
                  {status}
                </p>
                <MissingDataAudioButton label={title} src={audioSrc} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
