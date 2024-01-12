"use client";

import { PostHeader, PostContent } from ".";
import { useSinglePost } from "@/hooks";
import { allPosts } from "contentlayer/generated";

type PostWrapperProps = {
  slug: string;
};

const PostWrapper = ({ slug }: PostWrapperProps) => {
  const {
    post: relatedPost,
    isFetchingPost,
    likePostMutate,
    isFetchingLike,
    userHasLiked,
  } = useSinglePost(slug);

  const pagePost = allPosts.find((post) => post.slug === slug);

  if (!pagePost) return null;

  const { title, publishedAt, description, body } = pagePost;

  return (
    <>
      <PostHeader
        title={title}
        publishedAt={publishedAt}
        description={description}
        views={relatedPost?.views}
        likes={relatedPost?.likes.length}
        isFetchingPost={isFetchingPost}
        likePostMutate={() => likePostMutate(slug)}
        userHasLiked={userHasLiked}
        isFetchingLike={isFetchingLike}
      />
      <PostContent content={body.code} />
    </>
  );
};

export { PostWrapper };
