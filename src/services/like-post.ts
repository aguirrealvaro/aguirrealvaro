import { revalidateTag } from "next/cache";
import prisma from "@/lib/prisma";

export const likePost = async (slug: string, sessionId: string) => {
  "use server";
  const post = await prisma.post.update({
    where: { slug },
    data: { views: { decrement: 1 } },
  });

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

  // first time is not working, then it works... why?
  revalidateTag("post");
};
