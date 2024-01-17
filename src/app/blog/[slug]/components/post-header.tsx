import { Suspense } from "react";
import { LikeButton } from "./like-button";
import { Metrics } from "@/app/blog/[slug]/components/metrics";
import { Typography } from "@/components/ui";
import { Skeleton } from "@/components/ui/skeleton";
import { getSession, getIsLiked, likePost } from "@/services";
import { formatDate } from "@/utils/format-date";
export { Metrics } from "./metrics";

type PostHeaderProps = {
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
};

const PostHeader = async ({ slug, title, publishedAt, description }: PostHeaderProps) => {
  const sessionId = await getSession();
  const isLiked = await getIsLiked(slug, sessionId);

  const { dateString, formattedDate } = formatDate(publishedAt);

  const handleLikePost = async () => {
    "use server";
    await likePost(slug, sessionId);
  };

  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="mr-4">
        <span className="flex items-center gap-2 text-text-secondary">
          <time dateTime={dateString}>{formattedDate}</time>
          <Suspense fallback={<Skeleton className="h-5 w-32" />}>
            <Metrics slug={slug} />
          </Suspense>
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
