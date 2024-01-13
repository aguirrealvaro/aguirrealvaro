import { ContactButtons, IntroductionText } from "./components";
import { PageContainer, PostsList, Wrapper } from "@/components";
import { Typography } from "@/components/ui";

const Home = () => {
  return (
    <PageContainer>
      <Wrapper>
        <div className="mb-16">
          <Typography.H3 className="mb-4">Alvaro Aguirre</Typography.H3>
          <div className="flex justify-between gap-10">
            <div>
              <IntroductionText />
              <ContactButtons />
            </div>
            {/* <ProfilePicture /> */}
          </div>
        </div>
        <div>
          <Typography.H3 className="mb-4">Posts</Typography.H3>
          <PostsList />
        </div>
      </Wrapper>
    </PageContainer>
  );
};

export default Home;
