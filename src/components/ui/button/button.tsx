import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const getButtonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "border border-transparent",
    "transition",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      block: {
        true: "w-full",
      },
      size: {
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-5 text-lg",
      },
      shape: {
        default: "rounded",
        pill: "rounded-xl",
        rectangle: "rounded-none",
      },
      variant: {
        primary: [
          "disabled:border-disabled-primary disabled:bg-disabled-primary disabled:text-disabled-secondary",
          "dark:disabled:border-disabled-primary dark:disabled:bg-disabled-primary dark:disabled:text-disabled-secondary",
        ],
        secondary: [
          "border-transparent",
          "disabled:border-disabled-primary disabled:bg-disabled-primary disabled:text-disabled-secondary",
          "dark:disabled:border-disabled-primary dark:disabled:bg-disabled-primary dark:disabled:text-disabled-secondary",
        ],
        outlined: [
          "bg-transparent",
          "disabled:border-disabled-primary disabled:text-disabled-secondary disabled:hover:bg-transparent",
          "dark:disabled:border-disabled-primary dark:disabled:text-disabled-secondary dark:disabled:hover:bg-transparent",
        ],
        ghost: [
          "bg-transparent",
          "disabled:text-disabled-primary disabled:hover:bg-transparent",
          "dark:disabled:text-disabled-primary dark:disabled:hover:bg-transparent",
        ],
        link: [
          "bg-transparent hover:underline",
          "disabled:text-disabled-primary disabled:hover:no-underline",
          "dark:disabled:text-disabled-primary dark:disabled:hover:no-underline",
        ],
        plain: [
          "h-auto w-auto rounded-none border-none bg-none p-0",
          "disabled:text-disabled-primary",
          "dark:disabled:text-disabled-primary",
        ],
      },
      colorScheme: {
        neutral: "",
        accent: "",
        success: "",
        danger: "",
        warning: "",
      },
    },
    compoundVariants: [
      // Primary
      {
        variant: "primary",
        colorScheme: "neutral",
        className: [
          "focus:ring-4",
          "border-black bg-black text-white",
          "hover:border-neutral-800 hover:bg-neutral-800",
          "dark:border-white dark:bg-white dark:text-black",
          "dark:hover:border-neutral-200 dark:hover:bg-neutral-200",
        ],
      },
      {
        variant: "primary",
        colorScheme: "accent",
        className: [
          "border-blue-600 bg-blue-600 text-white",
          "hover:border-blue-700 hover:bg-blue-700",
          "dark:border-blue-500 dark:bg-blue-500 dark:text-black",
          "dark:hover:border-blue-400 dark:hover:bg-blue-400",
        ],
      },
      {
        variant: "primary",
        colorScheme: "success",
        className: [
          "border-emerald-600 bg-emerald-600 text-white",
          "hover:border-emerald-700 hover:bg-emerald-700",
          "dark:border-emerald-500 dark:bg-emerald-500 dark:text-black",
          "dark:hover:border-emerald-400 dark:hover:bg-emerald-400",
        ],
      },
      {
        variant: "primary",
        colorScheme: "warning",
        className: [
          "border-yellow-500 bg-yellow-500 text-black",
          "hover:border-yellow-600 hover:bg-yellow-600",
          "dark:border-yellow-400 dark:bg-yellow-400 dark:text-black",
          "dark:hover:border-yellow-300 dark:hover:bg-yellow-300",
        ],
      },
      {
        variant: "primary",
        colorScheme: "danger",
        className: [
          "border-red-600 bg-red-600 text-white",
          "hover:border-red-700 hover:bg-red-700",
          "dark:border-red-500 dark:bg-red-500 dark:text-black",
          "dark:hover:border-red-400 dark:hover:bg-red-400",
        ],
      },
      // Secondary
      {
        variant: "secondary",
        colorScheme: "neutral",
        className: [
          "bg-neutral-200 text-neutral-600",
          "hover:bg-neutral-300",
          "dark:bg-neutral-700 dark:text-neutral-300",
          "dark:hover:bg-neutral-600",
        ],
      },
      {
        variant: "secondary",
        colorScheme: "accent",
        className: [
          "bg-blue-100 text-blue-600",
          "hover:bg-blue-200",
          "dark:bg-blue-950 dark:text-blue-300",
          "dark:hover:bg-blue-900",
        ],
      },
      {
        variant: "secondary",
        colorScheme: "success",
        className: [
          "bg-emerald-100 text-emerald-700",
          "hover:bg-emerald-200",
          "dark:bg-emerald-950 dark:text-emerald-300",
          "dark:hover:bg-emerald-900",
        ],
      },
      {
        variant: "secondary",
        colorScheme: "warning",
        className: [
          "bg-yellow-100 text-yellow-600",
          "hover:bg-yellow-200",
          "dark:bg-yellow-950 dark:text-yellow-300",
          "dark:hover:bg-yellow-900",
        ],
      },
      {
        variant: "secondary",
        colorScheme: "danger",
        className: [
          "bg-red-100 text-red-700",
          "hover:bg-red-200",
          "dark:bg-red-950 dark:text-red-200",
          "dark:hover:bg-red-900",
        ],
      },
      // Outlined
      {
        variant: "outlined",
        colorScheme: "neutral",
        className: [
          "border-neutral-200 text-neutral-600",
          "hover:bg-neutral-100",
          "dark:border-neutral-600 dark:text-neutral-400",
          "dark:hover:bg-neutral-700",
        ],
      },
      {
        variant: "outlined",
        colorScheme: "accent",
        className: [
          "border-blue-200 text-blue-600",
          "hover:bg-blue-100",
          "dark:border-blue-900 dark:text-blue-400",
          "dark:hover:bg-blue-950",
        ],
      },
      {
        variant: "outlined",
        colorScheme: "success",
        className: [
          "border-emerald-200 text-emerald-600",
          "hover:bg-emerald-100",
          "dark:border-emerald-900 dark:text-emerald-400",
          "dark:hover:bg-emerald-950",
        ],
      },
      {
        variant: "outlined",
        colorScheme: "warning",
        className: [
          "border-yellow-200 text-yellow-600",
          "hover:bg-yellow-100",
          "dark:border-yellow-900 dark:text-yellow-600",
          "dark:hover:bg-yellow-950",
        ],
      },
      {
        variant: "outlined",
        colorScheme: "danger",
        className: [
          "border-red-200 text-red-600",
          "hover:bg-red-100",
          "dark:border-red-900 dark:text-red-400",
          "dark:hover:bg-red-950",
        ],
      },
      // Ghost
      {
        variant: "ghost",
        colorScheme: "neutral",
        className: [
          "text-black",
          "hover:bg-black/10",
          "dark:text-white",
          "dark:hover:bg-white/10",
        ],
      },
      {
        variant: "ghost",
        colorScheme: "accent",
        className: [
          "text-blue-600",
          "hover:bg-blue-500/10",
          "dark:text-blue-600",
          "dark:hover:bg-blue-500/10",
        ],
      },
      {
        variant: "ghost",
        colorScheme: "success",
        className: [
          "text-emerald-600",
          "hover:bg-emerald-500/10",
          "dark:text-emerald-600",
          "dark:hover:bg-emerald-500/10",
        ],
      },
      {
        variant: "ghost",
        colorScheme: "warning",
        className: [
          "text-yellow-600",
          "hover:bg-yellow-500/10",
          "dark:text-yellow-600",
          "dark:hover:bg-yellow-500/10",
        ],
      },
      {
        variant: "ghost",
        colorScheme: "danger",
        className: [
          "text-red-600",
          "hover:bg-red-500/10",
          "dark:text-red-600",
          "dark:hover:bg-red-500/10",
        ],
      },
      // Link
      {
        variant: "link",
        colorScheme: "neutral",
        className: ["text-black", "dark:text-white"],
      },
      {
        variant: "link",
        colorScheme: "accent",
        className: ["text-blue-600", "dark: text-blue-500"],
      },
      {
        variant: "link",
        colorScheme: "success",
        className: ["text-emerald-600", "dark: text-emerald-500"],
      },
      {
        variant: "link",
        colorScheme: "warning",
        className: ["text-yellow-600", "dark: text-yellow-500"],
      },
      {
        variant: "link",
        colorScheme: "danger",
        className: ["text-red-600", "dark: text-red-500"],
      },
      // Plain
      {
        variant: "plain",
        colorScheme: "neutral",
        className: "text-black dark:text-white",
      },
      {
        variant: "plain",
        colorScheme: "accent",
        className: "text-blue-500 dark:text-blue-500",
      },
      {
        variant: "plain",
        colorScheme: "success",
        className: "text-emerald-500 dark:text-emerald-500",
      },
      {
        variant: "plain",
        colorScheme: "warning",
        className: "text-yellow-500 dark:text-yellow-400",
      },
      {
        variant: "plain",
        colorScheme: "danger",
        className: "text-red-500 dark:text-red-500",
      },
    ],
    defaultVariants: {
      size: "md",
      shape: "default",
      variant: "primary",
      colorScheme: "neutral",
    },
  }
);

type ButtonProps = {
  className?: string;
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof getButtonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ block, size, shape, variant, colorScheme, className, asChild, ...restProps }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          getButtonVariants({ block, size, shape, variant, colorScheme, className })
        )}
        {...restProps}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
