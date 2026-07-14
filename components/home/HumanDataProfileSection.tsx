import Image from "next/image";
import {
  Activity,
  CalendarDays,
  CircleHelp,
  Heart,
  HeartPulse,
  Hand,
  MapPin,
  Monitor,
  Music2,
  Puzzle,
  Shield,
  Smartphone,
  Stethoscope,
  UserRound,
  WashingMachine
} from "lucide-react";

const humanDetails = [
  {
    text: "A 93-year-old woman",
    Icon: Heart
  },
  {
    text: "Lives alone",
    Icon: UserRound
  },
  {
    text: 'Loves one song: "A Song for Sleep"',
    Icon: Music2
  },
  {
    text: "Touches the wall because she remembers buttons",
    Icon: Hand
  },
  {
    text: "Goes to B-Eight",
    Icon: MapPin
  },
  {
    text: "Health challenges (Parkinson's symptoms)",
    Icon: Stethoscope
  },
  {
    text: "Feels fear, pain, and loneliness",
    Icon: HeartPulse
  },
  {
    text: "Shows kindness and gratitude",
    Icon: Heart
  }
];

const dataDetails = [
  {
    label: "age",
    value: "93",
    Icon: CalendarDays
  },
  {
    label: "mobility",
    value: "limited",
    Icon: UserRound
  },
  {
    label: "heart rate",
    value: "normal",
    Icon: Activity
  },
  {
    label: "blood pressure",
    value: "normal",
    Icon: HeartPulse
  },
  {
    label: "food data",
    value: "limited",
    Icon: Shield
  },
  {
    label: "washing machine",
    value: "most used",
    Icon: WashingMachine
  },
  {
    label: "phone",
    value: "off / access denied",
    Icon: Smartphone
  },
  {
    label: "computer",
    value: "access denied",
    Icon: Monitor
  },
  {
    label: "music library",
    value: "1 song detected",
    Icon: Music2
  },
  {
    label: "preferences",
    value: "unknown",
    Icon: CircleHelp
  },
  {
    label: "risk score",
    value: "pending",
    Icon: Shield
  }
];

export function HumanDataProfileSection() {
  return (
    <section className="border-b border-[#d7e1e9] bg-[#f5f8fb] px-5 py-[var(--section-padding-y)] sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.22fr_0.78fr] lg:items-center">
        <div className="promise-reveal">
          <div className="mb-5">
            <span className="mb-4 grid size-14 place-items-center rounded-full border border-[#8fb3ca] bg-white/72 text-[#356f92] shadow-sm">
              <Puzzle aria-hidden="true" className="size-7" strokeWidth={1.7} />
            </span>
            <h2 className="font-serif text-4xl leading-[0.95] text-[#07111f] sm:text-5xl">
              Human vs.
              <br />
              Data Profile
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#34485b] sm:text-base sm:leading-7">
            Elevator-5 can read the data, but it cannot understand the human
            behind it.
          </p>
        </div>

        <div className="promise-card rounded-xl border border-[#cbdbe7] bg-white/72 shadow-[0_18px_70px_rgba(28,70,105,0.08)] backdrop-blur">
          <div className="grid overflow-hidden rounded-xl lg:grid-cols-[1fr_0.7fr_1fr]">
            <div className="bg-[#eff8f4]/78 p-6 sm:p-8">
              <div className="mb-6 flex items-start gap-4 border-b border-[#d9e8e3] pb-5">
                <UserRound aria-hidden="true" className="size-9 text-[#3f766d]" strokeWidth={1.7} />
                <div>
                  <h3 className="text-2xl font-semibold text-[#07111f]">Human Being</h3>
                  <p className="mt-1 text-sm text-[#5f7281]">Who she is</p>
                </div>
              </div>

              <ul className="space-y-4">
                {humanDetails.map(({ text, Icon }) => (
                  <li className="grid grid-cols-[1.5rem_1fr] gap-4 text-sm leading-6 text-[#223748]" key={text}>
                    <Icon aria-hidden="true" className="mt-0.5 size-5 text-[#567f78]" strokeWidth={1.7} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative grid min-h-80 place-items-center border-y border-[#d7e1e9] bg-[linear-gradient(90deg,rgba(239,248,244,0.74),rgba(238,245,251,0.9))] p-8 lg:border-x lg:border-y-0">
              <div className="absolute inset-y-0 left-1/2 hidden border-l border-dashed border-[#4f89ad] lg:block" />
              <div className="profile-orbit relative grid size-56 place-items-center rounded-full border border-[#d5e2eb] bg-white/38">
                <div className="relative size-36 overflow-hidden rounded-full border-4 border-[#a8c4db] bg-[#d9e5ed] shadow-[0_18px_55px_rgba(28,70,105,0.18)]">
                  <Image
                    src="/images/acc.png"
                    alt="Portrait of the elderly tenant represented inside a circular profile scan."
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-serif text-4xl font-semibold text-[#07111f]">
                vs.
              </p>
            </div>

            <div className="bg-[#eef5fb]/82 p-6 sm:p-8">
              <div className="mb-6 flex items-start gap-4 border-b border-[#d9e5ee] pb-5">
                <Shield aria-hidden="true" className="size-9 text-[#4f89ad]" strokeWidth={1.7} />
                <div>
                  <h3 className="text-2xl font-semibold text-[#07111f]">Data Profile</h3>
                  <p className="mt-1 text-sm text-[#5f7281]">What the system can see</p>
                </div>
              </div>

              <ul className="space-y-3">
                {dataDetails.map(({ label, value, Icon }) => (
                  <li
                    className="grid grid-cols-[1.5rem_1fr] gap-4 border-b border-[#d8e5ee] pb-2 text-sm leading-6 text-[#223748]"
                    key={label}
                  >
                    <Icon aria-hidden="true" className="mt-0.5 size-5 text-[#4f89ad]" strokeWidth={1.7} />
                    <span>
                      <span className="font-medium">{label}: </span>
                      {value}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <div
                  aria-label="Profile confidence low, five percent complete"
                  aria-valuemax={100}
                  aria-valuemin={0}
                  aria-valuenow={5}
                  className="h-4 overflow-hidden rounded-full border border-[#c2d4e2] bg-[#dce8f1]"
                  role="progressbar"
                >
                  <div className="profile-confidence-fill h-full rounded-full bg-[#4f89d8]" />
                </div>
                <p className="mt-3 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-[#3d78ad]">
                  Profile confidence: low
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 border-t border-[#d7e1e9] px-6 py-5 text-sm font-medium text-[#34485b] sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <p>The building expects complete data to predict and serve.</p>
            <span className="hidden h-7 w-px bg-[#d7e1e9] lg:block" />
            <p>But some lives cannot be measured, only witnessed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
