import { PostHeader, PostContent } from ".";
import { allPosts } from "contentlayer/generated";

type PostWrapperProps = {
  slug: string;
};

const PostWrapper = ({ slug }: PostWrapperProps) => {
  const pagePost = allPosts.find((post) => post.slug === slug);

  if (!pagePost) return null;

  const { title, publishedAt, description, body } = pagePost;

  return (
    <>
      <PostHeader
        slug={slug}
        title={title}
        publishedAt={publishedAt}
        description={description}
      />
      <PostContent content={body.code} />
    </>
  );
};

export { PostWrapper };
