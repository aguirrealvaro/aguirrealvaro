import { createHash } from "crypto";
import { Heart } from "lucide-react";
import { headers } from "next/headers";
import colors from "tailwindcss/colors";

type LikeButtonProps = {
  isActive: boolean;
  isFetching: boolean;
};

const getSession = async () => {
  const headersList = headers();
  const ipAddress = headersList.get("x-forwarded-for") || "0.0.0.0";

  const currentSessionId = createHash("md5")
    .update(ipAddress + (process.env.IP_ADDRESS_SALT || ""), "utf8")
    .digest("hex");

  return currentSessionId;
};

const LikeButton = async ({ isActive, isFetching }: LikeButtonProps) => {
  const session = await getSession();
  // eslint-disable-next-line no-console
  console.log(session);

  const redColor = colors.red[500];

  return (
    <div className="relative z-heart-like inline-flex">
      <button type="button">
        <Heart fill={isActive ? redColor : "transparent"} color={redColor} />
      </button>
      {isFetching && <span className="absolute right-[calc(100%+2px)]">...</span>}
    </div>
  );
};

export { LikeButton };
