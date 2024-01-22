import { LikeButtonClient } from "./like-button.client";
import { getIsLiked, getSession, likePost } from "@/services";

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
