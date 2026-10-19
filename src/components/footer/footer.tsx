import { Wrapper } from "@/components/wrapper";

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <div className="py-4 text-center text-sm text-text-secondary">
          <span>Made with Next, React Server Components, Server Actions & MDX</span>
        </div>
      </Wrapper>
    </footer>
  );
};

export { Footer };
