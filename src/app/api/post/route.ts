import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const posts = await prisma.post.findMany({
    include: { likes: true },
  });

  return NextResponse.json(posts);
}
