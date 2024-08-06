import { Suspense } from "react";
import { ContactButtons, IntroductionText, ProfilePicture, Skills } from "./components";
import { PageContainer, PostsList, PostsListSkeleton, Wrapper } from "@/components";
import { Typography } from "@/components/ui";

const Home = () => {
  return (
    <PageContainer>
      <Wrapper>
        <div className="flex flex-col gap-16">
          <section>
            <Typography.H3 className="mb-12">Alvaro Aguirre Fulano</Typography.H3>
            <div className="flex justify-between gap-10 sm:flex-col">
              <div className="flex-2">
                <IntroductionText />
                <ContactButtons />
              </div>
              <div className="flex-1">
                <ProfilePicture />
              </div>
            </div>
          </section>
          <section>
            <Skills />
          </section>
          <section>
            <Typography.H3 className="mb-4">Posts</Typography.H3>
            <Suspense fallback={<PostsListSkeleton />}>
              <PostsList />
            </Suspense>
          </section>
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default Home;
