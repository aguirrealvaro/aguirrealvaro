"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export const incrementView = async (slug: string) => {
  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) return;

  await prisma.post.update({
    where: { id: post.id },
    data: { views: { increment: 1 } },
  });

  revalidatePath(`/blog/${slug}`);
  revalidatePath("/");
  revalidatePath("/blog");
};
