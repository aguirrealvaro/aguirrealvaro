import { Suspense } from "react";
import { LikeButton } from "./like-button";
import { Metrics } from "./metrics";
import { Typography } from "@/components/ui";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate } from "@/utils/format-date";

type PostHeaderProps = {
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
};

const PostHeader = async ({ slug, title, publishedAt, description }: PostHeaderProps) => {
  const { dateString, formattedDate } = formatDate(publishedAt);

  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="mr-4">
        <span className="flex items-center gap-2 text-text-secondary">
          <time dateTime={dateString}>{formattedDate}</time>
          <Suspense fallback={<Skeleton className="h-4 w-32" />}>
            <Metrics slug={slug} />
          </Suspense>
        </span>
        <Typography.H2 className="mb-1">{title}</Typography.H2>
        <p className="text-text-secondary">{description}</p>
      </div>
      <Suspense fallback={<Skeleton className="h-4 w-6" />}>
        <LikeButton slug={slug} />
      </Suspense>
    </div>
  );
};

export { PostHeader };
