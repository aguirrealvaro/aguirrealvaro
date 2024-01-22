import { Skeleton } from "@/components/ui/skeleton";
import { allPosts } from "contentlayer/generated";

const PostsListSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      {allPosts.map((post) => {
        return <Skeleton key={post._id} className="h-11 w-full" />;
      })}
    </div>
  );
};

export { PostsListSkeleton };
