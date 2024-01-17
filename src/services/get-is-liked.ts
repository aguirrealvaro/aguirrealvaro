import prisma from "@/utils/prisma";

export const getIsLiked = async (slug: string, sessionId: string): Promise<boolean> => {
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) {
    throw new Error("Post does not exists");
  }

  const likes = await prisma.likes.findMany({
    where: { postId: post.id, sessionId: sessionId },
  });

  const isLiked = likes.length > 0;

  return isLiked;
};
