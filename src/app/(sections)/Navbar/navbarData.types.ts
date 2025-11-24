// Types
export interface LinkItem {
  label: string;
  href: string;
  src?: string;
}

export interface CTAButton {
  text: string;
  href?: string;
  onClick?: () => void;
}

export interface Logo {
  src: string;
  alt: string;
}

export interface NavbarData {
  logo: Logo;
  links: LinkItem[];
  cta: CTAButton;
}
