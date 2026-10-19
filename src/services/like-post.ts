"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export const likePost = async (slug: string, sessionId: string) => {
  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) return null;

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

  revalidatePath(`/blog/${slug}`);
};
