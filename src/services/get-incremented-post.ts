import prisma from "@/lib/prisma";
import type { PostWithLikes } from "@/types";

// get post with the incremented view
export const getIncrementedPost = async (slug: string): Promise<PostWithLikes> => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
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
