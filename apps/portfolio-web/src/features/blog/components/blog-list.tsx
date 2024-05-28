import React from "react";
import { BLOG_POSTS } from "~/lib/blogPosts";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "~/features/ui/card";
import HeroSvg from "~/features/shared/components/hero-svg";

type Props = {};

function BlogList({}: Props) {
  return (
    <div className="container grid grid-cols-3 gap-4">
      {[...BLOG_POSTS].map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
          <Card className="flex min-h-60 cursor-pointer flex-col shadow-primary transition-all hover:scale-105 hover:shadow-md hover:shadow-primary/70">
            <HeroSvg classNameSvg="m-1">
              <div className="bg-primary/60">
                <CardHeader className="text-lg font-bold tracking-wide">
                  {post.title}
                </CardHeader>
              </div>
            </HeroSvg>
            <CardContent className="flex-1">
              <div className="size-fit rounded-md border-2 border-primary">
                <img
                  src={post.imgUrl}
                  alt={post.title}
                  className="rounded-md"
                />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default BlogList;
