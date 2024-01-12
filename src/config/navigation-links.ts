type InnerNavigationLink = {
  name: string;
  href: string;
  externalHref?: never;
};

export type OuterNavigationLink = {
  name: string;
  href?: never;
  externalHref: string;
};

export type NavigationLink = InnerNavigationLink | OuterNavigationLink;

export const NAVIGATION_LINKS: NavigationLink[] = [
  { name: "Home", href: "/" },
  { name: "Trajectory", href: "/trajectory" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", externalHref: "https://cv.aguirrealvaro.vercel.app" },
];
