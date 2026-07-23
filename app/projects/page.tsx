import Link from "next/link";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] pt-24 text-[#111111]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 lg:px-12">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#111111]/60">Archive</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">A growing body of work arranged as a shared case-study system.</h1>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/" className="text-sm uppercase tracking-[0.3em] text-[#111111]/70 underline decoration-[#111111]/20 underline-offset-4">
            Return to home
          </Link>
        </div>
      </div>
    </main>
  );
}
