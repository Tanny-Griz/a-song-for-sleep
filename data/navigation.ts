export type NavigationItem = {
  label: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { label: "Experience", href: "/" },
  { label: "Analysis", href: "/analysis" },
  { label: "Reflection", href: "/reflection" }
];
