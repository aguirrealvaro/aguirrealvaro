import { ReactNode } from "react";
import { cn } from "@/utils/cn";

type H4Props = {
  children: ReactNode;
  className?: string;
};

const H4 = ({ children, className }: H4Props) => {
  return <h4 className={cn("font-semibold text-text-heading", className)}>{children}</h4>;
};

export { H4 };
