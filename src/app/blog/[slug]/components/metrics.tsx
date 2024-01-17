import { getIncrementedPost } from "@/services";

type MetricsProps = {
  slug: string;
};

const Metrics = async ({ slug }: MetricsProps) => {
  const post = await getIncrementedPost(slug);

  return (
    <span>
      · {post.views} views · {post.likes.length} likes
    </span>
  );
};

export { Metrics };
