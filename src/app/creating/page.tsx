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
            title="lunero"
            description="Search movies, series and anime, and stream their torrents right in the browser, with subtitles."
            image="/lunero.svg"
            projectLink="https://www.lunerotv.com/"
            imgClassname="object-contain bg-black p-10"
            technologies={["React", "Tanstack", "Tailwind", "Shadcn", "Torrent"]}
          />
          <SingleProject
            title="tanstack-chat"
            description="Whatsapp clone"
            image="/tanstack-chat.svg"
            projectLink="https://chat.aguirrealvaro.dev/"
            codeLink="https://github.com/aguirrealvaro/tanstack-chat"
            imgClassname="object-cover"
            technologies={["React", "Tanstack", "Tailwind", "Shadcn", "Prisma", "Clerk auth"]}
          />
          <SingleProject
            title="ui"
            description="A design system built from scratch, without component libraries: Dialog, Alert, Accordion, Button and more, all customizable and accessible."
            image="/ui-kit.svg"
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
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default Creating;
