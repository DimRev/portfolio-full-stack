"use client";
import React from "react";
import ProjectsTitleMdx from "~/app/projects/(projects-content)/projects-title.mdx";
import { useMDXComponents as useCustomMDXComponents } from "~/features/md/components/mdx-components";

type Props = {};

function ProjectsTitle({}: Props) {
  const components = useCustomMDXComponents({});
  return <ProjectsTitleMdx components={components} />;
}

export default ProjectsTitle;
