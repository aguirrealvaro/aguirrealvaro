import prisma from "@/lib/prisma";
import type { PostWithLikes } from "@/types";

export const getPosts = async (): Promise<PostWithLikes[]> => {
  const posts = await prisma.post.findMany({
    include: { likes: true },
  });

  return posts;
};
