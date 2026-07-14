import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-[#0f2b3f] bg-[#07111f] px-5 py-14 text-white sm:px-8 lg:px-10">
      <Image
        src="/images/footer.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[50%_70%]"
      />
      <div className="absolute bottom-0 left-0 top-0 hidden w-[46vw] max-w-[38rem] opacity-55 mix-blend-luminosity [mask-image:linear-gradient(90deg,black_0%,black_52%,transparent_100%)] sm:block">
        <Image
          src="/images/acc.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 46vw, 38rem"
          className="object-cover object-[45%_42%]"
        />
        <div className="absolute inset-0 bg-[#07111f]/38" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.58),rgba(7,17,31,0.2)_45%,rgba(7,17,31,0.5))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.02),rgba(7,17,31,0.48))]" />

      <div className="relative z-10 mx-auto grid min-h-56 max-w-7xl items-center lg:grid-cols-[0.34fr_0.42fr_0.24fr]">
        <div className="hidden lg:block" />
        <div>
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            What makes a person knowable?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/86 sm:text-base sm:leading-7">
            This project invites us to look beyond data, to listen for the
            parts of a person that cannot be measured, and to imagine
            technologies that serve humanity, not the other way around.
          </p>
          <div className="mt-6 flex items-center gap-4 text-white/80">
            <span className="h-px w-20 bg-white/45" />
            <span className="size-3 rounded-full border border-white/80" />
            <span className="h-px w-20 bg-white/45" />
          </div>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-white/62">
            Created by Tanya Kovalenko
            <span className="mx-3 text-white/35">/</span>
            <a
              className="border-b border-white/28 pb-1 text-white/78 transition hover:border-white/70 hover:text-white"
              href="https://okwebdev.com"
              rel="noreferrer"
              target="_blank"
            >
              okwebdev.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
