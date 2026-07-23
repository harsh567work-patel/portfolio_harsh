import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { ProjectCase } from "@/components/projects/ProjectCase";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectCase project={project} />;
}
