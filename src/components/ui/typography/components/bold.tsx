import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type BoldProps = {
  children: ReactNode;
  className?: string;
};

const Bold = ({ children, className }: BoldProps) => {
  return <strong className={cn("font-semibold", className)}>{children}</strong>;
};

export { Bold };
