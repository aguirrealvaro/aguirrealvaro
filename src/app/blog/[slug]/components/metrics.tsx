import { getPost } from "@/services/get-post";

type MetricsProps = {
  slug: string;
};

const Metrics = async ({ slug }: MetricsProps) => {
  const post = await getPost(slug);

  if (!post) return undefined;

  return (
    <span>
      · {post.views} views · {post.likes.length} likes
    </span>
  );
};

export { Metrics };
