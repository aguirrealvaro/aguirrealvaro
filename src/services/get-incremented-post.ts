import prisma from "@/lib/prisma";
import type { PostWithLikes } from "@/types";

// get post with the incremented view
export const getIncrementedPost = async (slug: string): Promise<PostWithLikes | undefined> => {
  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) return undefined;

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const incrementedPost = await prisma.post.update({
    where: { id: post.id },
    data: { views: { increment: 1 } },
    include: { likes: true },
  });

  return incrementedPost;
};
