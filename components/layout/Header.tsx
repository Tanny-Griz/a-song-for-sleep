import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Analysis", href: "/analysis" },
  { label: "Reflection", href: "/reflection" }
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dce5ec]/80 bg-white/60 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-5 py-4 sm:gap-4 sm:px-8 lg:px-10"
      >
        {navigationItems.map((item) => (
          <Link
            className="rounded border border-transparent px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#07111f] transition hover:border-[#9fb7c8] hover:bg-white/70 hover:text-[#1f79a3] focus-visible:bg-white/70"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
