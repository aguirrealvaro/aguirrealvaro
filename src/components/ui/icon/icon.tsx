"use client";

import { useEffect, useState } from "react";
import { LucideIcon, LucideProps } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  size?: string | number;
} & LucideProps;

const Icon = ({ icon: IconComponent, size = 20, ...restProps }: IconProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <IconComponent size={size} {...restProps} />;
};

export { Icon };
