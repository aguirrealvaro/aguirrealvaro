import prisma from "@/utils/prisma";

export const likePost = async (slug: string, sessionId: string): Promise<void> => {
  "use server";
  console.log("like pooooost!");
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
  }

  await prisma.likes.create({
    data: {
      sessionId: sessionId,
      postId: post.id,
    },
  });
};
