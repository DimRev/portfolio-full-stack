"use client";
import React from "react";
import BlogTitleMdx from "~/app/blog/(blog-content)/blog-title.mdx";
import { useMDXComponents as useCustomMDXComponents } from "~/features/md/components/mdx-components";

type Props = {};

function BlogTitle({}: Props) {
  const components = useCustomMDXComponents({});
  return <BlogTitleMdx components={components} />;
}

export default BlogTitle;
