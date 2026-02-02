"use client";

import { useMode } from "@/context/ModeContext";
import { projects, personas } from "@/data/site";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const { mode } = useMode();
  const persona = personas[mode];
  const filtered = projects.filter((project) => project.category === mode);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4">{mode === "dev" ? "Projects" : "Case Studies"}</h2>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          Work that helps teams {persona.verb}.
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center text-stone-600 dark:text-stone-400">New work coming soon.</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project) => {
            const externalHref = project.links?.live ?? project.links?.repo ?? project.links?.writeup ?? "";
            const externalLabel =
              (project.links?.live ? "Live" : null) ??
              (project.links?.repo ? "GitHub" : null) ??
              (project.links?.writeup ? "Writeup" : null) ??
              "Link";

            return (
              <article
                key={project.slug}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-28 overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundColor: "var(--color-persona-primary)" }} />
                  <div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 transition-opacity duration-300 group-hover:opacity-50"
                    style={{ backgroundColor: "var(--color-persona-primary)" }}
                  />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-2xl opacity-20" style={{ backgroundColor: "var(--color-glow-amber)" }} />
                </div>

                <div className="p-6 pt-4 space-y-4">
                  <div>
                    <h4 className="mb-2">{project.title}</h4>
                    <p className="text-sm text-stone-600 dark:text-stone-400">{project.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-mono border"
                        style={{
                          borderColor: "var(--color-persona-primary)",
                          color: "var(--color-persona-primary)",
                          backgroundColor: "var(--color-persona-primary-bg)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
                    {project.caseStudy.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-persona-primary)" }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3 pt-3 border-t border-stone-200 dark:border-stone-800">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
                      style={{ color: "var(--color-persona-primary)" }}
                    >
                      Start similar project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    {externalHref ? (
                      <a
                        href={externalHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
                        aria-label={`${project.title} ${externalLabel}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span className="sr-only">{externalLabel}</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

