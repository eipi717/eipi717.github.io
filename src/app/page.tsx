"use client";

import { useMode } from "@/context/ModeContext";
import { freelance, getFreelancePackages, getFreelanceServices, getFreelanceStats } from "@/data/freelance";
import { personal, personas } from "@/data/site";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Download, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { mode } = useMode();
  const persona = personas[mode];
  const PersonaIcon = persona.icon;
  const stats = getFreelanceStats(mode).filter((stat) => {
    const label = stat.label.trim().toLowerCase();
    return !["projects delivered", "avg. delivery", "repeat clients", "client satisfaction"].includes(label);
  });
  const services = getFreelanceServices(mode);
  const packages = getFreelancePackages(mode);
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <HeroSection personaRole={persona.role} shouldReduceMotion={shouldReduceMotion} />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-10">
        <div className="grid md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.06 }}
              className="rounded-2xl border border-stone-300 dark:border-stone-800 bg-white/80 dark:bg-stone-900/80 p-5 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500">{stat.label}</p>
              <p className="text-2xl font-semibold mt-2">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[999px] border border-stone-300 dark:border-stone-800 bg-white/70 dark:bg-stone-900/70">
              <Sparkles className="w-4 h-4" style={{ color: "var(--color-persona-primary)" }} />
              <span className="text-sm font-medium">{freelance.availability}</span>
            </div>
            <h2 className="text-3xl md:text-4xl">Hire a partner who ships with clarity.</h2>
            <p className="text-stone-600 dark:text-stone-400">
              I help teams deliver reliable systems, automate workflows, and document everything so you can scale
              without surprises.
            </p>
            <div className="grid gap-3">
              {persona.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-1" style={{ color: "var(--color-persona-primary)" }} />
                  <span className="text-stone-700 dark:text-stone-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900 p-8 shadow-xl">
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
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="mb-4">Services</h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            Flexible engagements tailored to your goals.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h4 className="mb-2">{service.title}</h4>
              <p className="text-sm text-stone-600 dark:text-stone-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="mb-4">Engagement Packages</h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            Choose a format that matches your timeline and scope.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.name} className="rounded-2xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900 p-6">
              <div className="flex items-center justify-between">
                <h4>{pkg.name}</h4>
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-2">{pkg.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-stone-600 dark:text-stone-400">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-persona-primary)" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="mb-4">Process</h2>
          <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
            Simple, transparent steps that keep projects moving.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {freelance.process.slice(1).map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500">
                Step {index + 1}
              </p>
              <h4 className="mt-3 mb-2">{step.title}</h4>
              <p className="text-sm text-stone-600 dark:text-stone-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="rounded-3xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900 p-10 text-center">
          <h2 className="mb-4">Let’s build your next milestone.</h2>
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
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroSection({ personaRole, shouldReduceMotion }: { personaRole: string; shouldReduceMotion: boolean }) {
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
        <div className="max-w-4xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[999px] bg-white/70 dark:bg-stone-900/60 backdrop-blur-sm border border-stone-300 dark:border-stone-700 mb-6"
          >
            <Sparkles className="w-4 h-4" style={{ color: "var(--color-persona-primary)" }} />
            <span className="text-sm font-medium">{personaRole} · Freelance</span>
          </motion.div>

          <h1 className="mb-6">I help teams ship reliable systems and automate operations.</h1>
          <p className="text-xl text-stone-600 dark:text-stone-400 mb-6 max-w-2xl">{personal.title}</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl text-white font-medium hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2"
              style={{ backgroundColor: "var(--color-persona-primary)" }}
            >
              Book a call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
