import { AnalysisKeyIdea } from "@/components/analysis/AnalysisKeyIdea";
import {
  BookHeart,
  Building2,
  ChartColumnIncreasing,
  Flower2,
  HandHeart,
  Heart,
  HeartHandshake,
  Music,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target
} from "lucide-react";

const systemValues = [
  {
    label: "Predictable routines",
    Icon: ChartColumnIncreasing
  },
  {
    label: "Purchases & preferences",
    Icon: ShoppingCart
  },
  {
    label: "Compliance & productivity",
    Icon: ShieldCheck
  },
  {
    label: "Risk scores & anomalies",
    Icon: Target
  },
  {
    label: "Monetizable attention",
    Icon: Sparkles
  }
];

const humanValues = [
  {
    label: "Memory & meaning",
    Icon: BookHeart
  },
  {
    label: "Grief & tenderness",
    Icon: Flower2
  },
  {
    label: "Love, songs that soothe",
    Icon: Music
  },
  {
    label: "Kindness without metric",
    Icon: HandHeart
  },
  {
    label: "Presence & companionship",
    Icon: HeartHandshake
  }
];

export function CareBeyondValueCard() {
  return (
    <article className="promise-card rounded-xl border border-[#d7e1e9] bg-white/76 p-6 shadow-[0_18px_70px_rgba(28,70,105,0.08)] backdrop-blur sm:p-8">
      <div className="grid gap-5 sm:grid-cols-[4rem_1fr]">
        <div className="grid size-14 place-items-center rounded-full bg-[#2d6ea3] font-serif text-3xl font-semibold text-white shadow-[0_12px_30px_rgba(45,110,163,0.25)]">
          8
        </div>
        <div>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#07111f]">
            What makes a person valuable when they can no longer produce useful data?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#34485b]">
            The building measures value through data, but Elevator-5 learns to
            recognize memory, vulnerability, and connection.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-[#cfdde8] bg-[#f8fbfd]">
          <div className="flex items-center gap-3 border-b border-[#cfdde8] bg-[#eef5fa] p-4 text-[#2d6ea3]">
            <Building2 aria-hidden="true" className="size-9" strokeWidth={1.5} />
            <h3 className="font-serif text-xl font-semibold">
              Value to the System
            </h3>
          </div>
          <div className="divide-y divide-[#d7e1e9]">
            {systemValues.map(({ label, Icon }) => (
              <div className="grid gap-3 p-4 sm:grid-cols-[2.5rem_1fr] sm:items-center" key={label}>
                <Icon
                  aria-hidden="true"
                  className="size-8 text-[#2d6ea3]"
                  strokeWidth={1.5}
                />
                <p className="text-sm font-semibold leading-6 text-[#34485b]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#cfdedc] bg-[#f8fcfb]">
          <div className="flex items-center gap-3 border-b border-[#cfdedc] bg-[#edf8f6] p-4 text-[#3d8a83]">
            <Heart aria-hidden="true" className="size-9" strokeWidth={1.5} />
            <h3 className="font-serif text-xl font-semibold">Human Value</h3>
          </div>
          <div className="divide-y divide-[#d9e8e6]">
            {humanValues.map(({ label, Icon }) => (
              <div className="grid gap-3 p-4 sm:grid-cols-[2.5rem_1fr] sm:items-center" key={label}>
                <Icon
                  aria-hidden="true"
                  className="size-8 text-[#3d8a83]"
                  strokeWidth={1.5}
                />
                <p className="text-sm font-semibold leading-6 text-[#34485b]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnalysisKeyIdea>
        Care is not data. Love is not a metric. Dignity is not for sale.
      </AnalysisKeyIdea>
    </article>
  );
}
