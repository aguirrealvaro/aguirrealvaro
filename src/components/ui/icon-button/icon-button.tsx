import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const getIconButtonVariants = cva(
  [
    "flex rounded",
    "transition hover:bg-hover-primary",
    "disabled:cursor-not-allowed",
    "disabled:hover:bg-transparent",
  ],
  {
    variants: {
      size: {
        xs: "p-0.5",
        sm: "p-1",
        md: "p-1.5",
        lg: "p-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type IconButtonProps = {
  className?: string;
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof getIconButtonVariants>;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size, className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        type="button"
        className={cn(getIconButtonVariants({ size, className }))}
        {...props}
      />
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
