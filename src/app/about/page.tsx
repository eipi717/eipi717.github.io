"use client";

import { useMode } from "@/context/ModeContext";
import { personal, personas } from "@/data/site";
import { Award, CheckCircle2, GraduationCap, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function About() {
  const { mode } = useMode();
  const persona = personas[mode];

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4">About</h2>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto">{persona.summary}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <div className="flex items-center gap-2 px-5 py-3 rounded-[999px] bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
          <MapPin className="w-4 h-4" style={{ color: "var(--color-persona-primary)" }} />
          <span className="text-sm font-medium">{personal.location}</span>
        </div>
        <div className="flex items-center gap-2 px-5 py-3 rounded-[999px] bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
          <Mail className="w-4 h-4" style={{ color: "var(--color-persona-primary)" }} />
          <span className="text-sm font-medium">{personal.email}</span>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-center mb-8">Highlights</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {persona.highlights.map((highlight) => (
            <div
              key={highlight}
              className="p-6 rounded-2xl bg-white dark:bg-stone-900 border-2 hover:shadow-md transition-all duration-300"
              style={{ borderColor: "var(--color-stone-300)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-persona-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-stone-300)";
              }}
            >
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--color-persona-primary)" }} />
                <p className="text-stone-700 dark:text-stone-300">{highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
          <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: "var(--color-persona-primary-bg)" }}>
            <GraduationCap className="w-6 h-6" style={{ color: "var(--color-persona-primary)" }} />
          </div>
          <h4 className="mb-4">Education</h4>
          <div className="space-y-4">
            {personal.education.map((edu) => (
              <div key={edu.school}>
                <div className="font-medium mb-1">{edu.degree}</div>
                <div className="text-sm text-stone-600 dark:text-stone-400">{edu.school}</div>
                <div className="text-xs font-mono text-stone-500 dark:text-stone-500 mt-1">{edu.detail}</div>
                <div className="text-xs font-mono text-stone-500 dark:text-stone-500 mt-1">{edu.date}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
          <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: "var(--color-persona-primary-bg)" }}>
            <Award className="w-6 h-6" style={{ color: "var(--color-persona-primary)" }} />
          </div>
          <h4 className="mb-4">Certifications</h4>
          <div className="space-y-3">
            {personal.certifications.map((cert) => (
              <div key={cert}>
                <div className="font-medium text-sm">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-center mb-8">Skills</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {persona.skills.map((group) => (
            <div key={group.title} className="p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
              <h4 className="mb-4">{group.title}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs font-mono border"
                    style={{
                      borderColor: "var(--color-persona-primary)",
                      color: "var(--color-persona-primary)",
                      backgroundColor: "var(--color-persona-primary-bg)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900 p-10 text-center">
        <h3 className="mb-4">Want to work together?</h3>
        <p className="text-stone-600 dark:text-stone-400 mb-6">
          Share your goals and I’ll propose a plan, timeline, and fixed quote.
        </p>
        <Link
          href="/contact"
          className="px-8 py-4 rounded-2xl text-white font-medium hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2"
          style={{ backgroundColor: "var(--color-persona-primary)" }}
        >
          Start a project
        </Link>
      </div>
    </div>
  );
}

