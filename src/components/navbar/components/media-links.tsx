import { Github, Linkedin } from "lucide-react";
import { Icon, getIconButtonVariants } from "@/components/ui";
import { cn } from "@/utils/cn";

const mediaLinks = [
  {
    href: "https://github.com/aguirrealvaro",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/aguirrealvaro",
    icon: Linkedin,
  },
];

const MediaLinks = () => {
  return (
    <>
      {mediaLinks.map(({ href, icon }, index) => {
        return (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(getIconButtonVariants())}
          >
            <Icon icon={icon} />
          </a>
        );
      })}
    </>
  );
};

export { MediaLinks };
