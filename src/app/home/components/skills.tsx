import { Badge, Typography } from "@/components/ui";

const skills = [
  "React",
  "Typescript",
  "NextJS",
  "React Query",
  "CSS-in-JS",
  "Tailwind",
  "React Testing Library",
  "Git",
  "NodeJS",
  "Express",
  "Nest",
];

const Skills = () => {
  return (
    <div>
      <Typography.H3 className="mb-4">Skills</Typography.H3>
      <div className="flex flex-wrap items-center gap-2">
        {skills.map((skill) => {
          return <Badge key={skill}>{skill}</Badge>;
        })}
      </div>
    </div>
  );
};

export { Skills };
