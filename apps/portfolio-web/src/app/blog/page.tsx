import React from "react";
import BlogList from "../../features/blog/components/blog-list";
import BlogTitle from "~/features/blog/components/blog-title";

type Props = {};

function BlogPage({}: Props) {
  return (
    <main className="flex-1">
      <BlogTitle />

      <BlogList />
    </main>
  );
}

export default BlogPage;
