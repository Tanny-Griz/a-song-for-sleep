import {
  ArrowRight,
  BadgeAlert,
  Calendar,
  CircleAlert,
  ClipboardPlus,
  Eye,
  Heart,
  IdCard,
  MapPin,
  Monitor,
  Music,
  ShoppingCart,
  Smartphone,
  UserRound,
  WashingMachine
} from "lucide-react";

const classificationPanels = [
  {
    title: "The profile appears incomplete",
    description:
      "Missing data means the system cannot predict, personalize, or understand her behavior.",
    Icon: IdCard,
    accent: "blue"
  },
  {
    title: "Difference becomes an anomaly",
    description:
      "The system does not see uniqueness; it flags what is unprecedented as a problem.",
    Icon: CircleAlert,
    accent: "coral"
  },
  {
    title: "Surveillance intensifies",
    description:
      "To fill the gaps, the system collects more data from every device, location, and movement.",
    Icon: Eye,
    accent: "blue"
  },
  {
    title: "The system risks misunderstanding the person",
    description:
      "Without context or empathy, conclusions may be wrong or even harmful.",
    Icon: ClipboardPlus,
    accent: "coral"
  }
];

const profileSignals = [
  { Icon: Calendar, label: "schedule missing" },
  { Icon: Music, label: "music trace limited" },
  { Icon: ShoppingCart, label: "purchase pattern unavailable" },
  { Icon: Heart, label: "human feeling unseen" }
];

const surveillanceSignals = [
  { Icon: Smartphone, label: "phone" },
  { Icon: Monitor, label: "screen" },
  { Icon: WashingMachine, label: "appliance" },
  { Icon: MapPin, label: "location" }
];

function ClassificationVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="rounded-lg border border-[#cfdde8] bg-[#f8fbfd] p-4">
        <div className="grid gap-4 sm:grid-cols-[4rem_1fr] sm:items-center">
          <UserRound
            aria-hidden="true"
            className="size-14 rounded-full bg-[#e6edf4] p-3 text-[#466781]"
            strokeWidth={1.45}
          />
          <div className="space-y-2">
            {profileSignals.map(({ Icon, label }) => (
              <div
                className="flex items-center gap-3 text-[#5a7082]"
                key={label}
              >
                <Icon aria-hidden="true" className="size-4" strokeWidth={1.5} />
                <span className="h-px flex-1 bg-[#c7d5df]" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#dbe5ed]">
          <div className="h-full w-[18%] rounded-full bg-[#2d6ea3]" />
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="grid min-h-36 place-items-center rounded-lg border border-[#cfdde8] bg-[radial-gradient(circle,#fff_0%,#fff_18%,#f5f8fb_19%,#f5f8fb_33%,#fff_34%)]">
        <BadgeAlert
          aria-hidden="true"
          className="size-12 rounded-full bg-[#fdecea] p-2 text-[#cf5b56]"
          strokeWidth={1.45}
        />
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="relative grid min-h-36 place-items-center rounded-lg border border-[#cfdde8] bg-[#f8fbfd]">
        <Eye
          aria-hidden="true"
          className="size-14 rounded-full border border-[#cfdde8] bg-white p-3 text-[#2d6ea3]"
          strokeWidth={1.45}
        />
        {surveillanceSignals.map(({ Icon, label }, signalIndex) => (
          <Icon
            aria-hidden="true"
            className={[
              "absolute size-8 rounded-full bg-white p-1.5 text-[#5a7082] shadow-sm",
              signalIndex === 0 ? "left-5 top-5" : "",
              signalIndex === 1 ? "right-5 top-5" : "",
              signalIndex === 2 ? "bottom-5 left-6" : "",
              signalIndex === 3 ? "bottom-5 right-6" : ""
            ].join(" ")}
            key={label}
            strokeWidth={1.45}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid min-h-36 place-items-center rounded-lg border border-[#cfdde8] bg-[#f8fbfd]">
      <div className="flex items-center gap-4">
        <ClipboardPlus
          aria-hidden="true"
          className="size-16 text-[#7a91a4]"
          strokeWidth={1.45}
        />
        <CircleAlert
          aria-hidden="true"
          className="size-12 rounded-full bg-[#fdecea] p-2 text-[#cf5b56]"
          strokeWidth={1.45}
        />
      </div>
    </div>
  );
}

export function ClassificationFailureCard() {
  return (
    <article className="promise-card rounded-xl border border-[#d7e1e9] bg-white/76 p-6 shadow-[0_18px_70px_rgba(28,70,105,0.08)] backdrop-blur sm:p-8">
      <div className="grid gap-5 sm:grid-cols-[4rem_1fr]">
        <div className="grid size-14 place-items-center rounded-full bg-[#2d6ea3] font-serif text-3xl font-semibold text-white shadow-[0_12px_30px_rgba(45,110,163,0.25)]">
          5
        </div>
        <div>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#07111f]">
            What Happens When a Person Cannot Be Classified?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#34485b]">
            When data is incomplete, the system treats difference as a problem.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-[#cfdde8] bg-[#f8fbfd] p-5">
        <p className="font-serif text-xl font-semibold italic leading-snug text-[#07111f]">
          &ldquo;But the new resident at 5305 has no information on record. No
          schedule, music, cultural content, preferred brands, nothing&rdquo;
          <span className="not-italic"> (Chung).</span>
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {classificationPanels.map(({ title, description, Icon, accent }, index) => (
          <div className="relative" key={title}>
            {index < classificationPanels.length - 1 && (
              <ArrowRight
                aria-hidden="true"
                className="absolute -right-3 top-1/2 z-10 hidden size-5 -translate-y-1/2 text-[#2d6ea3] sm:block"
                strokeWidth={1.8}
              />
            )}
            <div className="h-full rounded-lg border border-[#cfdde8] bg-white/76 p-5 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Icon
                  aria-hidden="true"
                  className={[
                    "size-10 rounded-full p-2",
                    accent === "coral"
                      ? "bg-[#fdecea] text-[#cf5b56]"
                      : "bg-[#e3eef8] text-[#2d6ea3]"
                  ].join(" ")}
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-xl font-semibold leading-tight text-[#07111f]">
                  {title}
                </h3>
              </div>
              <ClassificationVisual index={index} />
              <p className="mt-5 text-sm leading-6 text-[#34485b]">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 grid gap-4 rounded-lg border border-[#cfdde8] bg-[#f8fbfd] p-5 sm:grid-cols-[3rem_1fr_2rem_1fr] sm:items-center">
        <Heart
          aria-hidden="true"
          className="size-9 text-[#2d6ea3]"
          strokeWidth={1.5}
        />
        <p className="text-sm leading-6 text-[#34485b]">
          <span className="font-serif text-xl font-semibold text-[#07111f]">
            Systems are built to classify.
          </span>{" "}
          Human value is not completed by data.
        </p>
        <ArrowRight
          aria-hidden="true"
          className="hidden size-6 text-[#7ea7c2] sm:block"
          strokeWidth={1.6}
        />
        <p className="font-serif text-xl font-semibold leading-snug text-[#07111f]">
          What cannot be classified may still be deeply human.
        </p>
      </div>
    </article>
  );
}
