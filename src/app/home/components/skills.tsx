import { Badge, Typography } from "@/components/ui";

const skills = [
  "React",
  "Typescript",
  "NextJS",
  "React Query",
  "CSS-in-JS",
  "TailwindCSS",
  "React Testing Library",
  "Radix",
  "Git",
  "NodeJS",
  "Express",
  "NestJS",
];

const Skills = () => {
  return (
    <div>
      <Typography.H3 className="mb-4">Skills</Typography.H3>
      <div className="flex flex-wrap items-center gap-2">
        {skills.map((skill) => {
          return (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export { Skills };
