import { type Post, type Likes } from "@prisma/client";

export type PostWithLikes = Post & {
  likes: Likes[];
};
