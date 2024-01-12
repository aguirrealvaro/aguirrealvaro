import { Wrapper } from "@/components";

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <div className="flex flex-col items-center py-4 text-center text-sm text-text-secondary">
          <span>Made with Next, Typescript, Tailwind, Prisma, React Query & MDX</span>
          <span>Deployed to Vercel & PlanetScale</span>
        </div>
      </Wrapper>
    </footer>
  );
};

export { Footer };
