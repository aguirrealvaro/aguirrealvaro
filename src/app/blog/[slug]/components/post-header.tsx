import { revalidatePath } from "next/cache";
import { LikeButton } from "./like-button";
import { Typography } from "@/components/ui";
import { getIncrementedPost, getSession, getIsLiked, likePost } from "@/lib";
import { formatDate } from "@/utils/format-date";

type PostHeaderProps = {
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
};

const PostHeader = async ({ slug, title, publishedAt, description }: PostHeaderProps) => {
  const sessionId = await getSession();

  const [post, isLiked] = await Promise.all([
    getIncrementedPost(slug),
    getIsLiked(slug, sessionId),
  ]);

  const { dateString, formattedDate } = formatDate(publishedAt);

  const handleLikePost = async () => {
    "use server";
    await likePost(slug, sessionId);
    revalidatePath(`/blog/${slug}`);
  };

  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="mr-4">
        <span className="text-text-secondary">
          <time dateTime={dateString}>{formattedDate}</time> · {post.views} views ·{" "}
          {post.likes.length} likes
        </span>
        <Typography.H2 className="mb-1">{title}</Typography.H2>
        <p className="text-text-secondary">{description}</p>
      </div>
      <div className="relative z-heart-like inline-flex">
        <form action={handleLikePost}>
          <LikeButton isLiked={isLiked} />
        </form>
      </div>
    </div>
  );
};

export { PostHeader };
