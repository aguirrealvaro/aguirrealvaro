import { Skeleton } from "@/components/ui/skeleton";
import { allPosts } from "contentlayer/generated";

const PostsListSkeleton = () => {
  return (
    <div>
      {allPosts.map((post) => {
        return <Skeleton key={post._id} className="my-8 h-11 w-full" />;
      })}
    </div>
  );
};

export { PostsListSkeleton };
