import prisma from "@/lib/prisma";
import type { PostWithLikes } from "@/types";

export const getPost = async (slug: string): Promise<PostWithLikes | undefined> => {
  const post = await prisma.post.findUnique({
    where: { slug },
    include: { likes: true },
  });

  if (!post) return undefined;

  return post;
};
