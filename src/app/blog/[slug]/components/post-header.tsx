import { LikeButton } from "@/app/blog/[slug]/components";
import { Typography } from "@/components/ui";
import { getIncrementedPost, getSession } from "@/lib";
import { getIsLiked } from "@/lib/get-is-liked";
import { formatDate } from "@/utils/format-date";
import prisma from "@/utils/prisma";

type PostHeaderProps = {
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
};

const PostHeader = async ({ slug, title, publishedAt, description }: PostHeaderProps) => {
  const post = await getIncrementedPost(slug);

  const sessionId = await getSession();
  const isLiked = await getIsLiked(slug, sessionId);

  const { dateString, formattedDate } = formatDate(publishedAt);

  const handleLikePost = async () => {
    "use server";

    const post = await prisma.post.findUnique({ where: { slug } });
    if (!post) {
      throw new Error("Post does not exists");
    }

    const like = await prisma.likes.findFirst({
      where: { sessionId: sessionId, postId: post.id },
    });

    if (like) {
      await prisma.likes.delete({
        where: { id: like.id },
      });
    } else {
      await prisma.likes.create({
        data: {
          sessionId: sessionId,
          postId: post.id,
        },
      });
    }
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
      <LikeButton isLiked={isLiked} handleLikePost={handleLikePost} />
    </div>
  );
};

export { PostHeader };
