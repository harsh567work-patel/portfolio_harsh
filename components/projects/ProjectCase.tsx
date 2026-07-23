"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/types";

const disciplineStyles: Record<string, string> = {
  data: "bg-[#111111] text-[#f7f5f0]",
  design: "bg-[#d9a35d] text-[#111111]",
  code: "bg-[#111111]/10 text-[#111111]",
};

export function ProjectCase({ project }: { project: Project }) {
  const stories = [
    { label: "DATA", body: project.dataStory, discipline: "data" as const },
    { label: "DESIGN", body: project.designStory, discipline: "design" as const },
    { label: "CODE", body: project.codeStory, discipline: "code" as const },
  ];

  return (
    <article className="px-4 py-24 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-4 border-b border-[#111111]/10 pb-8">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#111111]/60">Case study</p>
          <h1 className="max-w-3xl text-4xl leading-tight text-[#111111] sm:text-5xl lg:text-6xl">{project.title}</h1>
          <p className="max-w-2xl text-lg leading-8 text-[#111111]/70">{project.tagline}</p>
          <div className="flex flex-wrap gap-2">
            {project.roles.map((role) => (
              <span key={role} className="rounded-full border border-[#111111]/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-[#111111]/70">
                {role}
              </span>
            ))}
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {stories.map((story) => (
              <section key={story.label} className="rounded-[1.75rem] border border-[#111111]/10 bg-[#f7f5f0] p-6 shadow-sm">
                <div className={`mb-4 inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.3em] ${disciplineStyles[story.discipline]}`}>
                  {story.label}
                </div>
                <p className="text-base leading-8 text-[#111111]/80">{story.body}</p>
              </section>
            ))}
          </div>

          <aside className="space-y-6">
            <section className="rounded-[1.75rem] border border-[#111111]/10 bg-[#111111] p-6 text-[#f7f5f0]">
              <h2 className="mb-4 text-sm uppercase tracking-[0.3em] text-[#f7f5f0]/70">Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-[#f7f5f0]/20 px-3 py-1 text-sm">{item}</span>
                ))}
              </div>
            </section>
            {project.links && project.links.length > 0 && (
              <section className="rounded-[1.75rem] border border-[#111111]/10 bg-[#f7f5f0] p-6">
                <h2 className="mb-4 text-sm uppercase tracking-[0.3em] text-[#111111]/70">Links</h2>
                <ul className="space-y-3">
                  {project.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-base text-[#111111] underline decoration-[#111111]/20 underline-offset-4">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </aside>
        </div>

        {project.media.length > 0 && (
          <section className="grid gap-6 md:grid-cols-2">
            {project.media.map((media, index) => (
              <div key={`${media.src}-${index}`} className="overflow-hidden rounded-[1.75rem] border border-[#111111]/10 bg-[#f7f5f0]">
                <div className="relative aspect-[4/3]">
                  <Image src={media.src} alt={media.alt} fill className="object-cover" />
                </div>
                <div className="p-4 text-sm text-[#111111]/70">{media.alt}</div>
              </div>
            ))}
          </section>
        )}
      </div>
    </article>
  );
}
