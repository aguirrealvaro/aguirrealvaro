import Link from "next/link";
import { PostType } from "@/types";
import { formatDate } from "@/utils/format-date";
import prisma from "@/utils/prisma";
import { allPosts } from "contentlayer/generated";

const getPosts = async (): Promise<PostType[]> => {
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
          <li key={slug} className="group border-b last:border-b-0">
            <Link href={`/blog/${slug}`} className="flex flex-col py-4 transition">
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
