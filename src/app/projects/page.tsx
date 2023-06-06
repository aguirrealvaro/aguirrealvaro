import { FunctionComponent } from "react";
import { SingleProject } from "./common";
import { PageContainer, Wrapper } from "@/components";
import { Typography } from "@/components/ui";

const Projects: FunctionComponent = () => {
  return (
    <PageContainer>
      <Wrapper>
        <Typography.H3 className="mb-4">Projects</Typography.H3>
        <div className="flex flex-wrap gap-4">
          <SingleProject
            title="UI Kit"
            description="React custom hooks and isolated components with accesibility"
            image="/components.webp"
            projectLink="https://ui-kit7.vercel.app"
            codeLink="https://github.com/aguirrealvaro/ui-kit"
          />
          <SingleProject
            title="UI Kit"
            description="React custom hooks and isolated components with accesibility"
            image="/components.webp"
            projectLink="https://ui-kit7.vercel.app"
            codeLink="https://github.com/aguirrealvaro/ui-kit"
          />
          <SingleProject
            title="UI Kit"
            description="React custom hooks and isolated components with accesibility"
            image="/components.webp"
            projectLink="https://ui-kit7.vercel.app"
            codeLink="https://github.com/aguirrealvaro/ui-kit"
          />
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default Projects;