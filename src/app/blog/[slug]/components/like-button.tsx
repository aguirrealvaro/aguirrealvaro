import { LikeButtonClient } from "./like-button.client";
import { getIsLiked } from "@/services/get-is-liked";
import { getSession } from "@/services/get-session";
import { likePost } from "@/services/like-post";

type LikeButtonProps = {
  slug: string;
};

const LikeButton = async ({ slug }: LikeButtonProps) => {
  const sessionId = await getSession();
  const isLiked = await getIsLiked(slug, sessionId);

  const likePostWithParams = likePost.bind(null, slug, sessionId);

  return (
    <div className="relative z-heart-like inline-flex">
      <form action={likePostWithParams}>
        <LikeButtonClient isLiked={isLiked} />
      </form>
    </div>
  );
};

export { LikeButton };
