import { ButtonHTMLAttributes } from "react";
import { Heart } from "lucide-react";
import colors from "tailwindcss/colors";

type LikeButtonProps = {
  isActive: boolean;
  isFetching: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const LikeButton = ({ isActive, isFetching, ...restProps }: LikeButtonProps) => {
  const redColor = colors.red[500];
  return (
    <div className="relative z-heart-like inline-flex">
      <button type="button" {...restProps}>
        <Heart fill={isActive ? redColor : "transparent"} color={redColor} />
      </button>
      {isFetching && <span className="absolute right-[calc(100%+2px)]">...</span>}
    </div>
  );
};

export { LikeButton };
