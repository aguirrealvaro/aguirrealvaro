import { getIncrementedPost } from "@/services/get-incremented-post";

type MetricsProps = {
  slug: string;
};

const Metrics = async ({ slug }: MetricsProps) => {
  const post = await getIncrementedPost(slug);

  if (!post) return undefined;

  return (
    <span>
      · {post.views} views · {post.likes.length} likes
    </span>
  );
};

export { Metrics };
