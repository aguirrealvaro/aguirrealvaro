import type { Post, Likes } from "@prisma/client";

export type PostWithLikes = Post & {
  likes: Likes[];
};
