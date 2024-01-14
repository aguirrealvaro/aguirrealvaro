import { buttonVariants } from "@/components/ui";
import { cn } from "@/utils/cn";

const ContactButtons = () => {
  return (
    <div className="flex gap-4">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/aguirrealvaro"
        className={cn(buttonVariants())}
      >
        View Linkedin
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/aguirrealvaro"
        className={cn(buttonVariants({ variant: "outlined" }))}
      >
        View Github
      </a>
    </div>
  );
};

export { ContactButtons };
