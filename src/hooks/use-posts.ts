import { useQuery } from "@tanstack/react-query";
import { PostType } from "@/services/interfaces";
import { getPosts } from "@/services/query-fns";

type UsePostsReturnType = {
  posts: PostType[] | undefined;
  isFetching: boolean;
};

const usePosts = (): UsePostsReturnType => {
  const { data: posts, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return { posts, isFetching };
};

export { usePosts };
