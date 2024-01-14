import { Github, Linkedin } from "lucide-react";
import { IconButton } from "@/components/ui";
import { DEFAULT_ICON_SIZE } from "@/constants";

const MediaLinks = () => {
  return (
    <>
      <IconButton asChild>
        <a href="https://github.com/aguirrealvaro" target="_blank" rel="noopener noreferrer">
          <Github size={DEFAULT_ICON_SIZE} />
        </a>
      </IconButton>
      <IconButton asChild>
        <a
          href="https://www.linkedin.com/in/aguirrealvaro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={DEFAULT_ICON_SIZE} />
        </a>
      </IconButton>
    </>
  );
};

export { MediaLinks };
