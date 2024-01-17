import { LikeButton } from "@/components";
import { Typography } from "@/components/ui";
import { PostType } from "@/services/interfaces";
import { formatDate } from "@/utils/format-date";
import prisma from "@/utils/prisma";

type PostHeaderProps = {
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
};

const getIncrementedPost = async (slug: string): Promise<PostType> => {
  /* const post = await prisma.post.findUnique({
    where: { slug },
    include: { likes: true },
  }); */

  const post = await prisma.post.update({
    where: { slug },
    data: { views: { increment: 1 } },
    include: { likes: true },
  });

  if (!post) {
    throw new Error("Post not found");
  }

  return post;
};

const PostHeader = async ({ slug, title, publishedAt, description }: PostHeaderProps) => {
  const post = await getIncrementedPost(slug);

  const { dateString, formattedDate } = formatDate(publishedAt);

  const userHasLiked = false;

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
      <LikeButton isActive={userHasLiked} isFetching={false} />
    </div>
  );
};

export { PostHeader };
