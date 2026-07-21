import { Quote } from "lucide-react";

export function ClosingReflection() {
  return (
    <section className="bg-[#f7f9fb] px-5 py-[var(--section-padding-y)] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <article className="promise-card overflow-hidden rounded-xl border border-[#d7e1e9] bg-white/74 shadow-[0_18px_70px_rgba(28,70,105,0.08)] backdrop-blur">
          <div className="grid gap-8 border-l-4 border-[#2d6ea3] p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:p-10">
            <div>
              <h2 className="font-serif text-2xl font-semibold leading-tight text-[#07111f] sm:text-3xl">
                Closing Reflection
              </h2>

              <div className="mt-7 grid gap-5 sm:grid-cols-[3.5rem_1fr]">
                <Quote
                  aria-hidden="true"
                  className="size-12 text-[#2d6ea3] sm:size-14"
                  fill="currentColor"
                  strokeWidth={0}
                />
                <p className="font-serif text-2xl leading-snug text-[#07111f] xl:text-3xl xl:leading-snug">
                  This project taught me that analysis is not just something
                  you <span className="italic text-[#3f79a5]">write</span>, it
                  is something you{" "}
                  <span className="italic text-[#3f79a5]">build</span>,{" "}
                  <span className="italic text-[#3f79a5]">design</span>, and{" "}
                  <span className="italic text-[#3f79a5]">compose</span> with
                  intention.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-lg leading-8 text-[#34485b] sm:text-xl sm:leading-9">
                By bringing together code, visual design, sound, and literary
                theory, I created an argument that readers could not only read
                but also see, hear, and navigate. These modes invite readers to
                think critically about the tension between convenience and
                surveillance, and between data collection and human
                understanding.
              </p>

              <div className="mt-8 h-px w-24 bg-[#d7e1e9]">
                <div className="h-px w-10 translate-y-2 bg-[#4f9fc4]" />
              </div>

              <p className="mt-8 text-xl font-bold leading-8 text-[#0d3558] sm:text-2xl sm:leading-9">
                Multimodality did not simply support my argument; it helped
                readers experience it.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
