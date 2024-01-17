"use client";

import { Heart } from "lucide-react";
import colors from "tailwindcss/colors";

type LikeButtonProps = {
  isLiked: boolean;
  handleLikePost: () => void;
};

const LikeButton = ({ isLiked, handleLikePost }: LikeButtonProps) => {
  const redColor = colors.red[500];

  return (
    <div className="relative z-heart-like inline-flex">
      <form action={handleLikePost}>
        <button type="button">
          <Heart fill={isLiked ? redColor : "transparent"} color={redColor} />
        </button>
      </form>
      {false && <span className="absolute right-[calc(100%+2px)]">...</span>}
    </div>
  );
};

export { LikeButton };
