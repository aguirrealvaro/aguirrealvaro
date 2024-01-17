import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type H2Props = {
  children: ReactNode;
  className?: string;
};

const H2 = ({ children, className }: H2Props) => {
  return (
    <h2 className={cn("text-3xl font-bold text-text-heading text-balance", className)}>
      {children}
    </h2>
  );
};

export { H2 };
