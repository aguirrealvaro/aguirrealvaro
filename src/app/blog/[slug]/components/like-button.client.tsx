"use client";

import { useFormStatus } from "react-dom";
import { Heart } from "lucide-react";
import colors from "tailwindcss/colors";
import { IconButton } from "@/components/ui";

type LikeButtonClientProps = {
  isLiked: boolean;
};

const LikeButtonClient = ({ isLiked }: LikeButtonClientProps) => {
  const { pending } = useFormStatus();
  const red = colors.red[500];

  return (
    <>
      <IconButton type="submit" disabled={pending} aria-disabled={pending}>
        <Heart fill={isLiked ? red : "transparent"} color={red} />
        {pending && <span className="absolute right-[calc(100%+2px)]">...</span>}
      </IconButton>
    </>
  );
};

export { LikeButtonClient };
