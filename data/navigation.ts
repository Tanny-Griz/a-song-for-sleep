export type NavigationItem = {
  label: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Analysis", href: "/analysis" },
  { label: "Reflection", href: "/reflection" },
  { label: "Works Cited", href: "/works-cited" }
];
