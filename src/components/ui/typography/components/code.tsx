import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CodeProps = {
  children: ReactNode;
  className?: string;
};

const Code = ({ children, className }: CodeProps) => {
  return (
    <code
      className={cn(
        "rounded border px-0.5 py-1 font-mono text-xs font-normal",
        "border-neutral-300 bg-neutral-200",
        "dark:border-neutral-600 dark:bg-neutral-700",
        className
      )}
    >
      {children}
    </code>
  );
};

export { Code };
