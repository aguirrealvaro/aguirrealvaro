import { getPost } from "@/services/get-post";
import { incrementView } from "@/services/increment-view";

type MetricsProps = {
  slug: string;
};

const Metrics = async ({ slug }: MetricsProps) => {
  await incrementView(slug);
  const post = await getPost(slug);

  if (!post) return undefined;

  return (
    <span>
      · {post.views} views · {post.likes.length} likes
    </span>
  );
};

export { Metrics };
