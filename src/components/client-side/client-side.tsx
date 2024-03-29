"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type ClientSideProps = {
  children: ReactNode;
};

const ClientSide = ({ children }: ClientSideProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
};

export { ClientSide };
