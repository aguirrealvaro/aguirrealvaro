import prisma from "@/utils/prisma";

export const likePost = async (slug: string, sessionId: string) => {
  "use server";

  const post = await prisma.post.findUnique({ where: { slug } });
  if (!post) {
    throw new Error("Post does not exists");
  }

  const like = await prisma.likes.findFirst({
    where: { sessionId: sessionId, postId: post.id },
  });

  if (like) {
    await prisma.likes.delete({
      where: { id: like.id },
    });
  } else {
    await prisma.likes.create({
      data: {
        sessionId: sessionId,
        postId: post.id,
      },
    });
  }
};
