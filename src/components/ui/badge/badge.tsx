import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/cn";

const getIconButtonVariants = cva(
  ["text-nowrap rounded-md px-2 py-0.5 font-mono text-xs font-semibold"],
  {
    variants: {
      variant: {
        primary: [
          "bg-neutral-700 text-neutral-200",
          "dark:bg-neutral-200 dark:text-neutral-700",
        ],
        secondary: [
          "bg-neutral-200 text-neutral-700",
          "dark:bg-neutral-700 dark:text-neutral-200",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type BadgeProps = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof getIconButtonVariants>;

const Badge = ({ children, className, variant }: BadgeProps) => {
  return <span className={cn(getIconButtonVariants({ variant, className }))}>{children}</span>;
};

export { Badge };
