"use client";

import { useFormStatus } from "react-dom";
import { Heart } from "lucide-react";
import colors from "tailwindcss/colors";

type LikeButtonClientProps = {
  isLiked: boolean;
};

const LikeButtonClient = ({ isLiked }: LikeButtonClientProps) => {
  const { pending } = useFormStatus();
  const red = colors.red[500];

  return (
    <>
      <button type="submit">
        <Heart fill={isLiked ? red : "transparent"} color={red} />
      </button>
      {pending && <span className="absolute right-[calc(100%+2px)]">...</span>}
    </>
  );
};

export { LikeButtonClient };
