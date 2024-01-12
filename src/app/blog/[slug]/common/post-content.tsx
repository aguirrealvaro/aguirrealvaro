import Image, { ImageProps } from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Link, Typography } from "@/components/ui";

type PostContentProps = {
  content: string;
};

const PostContent = ({ content }: PostContentProps) => {
  const MDXContent = useMDXComponent(content);

  return <MDXContent components={components} />;
};

export { PostContent };

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
const components = {
  h3: (props: any) => <Typography.H3 className="mb-4" {...props} />,
  h4: (props: any) => <Typography.H4 className="mb-4 text-lg" {...props} />,
  p: (props: any) => <Typography.Paragraph {...props} />,
  hr: (props: any) => <br {...props} />,
  //code: (props: any) => <Typography.Code {...props} />,
  a: (props: any) => <Link {...props} />,
  Image: (props: ImageProps) => (
    <div className="mb-4 flex justify-center">
      <Image {...props} />
    </div>
  ),
};
