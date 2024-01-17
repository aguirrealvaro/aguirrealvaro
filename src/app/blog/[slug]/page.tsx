import { PostContent, PostHeader } from "./components";
import { PageContainer, Wrapper } from "@/components";
import { allPosts } from "contentlayer/generated";

type PostProps = {
  params: {
    slug: string;
  };
};

const Post = ({ params }: PostProps) => {
  const pagePost = allPosts.find((post) => post.slug === params.slug);

  if (!pagePost) return null;

  const { title, publishedAt, description, body } = pagePost;

  return (
    <PageContainer>
      <Wrapper>
        <PostHeader
          slug={params.slug}
          title={title}
          publishedAt={publishedAt}
          description={description}
        />
        <PostContent content={body.code} />
      </Wrapper>
    </PageContainer>
  );
};

export default Post;

export const dynamicParams = false;

export async function generateStaticParams() {
  return allPosts.map((post) => {
    if (process.env.NODE_ENV === "production" && !post.enabled) return;

    return {
      slug: post.slug,
    };
  });
}
