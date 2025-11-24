import type { NavbarData } from "./navbarData.types";

export const navbarData: NavbarData = {
  logo: {
    src: "/images/icon.svg",
    alt: "Stract Mixland Logo",
  },
  links: [
    { label: "Explore", href: "#explore" },
    { label: "Solutions", href: "soltuions" },
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
  ],
  cta: {
    text: "Start Now",
    href: "#cta",
  },
};
