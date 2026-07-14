import {
  Building2,
  Camera,
  Cpu,
  Database,
  HeartPulse,
  Megaphone
} from "lucide-react";

const beneficiaries = [
  {
    title: "Building Management",
    description:
      "Uses resident data to optimize operations, monitor risk, reduce costs, and control the property more efficiently.",
    Icon: Building2
  },
  {
    title: "Technology & AI Providers",
    description:
      "Use collected behavior to improve algorithms, train systems, expand infrastructure, and increase dependence on smart services.",
    Icon: Cpu
  },
  {
    title: "Advertisers & Commercial Platforms",
    description:
      "Turn daily habits, purchases, and preferences into targeted promotions, recommendations, and consumer influence.",
    Icon: Megaphone
  },
  {
    title: "Insurance & Healthcare Systems",
    description:
      "Use health and behavioral data to assess risk, intervene, personalize services, or shape treatment decisions.",
    Icon: HeartPulse
  },
  {
    title: "Security & Surveillance Systems",
    description:
      "Gain visibility into movement, access, anomalies, rule enforcement, and emergency response.",
    Icon: Camera
  },
  {
    title: "Data Brokers & Analytics Companies",
    description:
      "Aggregate personal traces into profiles, scores, forecasts, and models that can be sold or monetized.",
    Icon: Database
  }
];

export function DataBeneficiariesCard() {
  return (
    <article className="promise-card rounded-xl border border-[#d7e1e9] bg-white/76 p-6 shadow-[0_18px_70px_rgba(28,70,105,0.08)] backdrop-blur sm:p-8">
      <div className="grid gap-5 sm:grid-cols-[4rem_1fr]">
        <div className="grid size-14 place-items-center rounded-full bg-[#2d6ea3] font-serif text-3xl font-semibold text-white shadow-[0_12px_30px_rgba(45,110,163,0.25)]">
          2
        </div>
        <div>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#07111f]">
            Who Benefits from Collected Data?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#34485b]">
            Collected data rarely serves only the person who produces it. It
            creates value for institutions that monitor, predict, manage, and
            profit from human behavior.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {beneficiaries.map(({ title, description, Icon }) => (
          <div
            className="group rounded-lg border border-[#cfdde8] bg-[#f8fbfd] p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#b9cedd] hover:bg-white"
            key={title}
          >
            <Icon
              aria-hidden="true"
              className="mb-5 size-11 text-[#20384b] transition duration-300 group-hover:text-[#2d6ea3]"
              strokeWidth={1.5}
            />
            <h3 className="font-serif text-xl font-semibold leading-tight text-[#07111f]">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#34485b]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
