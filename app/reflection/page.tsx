import Image from "next/image";

export default function ReflectionPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fa] text-[#07111f]">
      <section className="relative isolate overflow-hidden border-b border-[#d7e1e9] bg-[#f7f9fb] px-5 pb-[var(--section-padding-y)] pt-[calc(var(--section-padding-y)+4rem)] sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.82),rgba(238,245,251,0.76))]" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(79,137,173,0.14),transparent_58%)] lg:block" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
          <div className="max-w-xl">
            <h1 className="font-serif text-[clamp(4rem,18vw,6.7rem)] leading-[0.82] text-[#07111f] sm:text-[clamp(5.5rem,11vw,7.8rem)] lg:text-[clamp(5.8rem,8vw,8.8rem)]">
              Project Reflection.
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-8 tracking-[0.08em] text-[#4f7897] sm:text-2xl sm:leading-10">
              Composing a literary argument through code, image, animation, and interaction.
            </p>

            <div className="mt-8 h-px w-24 bg-[#4f9fc4]">
              <div className="h-px w-10 translate-y-2 bg-[#b7c8d5]" />
            </div>

            <p className="mt-9 max-w-lg text-base leading-8 text-[#34485b] sm:text-lg">
              This site is both an analysis of{" "}
              <span className="italic">A Song for Sleep</span> and a reflection
              on what it means to read, design, and build with purpose in the
              digital age.
            </p>
          </div>

          <div className="relative hidden justify-center lg:flex">
            <div className="profile-orbit relative grid size-[28rem] place-items-center rounded-full border border-[#d5e2eb] bg-white/36">
              <div className="relative size-80 overflow-hidden rounded-full border-4 border-[#d5e2eb] bg-[#d9e5ed] shadow-[0_24px_70px_rgba(28,70,105,0.18)]">
                <Image
                  src="/images/acc.png"
                  alt="Portrait of the elderly tenant used as the human center of the reflection page."
                  fill
                  sizes="320px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
