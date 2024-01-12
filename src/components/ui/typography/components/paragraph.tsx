import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return <p className={cn("mb-4 text-justify last:mb-0", className)}>{children}</p>;
};
