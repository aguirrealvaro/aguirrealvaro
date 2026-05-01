import prisma from "@/lib/prisma";

export const incrementView = async (slug: string) => {
  await prisma.post.update({
    where: { slug },
    data: { views: { increment: 1 } },
  });
};
