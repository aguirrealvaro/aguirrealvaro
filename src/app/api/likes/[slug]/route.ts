import { NextResponse } from "next/server";
import { getSession } from "@/utils/get-session";
import prisma from "@/utils/prisma";

type ParamsType = {
  params: {
    slug: string;
  };
};

export async function POST(_: Request, { params }: ParamsType) {
  const currentSessionId = getSession();

  const { slug } = params;

  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) {
    return NextResponse.json({ error: "Post does not exists" }, { status: 401 });
  }

  const like = await prisma.likes.findFirst({
    where: { sessionId: currentSessionId, postId: post.id },
  });

  if (like) {
    return NextResponse.json({ error: "Like alredy exists" }, { status: 401 });
  }

  const newLike = await prisma.likes.create({
    data: {
      sessionId: currentSessionId,
      postId: post.id,
    },
  });

  return NextResponse.json(newLike);
}