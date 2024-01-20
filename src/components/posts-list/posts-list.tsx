import Link from "next/link";
import prisma from "@/lib/prisma";
import type { PostWithLikes } from "@/types";
import { formatDate } from "@/utils/format-date";
import { allPosts } from "contentlayer/generated";

const getPosts = async (): Promise<PostWithLikes[]> => {
  const posts = await prisma.post.findMany({
    include: { likes: true },
  });

  return posts;
};

const PostsList = async () => {
  const sortedPosts = allPosts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const posts = await getPosts();

  return (
    <ul>
      {sortedPosts.map((post) => {
        const { title, slug, publishedAt, enabled } = post;
        const { dateString, formattedDate } = formatDate(publishedAt);

        const relatedPost = posts?.find((post) => post.slug === slug);

        const renderMetrics = () => {
          if (!relatedPost) return null;
          return ` · ${relatedPost?.views} views · ${relatedPost?.likes.length} likes`;
        };

        if (process.env.NODE_ENV === "production" && !enabled) return null;

        return (
          <li key={slug} className="group border-b py-4 first:pt-0 last:border-b-0 last:pb-0">
            <Link href={`/blog/${slug}`} className="flex flex-col transition">
              <h2 className="font-medium text-text-heading group-hover:underline">{title}</h2>
              <span className="text-text-secondary">
                <time dateTime={dateString}>{formattedDate}</time>
                {renderMetrics()}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { PostsList };
