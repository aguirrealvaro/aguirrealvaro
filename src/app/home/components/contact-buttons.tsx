import { Button } from "@/components/ui";

const ContactButtons = () => {
  return (
    <div className="flex gap-4">
      <Button asChild>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/aguirrealvaro"
        >
          View Linkedin
        </a>
      </Button>
      <Button variant="outlined" asChild>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/aguirrealvaro">
          View Github
        </a>
      </Button>
    </div>
  );
};

export { ContactButtons };
