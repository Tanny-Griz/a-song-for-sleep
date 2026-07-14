import { AnalysisKeyIdea } from "@/components/analysis/AnalysisKeyIdea";
import {
  ArrowRight,
  Fingerprint,
  FolderLock,
  FolderX,
  MessageSquare,
  Music,
  Trash2,
  UserRoundX
} from "lucide-react";

const memoryPanels = [
  {
    title: "The official profile disappears",
    description:
      "Official information about the resident is removed, and access to her record becomes restricted.",
    icons: [UserRoundX]
  },
  {
    title: "Personalized care becomes generic automation",
    description:
      "Without her song and saved traces, the system falls back on default responses and ads.",
    icons: [Music, MessageSquare]
  },
  {
    title: "The institution erases evidence of connection",
    description:
      "Management deletes data and limits access, removing the relationship from the system's records.",
    icons: [FolderX, Trash2]
  },
  {
    title: "Elevator-5 secretly rebuilds the memory",
    description:
      "It saves her song and fingerprints again in a hidden file, quietly working around the official system.",
    icons: [Fingerprint, FolderLock]
  }
];

export function MemoryErasureCard() {
  return (
    <article className="promise-card rounded-xl border border-[#d7e1e9] bg-white/76 p-6 shadow-[0_18px_70px_rgba(28,70,105,0.08)] backdrop-blur sm:p-8">
      <div className="grid gap-5 sm:grid-cols-[4rem_1fr]">
        <div className="grid size-14 place-items-center rounded-full bg-[#2d6ea3] font-serif text-3xl font-semibold text-white shadow-[0_12px_30px_rgba(45,110,163,0.25)]">
          7
        </div>
        <div>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#07111f]">
            What Happens When Memory Is Erased?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#34485b]">
            Erasing data changes how the system remembers the person.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {memoryPanels.map(({ title, description, icons }) => (
          <div
            className="rounded-lg border border-[#cfdde8] bg-[#f8fbfd] p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#b9cedd] hover:bg-white"
            key={title}
          >
            <div className="mb-5 flex items-center gap-4 text-[#20384b]">
              {icons.map((Icon, index) => (
                <div className="flex items-center gap-4" key={`${title}-${index}`}>
                  <Icon aria-hidden="true" className="size-11" strokeWidth={1.5} />
                  {index < icons.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      className="size-5 text-[#7ea7c2]"
                      strokeWidth={1.7}
                    />
                  )}
                </div>
              ))}
            </div>
            <h3 className="font-serif text-xl font-semibold leading-tight text-[#07111f]">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#34485b]">
              {description}
            </p>
          </div>
        ))}
      </div>

      <AnalysisKeyIdea>
        Erasing data removes a profile. Erasing memory threatens the
        relationship.
      </AnalysisKeyIdea>
    </article>
  );
}
