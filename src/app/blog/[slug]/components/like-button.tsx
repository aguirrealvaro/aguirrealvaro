"use client";

import { useFormStatus } from "react-dom";
import { Heart } from "lucide-react";
import colors from "tailwindcss/colors";

type LikeButtonProps = {
  isLiked: boolean;
};

const LikeButton = ({ isLiked }: LikeButtonProps) => {
  const { pending } = useFormStatus();

  const red = colors.red[500];

  return (
    <button type="submit">
      {pending && <span className="absolute right-[calc(100%+2px)]">...</span>}
      <Heart fill={isLiked ? red : "transparent"} color={red} />
    </button>
  );
};

export { LikeButton };
