import { Github, Linkedin } from "lucide-react";
import { Icon, IconButton } from "@/components/ui";

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
          <IconButton key={index} asChild>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon icon={icon} />
            </a>
          </IconButton>
        );
      })}
    </>
  );
};

export { MediaLinks };
