import type { NavigationLink, OuterNavigationLink } from "@/config/navigation-links";

export const getIsExternalLink = (link: NavigationLink): link is OuterNavigationLink => {
  return "externalHref" in link;
};
