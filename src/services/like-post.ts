import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export const likePost = async (slug: string, sessionId: string) => {
  "use server";
  const post = await prisma.post.update({
    where: { slug },
    // TO DO: remove this ugly solution, and find another approach
    // EXPLANATION:
    // after liking the post, i am doing revalidatePath(`/blog/${slug}`)
    // so, the whole path is being revalidating, and the views are being incremented again
    // to avoid this, i am decrementing the views by 1 to equalize the views
    // POSSIBLE SOLUTION (see `unstable-cache` branch)
    // split getIncrementedView to incrementView and getSinglePost
    // assingn a tag to getSinglePost, and use revalidateTag instead of revalidatePath
    // for now, the only way to assign a tag to a prisma query (not fetch) is unstable_cache (https://github.com/vercel/next.js/discussions/49525)
    // i tried it, but is not totally working
    // wait for the stable version of unstable_cache
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

  revalidatePath(`/blog/${slug}`);
};
