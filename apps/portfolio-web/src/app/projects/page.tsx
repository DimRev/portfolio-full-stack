import React from "react";
import ProjectsTitle from "~/features/projects/components/projects-title";

type Props = {};

function ProjectsPage({}: Props) {
  return (
    <main className="min-h-[90dvh] flex-1">
      <ProjectsTitle />
    </main>
  );
}

export default ProjectsPage;
