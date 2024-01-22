import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";
import type { PostWithLikes } from "@/types";

export const incrementView = async (slug: string) => {
  await prisma.post.update({
    where: { slug },
    data: { views: { increment: 1 } },
  });
};

export const getPost = unstable_cache(
  async (slug: string): Promise<PostWithLikes> => {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { likes: true },
    });

    if (!post) {
      throw new Error("Post not found");
    }

    return post;
  },
  ["post"],
  { tags: ["post"] }
);
