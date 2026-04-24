"use client";

import { useMode } from "@/context/ModeContext";
import { freelance, getFreelanceServices, getFreelanceStats } from "@/data/freelance";
import { personal, personas, projects } from "@/data/site";
import type { PersonaKey } from "@/data/site";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, ExternalLink, Globe, MapPin, Monitor, Network, Server, Shield, Wrench, Zap } from "lucide-react";
import Link from "next/link";
import type React from "react";

const SERVICE_ICONS: Record<PersonaKey, React.ComponentType<{ className?: string; style?: React.CSSProperties }>[]> = {
  dev: [Server, Zap, Shield, Globe],
  it: [Network, Monitor, Wrench],
};

export default function Home() {
  const { mode } = useMode();
  const persona = personas[mode];
  const PersonaIcon = persona.icon;
  const stats = getFreelanceStats(mode);
  const services = getFreelanceServices(mode);
  const featured = projects.filter((p) => p.category === mode && p.featured).slice(0, 2);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const topSkills = persona.skills.slice(0, 2).flatMap((g) => [...g.items].slice(0, 3)).slice(0, 5);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <HeroSection
        personaRole={persona.role}
        personaTagline={persona.tagline}
        topSkills={topSkills}
        shouldReduceMotion={shouldReduceMotion}
      />

      {stats.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-10">
          <div className="grid md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.06 }}
                className="rounded-2xl border border-stone-300 dark:border-stone-800 bg-white/80 dark:bg-stone-900/80 p-5 backdrop-blur"
                style={{ borderLeftWidth: "3px", borderLeftColor: "var(--color-persona-primary)" }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500">{stat.label}</p>
                <p className="text-2xl font-semibold mt-2">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-[999px] border border-stone-300 dark:border-stone-800 bg-white/70 dark:bg-stone-900/70">
              <span className="avail-dot" />
              <span className="text-sm font-medium">{freelance.availability}</span>
            </div>
            <h2>Hire a partner who ships with clarity.</h2>
            <p className="text-stone-600 dark:text-stone-400">
              I help teams deliver reliable systems, automate workflows, and document everything so you can scale
              without surprises.
            </p>
            <div className="grid gap-3">
              {persona.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: "var(--color-persona-primary)" }} />
                  <span className="text-stone-700 dark:text-stone-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900 p-8 shadow-xl relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10 -translate-y-10 translate-x-10"
              style={{ backgroundColor: "var(--color-persona-primary)" }}
            />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl" style={{ backgroundColor: "var(--color-persona-primary-bg)" }}>
                <PersonaIcon className="w-6 h-6" style={{ color: "var(--color-persona-primary)" }} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500">Focus</p>
                <h3 className="text-xl font-semibold">{persona.role}</h3>
              </div>
            </div>
            <p className="text-stone-600 dark:text-stone-400">{persona.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {persona.skills.slice(0, 3).map((group) => (
                <span
                  key={group.title}
                  className="px-3 py-1 rounded-full text-xs font-mono border"
                  style={{
                    borderColor: "var(--color-persona-primary)",
                    color: "var(--color-persona-primary)",
                    backgroundColor: "var(--color-persona-primary-bg)",
                  }}
                >
                  {group.title}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Services</h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            Flexible engagements tailored to your goals.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => {
            const Icon = SERVICE_ICONS[mode][index];
            return (
              <motion.div
                key={service.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className="group p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, var(--color-persona-primary-bg) 0%, transparent 70%)" }}
                />
                <div className="relative">
                  <div className="p-2.5 rounded-xl w-fit mb-4" style={{ backgroundColor: "var(--color-persona-primary-bg)" }}>
                    <Icon className="w-5 h-5" style={{ color: "var(--color-persona-primary)" }} />
                  </div>
                  <h4 className="mb-2">{service.title}</h4>
                  <p className="text-sm text-stone-600 dark:text-stone-400">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            style={{ color: "var(--color-persona-primary)" }}
          >
            View service packages
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {mode !== "it" && featured.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex items-center justify-between mb-8"
          >
            <h2>{"Projects"}</h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              style={{ color: "var(--color-persona-primary)" }}
            >
              View all
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((project, index) => {
              const externalHref = project.links?.live ?? project.links?.repo ?? project.links?.writeup ?? "";
              return (
                <motion.div
                  key={project.slug}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="group rounded-2xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4>{project.title}</h4>
                    {externalHref && (
                      <a
                        href={externalHref}
                        target="_blank"
                        rel="noreferrer"
                        className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors flex-shrink-0"
                        aria-label={`${project.title} external link`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mb-4">{project.desc}</p>
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
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div
            className="rounded-3xl border border-stone-300 dark:border-stone-800 p-10 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, var(--color-persona-primary-bg) 0%, var(--color-background) 60%)" }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: "var(--color-persona-primary)" }}
            />
            <div className="relative">
              <h2 className="mb-4">Let&apos;s build your next milestone.</h2>
              <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mb-6">
                {freelance.availabilityNote}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={`mailto:${personal.email}?subject=Project%20Inquiry`}
                  className="px-8 py-4 rounded-2xl text-white font-medium hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2"
                  style={{ backgroundColor: "var(--color-persona-primary)" }}
                >
                  Start a project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-2xl border-2 font-medium hover:bg-stone-100 dark:hover:bg-stone-800 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
                  style={{ borderColor: "var(--color-persona-primary)", color: "var(--color-persona-primary)" }}
                >
                  View contact options
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function HeroSection({
  personaRole,
  personaTagline,
  topSkills,
  shouldReduceMotion,
}: {
  personaRole: string;
  personaTagline: string;
  topSkills: string[];
  shouldReduceMotion: boolean;
}) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-texture opacity-40" />
        <div className="absolute inset-0 noise-texture" />
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: "var(--color-persona-primary)" }} />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-10" style={{ backgroundColor: "var(--color-glow-amber)" }} />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ backgroundColor: "var(--color-persona-primary)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-[999px] bg-white/70 dark:bg-stone-900/60 backdrop-blur-sm border border-stone-300 dark:border-stone-700 mb-8"
            >
              <span className="avail-dot" />
              <span className="text-sm font-medium">{personaRole} · Freelance</span>
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              I help teams ship{" "}
              <span className="gradient-text">reliable systems</span>{" "}
              and automate operations.
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
              className="text-xl text-stone-600 dark:text-stone-400 mb-8 max-w-2xl"
            >
              {personaTagline}
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-4 rounded-2xl text-white font-medium hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2"
                style={{ backgroundColor: "var(--color-persona-primary)" }}
              >
                Book a call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/experience"
                className="px-8 py-4 rounded-2xl border border-stone-300 dark:border-stone-700 font-medium hover:bg-stone-100 dark:hover:bg-stone-900 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2 text-stone-700 dark:text-stone-300"
              >
                View experience
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24, scale: 0.95 }}
            animate={
              shouldReduceMotion
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 1, x: 0, scale: 1, y: [0, -8, 0] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    opacity: { duration: 0.7, delay: 0.2 },
                    x: { duration: 0.7, delay: 0.2, type: "spring", stiffness: 80 },
                    scale: { duration: 0.7, delay: 0.2 },
                    y: { duration: 6, ease: "easeInOut", repeat: Infinity, delay: 1.2 },
                  }
            }
            className="hidden lg:block"
          >
            <div className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md p-7 shadow-2xl relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 -translate-y-8 translate-x-8 pointer-events-none"
                style={{ backgroundColor: "var(--color-persona-primary)" }}
              />

              <div className="flex items-center gap-4 mb-5 relative">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-lg flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--color-persona-primary), var(--color-persona-primary-light))" }}
                >
                  NH
                </div>
                <div>
                  <p className="font-semibold text-base leading-tight">Nicholas Ho</p>
                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">{personaRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 mb-5 relative">
                <span className="avail-dot flex-shrink-0" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Available for projects</span>
              </div>

              <div className="flex flex-wrap gap-1.5 relative">
                {topSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-full text-xs font-mono border"
                    style={{
                      borderColor: "var(--color-persona-primary)",
                      color: "var(--color-persona-primary)",
                      backgroundColor: "var(--color-persona-primary-bg)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center gap-2 text-xs text-stone-500 dark:text-stone-500 relative">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>North York, ON · Remote OK</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
