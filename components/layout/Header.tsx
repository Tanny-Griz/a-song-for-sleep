"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/data/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dce5ec]/80 bg-white/60 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-5 py-4 sm:gap-4 sm:px-8 lg:px-10"
      >
        {navigationItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={[
                "rounded border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition focus-visible:bg-white/70",
                isActive
                  ? "border-[#9fb7c8] bg-white/80 text-[#1f79a3] shadow-[0_8px_24px_rgba(31,121,163,0.12)]"
                  : "border-transparent text-[#07111f] hover:border-[#9fb7c8] hover:bg-white/70 hover:text-[#1f79a3]"
              ].join(" ")}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
