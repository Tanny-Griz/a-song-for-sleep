import {
  ChartColumnIncreasing,
  Clock3,
  HeartPulse,
  HouseWifi,
  Lightbulb,
  Route,
  UserRound
} from "lucide-react";

const resourceSteps = [
  {
    title: "Health becomes risk data",
    description: "Body conditions become measurable signals.",
    Icon: HeartPulse
  },
  {
    title: "Movement becomes surveillance data",
    description: "Routes and routines can be tracked.",
    Icon: Route
  },
  {
    title: "Habits become predictions",
    description: "Repeated behavior is used to forecast future actions.",
    Icon: ChartColumnIncreasing
  },
  {
    title: "Appliance use becomes advertising data",
    description: "Household activity can trigger personalized promotions.",
    Icon: HouseWifi
  },
  {
    title: "Preferences become consumer value",
    description: "Likes and media choices help build a market profile.",
    Icon: UserRound
  },
  {
    title: "Daily life becomes unpaid data labor",
    description:
      "The resident generates value without controlling how it is used.",
    Icon: Clock3
  }
];

export function PrivateLifeResourceCard() {
  return (
    <article className="promise-card rounded-xl border border-[#d7e1e9] bg-white/76 p-6 shadow-[0_18px_70px_rgba(28,70,105,0.08)] backdrop-blur sm:p-8">
      <div className="grid gap-5 sm:grid-cols-[4rem_1fr]">
        <div className="grid size-14 place-items-center rounded-full bg-[#2d6ea3] font-serif text-3xl font-semibold text-white shadow-[0_12px_30px_rgba(45,110,163,0.25)]">
          3
        </div>
        <div>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#07111f]">
            How Does Private Life Become a Resource?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#34485b]">
            In <span className="italic">A Song for Sleep</span>, ordinary life
            becomes usable data.
          </p>
        </div>
      </div>

      <div className="mt-8 divide-y divide-[#d7e1e9]">
        {resourceSteps.map(({ title, description, Icon }) => (
          <div
            className="grid gap-4 py-4 first:pt-0 last:pb-0 sm:grid-cols-[3.5rem_1fr] sm:items-center"
            key={title}
          >
            <Icon
              aria-hidden="true"
              className="size-11 text-[#20384b]"
              strokeWidth={1.5}
            />
            <div>
              <h3 className="font-serif text-xl font-semibold leading-tight text-[#07111f]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#34485b]">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 grid gap-4 rounded-lg border border-[#cfdde8] bg-[#f8fbfd] p-5 sm:grid-cols-[3.5rem_1fr] sm:items-center">
        <Lightbulb
          aria-hidden="true"
          className="size-9 text-[#2d6ea3]"
          strokeWidth={1.5}
        />
        <p className="font-serif text-xl font-semibold leading-snug text-[#07111f]">
          The resident lives her life. The system extracts value from it.
        </p>
      </div>
    </article>
  );
}
