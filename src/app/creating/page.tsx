import { SingleProject } from "./components";
import { PageContainer, Wrapper } from "@/components";
import { Typography } from "@/components/ui";

const Creating = () => {
  return (
    <PageContainer>
      <Wrapper>
        <Typography.H3 className="mb-4">Creating</Typography.H3>
        <span className="mb-8 inline-block text-text-secondary">
          Some of the side projects I&apos;m currently working on:
        </span>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-1 md:gap-14">
          <SingleProject
            title="ui"
            description="Typical components of a design system out of the box such as Dialog, Alert, Accordion, Button, etc."
            image="/components.webp"
            projectLink="https://ui-kit7.vercel.app"
            codeLink="https://github.com/aguirrealvaro/ui-kit"
            imgClassname="object-cover"
            technologies={["React", "CSS-in-JS", "Storybook"]}
          />
          <SingleProject
            title="aguirrealvaro.dev"
            description="My personal website and blog you are currently on. With a visit counter and a like button for each post."
            image="/aa.jpg"
            projectLink="https://www.aguirrealvaro.dev/"
            codeLink="https://github.com/aguirrealvaro/aguirrealvaro"
            imgClassname="object-contain bg-black"
            technologies={["Next", "RSC", "Server Actions", "Prisma", "MDX"]}
          />
          <SingleProject
            title="next-aa-app"
            description="NextJS boilerplate with Tailwind, Typescript, Dark Mode, ESLint, Prettier, Precommit and more."
            image="/terminal2.png"
            projectLink="https://template.aguirrealvaro.dev/"
            codeLink="https://github.com/aguirrealvaro/next-aa-app"
            imgClassname="object-contain bg-black"
            technologies={["Next", "CFG"]}
          />
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default Creating;
