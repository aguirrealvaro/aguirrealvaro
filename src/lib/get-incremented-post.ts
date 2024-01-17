import { PostType } from "@/types";
import prisma from "@/utils/prisma";

// get post with the incremented view
export const getIncrementedPost = async (slug: string): Promise<PostType> => {
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
