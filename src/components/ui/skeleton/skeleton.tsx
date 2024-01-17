import { cn } from "@/utils/cn";

type SkeletonProps = {
  className?: string;
};

const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={cn("animate-pulse rounded-md bg-gray-200", "h-48", className)} />;
};

export { Skeleton };
