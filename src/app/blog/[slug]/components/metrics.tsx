import { getPost } from "@/services/get-post";

type MetricsProps = {
  slug: string;
};

const Metrics = async ({ slug }: MetricsProps) => {
  const post = await getPost(slug);

  if (!post) return undefined;

  const likesCount = post.likes.length;
  const likesLabel = likesCount === 1 ? "like" : "likes";

  return (
    <span>
      · {post.views} views · {likesCount} {likesLabel}
    </span>
  );
};

export { Metrics };
