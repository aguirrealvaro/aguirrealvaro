import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className="mb-8 mt-28">{children}</div>;
};

export { PageContainer };
