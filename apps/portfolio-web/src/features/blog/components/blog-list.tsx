import React from "react";
import { BLOG_POSTS } from "~/lib/blogPosts";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "~/features/ui/card";
import HeroSvg from "~/features/assets/components/hero-svg";

type Props = {};

function BlogList({}: Props) {
  return (
    <div className="gap-4 grid grid-cols-3 container">
      {[...BLOG_POSTS].map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
          <Card className="flex flex-col shadow-primary hover:shadow-md hover:shadow-primary/70 min-h-60 transition-all cursor-pointer hover:scale-105">
            <HeroSvg classNameSvg="m-1">
              <div className="bg-primary/60">
                <CardHeader className="font-bold text-lg tracking-wide">
                  {post.title}
                </CardHeader>
              </div>
            </HeroSvg>
            <CardContent className="flex-1">
              <div className="border-2 border-primary rounded-md size-fit">
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
