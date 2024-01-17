import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return <p className={cn("mb-4 last:mb-0 text-pretty", className)}>{children}</p>;
};
