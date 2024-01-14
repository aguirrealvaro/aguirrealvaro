import { Typography } from "@/components/ui";

const IntroductionText = () => {
  return (
    <div className="mb-8">
      <Typography.Paragraph>
        Hi, I&apos;m a developer based in Buenos Aires, Argentina. With over 4 years of
        experience in web development, I specialize in{" "}
        <Typography.Bold>front-end</Typography.Bold> development while also having a solid
        background in back-end technologies.
      </Typography.Paragraph>
      <Typography.Paragraph>
        I&apos;m passionate about modern web architectures, building{" "}
        <Typography.Bold>user-friendly</Typography.Bold> and simple digital products. I believe
        in writing <Typography.Bold>clean</Typography.Bold> and{" "}
        <Typography.Bold>efficient code</Typography.Bold> that&apos;s easy to{" "}
        <Typography.Bold>maintain</Typography.Bold> and{" "}
        <Typography.Bold>scale</Typography.Bold>.
      </Typography.Paragraph>
      <Typography.Paragraph>
        I specialize in working with technologies such as{" "}
        <Typography.Bold>
          React, TypeScript, Next, React Query, Styled Components, Tailwind, Node, Nest{" "}
        </Typography.Bold>
        and <Typography.Bold>Prisma</Typography.Bold>, among others. I am always willing to
        learn and stay up-to-date with the latest trends and technologies.
      </Typography.Paragraph>
      <Typography.Paragraph>
        I&apos;ll be sharing some of my personal projects and publishing articles about topics
        that interest me and things I&apos;ve learned throughout my career, just for fun.
      </Typography.Paragraph>
    </div>
  );
};

export { IntroductionText };