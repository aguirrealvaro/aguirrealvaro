import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type BadgeProps = {
  children: ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
  return (
    <span
      className={cn(
        "bg-neutral-700 dark:bg-neutral-400",
        "text-neutral-300 dark:text-neutral-700",
        "text-nowrap rounded-md px-2 py-0.5 font-mono text-xs font-semibold"
      )}
    >
      {children}
    </span>
  );
};

export { Badge };
