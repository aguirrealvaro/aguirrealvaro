import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { ExternalLink } from "lucide-react";
import { cn } from "@/utils/cn";

const getLinkVariants = cva(undefined, {
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
  showIcon?: boolean;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof getLinkVariants>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, underline, colorScheme, showIcon = true, className, ...restProps }, ref) => {
    return (
      <a
        className={cn(
          getLinkVariants({ underline, colorScheme, className }),
          "inline-flex items-center gap-1"
        )}
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        {...restProps}
      >
        {children}
        {showIcon && <ExternalLink size={16} />}
      </a>
    );
  }
);

Link.displayName = "Link";

export { Link };
