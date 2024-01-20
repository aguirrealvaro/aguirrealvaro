import { Suspense } from "react";
import { PageContainer, Wrapper, PostsList, PostsListSkeleton } from "@/components";
import { Typography } from "@/components/ui";

const Blog = () => {
  return (
    <PageContainer>
      <Wrapper>
        <Typography.H3 className="mb-4">Blog</Typography.H3>
        <Suspense fallback={<PostsListSkeleton />}>
          <PostsList />
        </Suspense>
      </Wrapper>
    </PageContainer>
  );
};

export default Blog;
