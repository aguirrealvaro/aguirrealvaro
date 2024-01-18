import { cn } from "@/lib/cn";

type SkeletonProps = {
  className?: string;
};

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-700", className)}
    />
  );
};

export { Skeleton };
