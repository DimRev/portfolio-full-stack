"use client";
import React from "react";
import HomeTitleMdx from "~/app/(home-content)/home-title.mdx";
import { useMDXComponents as useCustomMDXComponents } from "~/features/md/components/mdx-components";

type Props = {};

function HomeTitle({}: Props) {
  const components = useCustomMDXComponents({});
  return <HomeTitleMdx components={components} />;
}

export default HomeTitle;
