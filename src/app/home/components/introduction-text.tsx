import { Link, Typography } from "@/components/ui";
const { Paragraph, Bold } = Typography;

const IntroductionText = () => {
  return (
    <div className="mb-8">
      <Paragraph>
        Hi, I&apos;m a developer based in Buenos Aires, Argentina. With over 4 years of
        experience in web development, I specialize in <Bold>front-end</Bold> development while
        also having a solid background in back-end technologies, allowing me to build apps from
        scratch.
      </Paragraph>
      <Paragraph>
        I&apos;m passionate about modern web architectures, building <Bold>user-friendly</Bold>{" "}
        and simple digital products. I believe in writing <Bold>clean</Bold> and{" "}
        <Bold>efficient code</Bold> that&apos;s easy to <Bold>maintain</Bold> and{" "}
        <Bold>scale</Bold>.
      </Paragraph>
      <Paragraph>
        I am always willing to learn and stay up-to-date with the latest trends and
        technologies. Among my skills, <Bold>React</Bold>, <Bold>Next</Bold> and{" "}
        <Bold>TypeScript</Bold> stand out as my primary areas of interest.
      </Paragraph>
      <Paragraph>
        I learn a lot from the community, and my goal is to reciprocate the same here. I&apos;
        ll be sharing some of my personal projects and publishing notes about topics that
        interest me and things I&apos;ve learned throughout my career.
      </Paragraph>
    </div>
  );
};

export { IntroductionText };
