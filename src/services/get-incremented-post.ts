import prisma from "@/lib/prisma";
import { PostWithLikes } from "@/types";

// get post with the incremented view
export const getIncrementedPost = async (slug: string): Promise<PostWithLikes> => {
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
