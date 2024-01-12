import { PageContainer, Wrapper, PostsList } from "@/components";
import { Typography } from "@/components/ui";

const Blog = () => {
  return (
    <PageContainer>
      <Wrapper>
        <Typography.H3 className="mb-4">Blog</Typography.H3>
        <PostsList />
      </Wrapper>
    </PageContainer>
  );
};

export default Blog;
