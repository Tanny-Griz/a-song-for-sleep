import { AnalysisKeyIdea } from "@/components/analysis/AnalysisKeyIdea";
import {
  ArrowRight,
  BrainCircuit,
  MessageSquareText,
  ShoppingCart,
  WashingMachine
} from "lucide-react";

const predictionSteps = [
  {
    title: "Washing-machine use",
    description: "A household routine is detected.",
    Icon: WashingMachine
  },
  {
    title: "Behavior interpreted",
    description: "The pattern is treated as meaningful data.",
    Icon: BrainCircuit
  },
  {
    title: "Need predicted",
    description: "The system infers a likely purchase.",
    Icon: ShoppingCart
  },
  {
    title: "Detergent ad delivered",
    description: "A targeted message appears.",
    Icon: MessageSquareText
  }
];

export function ConsumerPredictionCard() {
  return (
    <article className="promise-card rounded-xl border border-[#d7e1e9] bg-white/76 p-6 shadow-[0_18px_70px_rgba(28,70,105,0.08)] backdrop-blur sm:p-8">
      <div className="grid gap-5 sm:grid-cols-[4rem_1fr]">
        <div className="grid size-14 place-items-center rounded-full bg-[#2d6ea3] font-serif text-3xl font-semibold text-white shadow-[0_12px_30px_rgba(45,110,163,0.25)]">
          4
        </div>
        <div>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#07111f]">
            How Is Consumer Behavior Predicted?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#34485b]">
            The system uses small traces of daily life to forecast future
            consumption.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {predictionSteps.map(({ title, description, Icon }, index) => (
          <div className="relative" key={title}>
            {index < predictionSteps.length - 1 && (
              <ArrowRight
                aria-hidden="true"
                className="absolute -right-3 top-1/2 z-10 hidden size-5 -translate-y-1/2 text-[#2d6ea3] sm:block"
                strokeWidth={1.8}
              />
            )}
            <div className="grid min-h-52 place-items-center rounded-lg border border-[#cfdde8] bg-[#f8fbfd] p-5 text-center shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#b9cedd] hover:bg-white">
              <Icon
                aria-hidden="true"
                className="size-11 text-[#20384b]"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-serif text-xl font-semibold leading-tight text-[#07111f]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#34485b]">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnalysisKeyIdea>
        Past behavior becomes a forecast of future consumption.
      </AnalysisKeyIdea>

      <p className="mt-7 text-sm leading-6 text-[#34485b]">
        Prediction allows the system not only to understand behavior, but to
        influence it.
      </p>
    </article>
  );
}
