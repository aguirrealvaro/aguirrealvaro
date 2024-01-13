import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const linkVariants = cva(["text-sky-600 dark:text-sky-500"], {
  variants: {
    underline: {
      hover: "hover:underline",
      true: "underline",
      false: "no-underline",
    },
  },
  compoundVariants: [],
  defaultVariants: {},
});

type LinkProps = {
  children: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkVariants>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, underline = "hover", className, ...restProps }, ref) => {
    return (
      <a
        className={cn(linkVariants({ underline, className }))}
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

export { Link, linkVariants };
