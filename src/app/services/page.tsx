"use client";

import { useMode } from "@/context/ModeContext";
import { freelance, getFreelancePackages, getFreelanceServices } from "@/data/freelance";
import { personal, personas, projects } from "@/data/site";
import { ArrowRight, Calendar, ClipboardCheck, Mail } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const { mode } = useMode();
  const persona = personas[mode];
  const services = getFreelanceServices(mode);
  const packages = getFreelancePackages(mode);
  const featured = projects.filter((p) => p.category === mode && p.featured).slice(0, 2);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4">Services</h2>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          Engage me as your {persona.role.toLowerCase()} to ship fast and cleanly.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
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

      <div className="grid md:grid-cols-3 gap-6 mb-16">
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

      <div className="rounded-3xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900 p-10 text-center">
        <h3 className="mb-4">How we start</h3>
        <p className="text-stone-600 dark:text-stone-400 mb-6">
          Send a brief, get a plan within 48 hours, and we kick off with clear milestones.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`mailto:${personal.email}?subject=Project%20Brief`}
            className="px-8 py-4 rounded-2xl text-white font-medium hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2"
            style={{ backgroundColor: "var(--color-persona-primary)" }}
          >
            <Mail className="w-4 h-4" />
            Send brief
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-2xl border-2 font-medium hover:bg-stone-100 dark:hover:bg-stone-800 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            style={{ borderColor: "var(--color-persona-primary)", color: "var(--color-persona-primary)" }}
          >
            <Calendar className="w-4 h-4" />
            Book a call
          </Link>
          <Link
            href={`mailto:${personal.email}?subject=Project%20Scope%20Help`}
            className="px-8 py-4 rounded-2xl border-2 font-medium hover:bg-stone-100 dark:hover:bg-stone-800 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            style={{ borderColor: "var(--color-persona-primary)", color: "var(--color-persona-primary)" }}
          >
            <ClipboardCheck className="w-4 h-4" />
            Scope help
          </Link>
        </div>
        <p className="text-sm text-stone-500 dark:text-stone-500 mt-6">{freelance.availabilityNote}</p>
      </div>
    </div>
  );
}
