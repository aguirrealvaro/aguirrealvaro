import { ButtonHTMLAttributes } from "react";
import { Heart } from "lucide-react";

type LikeButtonProps = {
  isActive: boolean;
  isFetching: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const LikeButton = ({ isActive, isFetching, ...restProps }: LikeButtonProps) => {
  return (
    <div className="relative z-heart-like inline-flex">
      <button type="button" {...restProps}>
        <Heart fill={isActive ? "red" : "transparent"} color="red" />
      </button>
      {isFetching && <span className="absolute right-[calc(100%+2px)]">...</span>}
    </div>
  );
};

export { LikeButton };
