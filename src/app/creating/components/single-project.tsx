import Image from "next/image";
import { Button, Typography } from "@/components/ui";
import { cn } from "@/utils/cn";

type SingleProjectType = {
  title: string;
  description: string;
  image: string;
  projectLink: string;
  codeLink: string;
  imgClassname?: string;
};

const SingleProject = ({
  title,
  description,
  image,
  projectLink,
  codeLink,
  imgClassname,
}: SingleProjectType) => {
  return (
    <div>
      <div>
        <Image
          src={image}
          alt={`${title} Picture`}
          width={600}
          height={300}
          className={cn("mb-4 h-52 rounded shadow-lg md:w-full", imgClassname)}
        />
      </div>
      <Typography.H4 className="mb-2">{title}</Typography.H4>
      <Typography.Paragraph className="mb-4 text-text-secondary">
        {description}
      </Typography.Paragraph>
      <div className="flex gap-4">
        <Button asChild>
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Button>
        <Button variant="outlined" asChild>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            View Source Code
          </a>
        </Button>
      </div>
    </div>
  );
};

export { SingleProject };