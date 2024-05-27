import React from "react";
import { BLOG_POSTS } from "~/lib/blogPosts";
import Link from "next/link";

type Props = {};

function BlogList({}: Props) {
  return (
    <div className="container">
      {BLOG_POSTS.map((post) => (
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      ))}
    </div>
  );
}

export default BlogList;
