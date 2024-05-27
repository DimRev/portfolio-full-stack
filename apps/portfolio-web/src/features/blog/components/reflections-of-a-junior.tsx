"use client";
import React from "react";
import ReflectionsOfAJuniorMDX from "~/app/blog/(blog-content)/1-reflections-of-a-junior.mdx";
import { useMDXComponents as useCustomMDXComponents } from "~/features/md/components/mdx-components";

type Props = {};

function BlogPost({}: Props) {
  const components = useCustomMDXComponents({});
  return <ReflectionsOfAJuniorMDX components={components} />;
}

export default BlogPost;
