import { Button, Link } from "@/components/ui";

const ContactButtons = () => {
  return (
    <div className="flex gap-4">
      <Button asChild>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/aguirrealvaro"
          colorScheme="neutral"
          underline={false}
        >
          View Linkedin
        </Link>
      </Button>
      <Button variant="outlined" asChild>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/aguirrealvaro"
          colorScheme="neutral"
          underline={false}
        >
          View Github
        </Link>
      </Button>
    </div>
  );
};

export { ContactButtons };
