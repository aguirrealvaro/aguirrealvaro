import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const linkVariants = cva(undefined, {
  variants: {
    colorScheme: {
      neutral: "text-text-primary",
      blue: "text-blue-600 dark:text-blue-500",
    },
    underline: {
      hover: "hover:underline",
      true: "underline",
      false: "no-underline",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    colorScheme: "blue",
    underline: "hover",
  },
});

type LinkProps = {
  children: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkVariants>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, underline = "hover", className, colorScheme, ...restProps }, ref) => {
    return (
      <a
        className={cn(linkVariants({ underline, colorScheme, className }))}
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        {...restProps}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";

export { Link };
