"use client";
import React from "react";
import AboutMeMdx from "~/app/(home-content)/about-me.mdx";
import { useMDXComponents as useCustomMDXComponents } from "~/features/md/components/mdx-components";

type Props = {};

function AboutMeContent({}: Props) {
  const components = useCustomMDXComponents({});
  return <AboutMeMdx components={components} />;
}

export default AboutMeContent;
