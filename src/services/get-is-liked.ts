import prisma from "@/lib/prisma";

export const getIsLiked = async (slug: string, sessionId: string): Promise<boolean> => {
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) return false;

  const likes = await prisma.likes.findMany({
    where: { postId: post.id, sessionId: sessionId },
  });

  const isLiked = likes.length > 0;

  return isLiked;
};
