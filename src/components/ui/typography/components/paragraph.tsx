import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return <p className={cn("mb-4 text-pretty last:mb-0", className)}>{children}</p>;
};
