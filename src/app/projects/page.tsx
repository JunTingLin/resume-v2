import { generatePageMetadata } from "../seo";
import { ProjectCard } from "../../components/project-card";
import React from "react";
import { PROJECTS, OPEN_SOURCE_CONTRIBUTIONS } from "@/data/projects";

export const metadata = generatePageMetadata({
  title: "Projects",
  description:
    "",
});

export default function Projects() {
  return (
    <React.Fragment>
      <section>
        <h1 className="mb-4 text-2xl font-bold tracking-tighter">My Projects</h1>
        <div
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 "
        >
          {PROJECTS.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-4 text-xl font-bold tracking-tighter">Open Source Contributions</h2>
        <div
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2"
        >
          {OPEN_SOURCE_CONTRIBUTIONS.map((contribution, idx) => (
            <ProjectCard project={contribution} key={idx} />
          ))}
        </div>
      </section>

    </React.Fragment>
  );
}
