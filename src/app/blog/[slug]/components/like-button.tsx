import { LikeButtonClient } from "./like-button.client";
import { getIsLiked, getSession, likePost } from "@/services";

type LikeButtonProps = {
  slug: string;
};

const LikeButton = async ({ slug }: LikeButtonProps) => {
  const sessionId = await getSession();
  const isLiked = await getIsLiked(slug, sessionId);

  const handleLikePost = async () => {
    "use server";
    await likePost(slug, sessionId);
  };

  return (
    <div className="relative z-heart-like inline-flex">
      <form action={handleLikePost}>
        <LikeButtonClient isLiked={isLiked} />
      </form>
    </div>
  );
};

export { LikeButton };
