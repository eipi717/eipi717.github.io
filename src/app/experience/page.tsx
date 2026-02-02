"use client";

import { useMode } from "@/context/ModeContext";
import { experiences, personas } from "@/data/site";
import { motion, useReducedMotion } from "framer-motion";

export default function Experience() {
  const { mode } = useMode();
  const persona = personas[mode];
  const shouldReduceMotion = useReducedMotion() ?? false;
  const filtered = experiences
    .filter((exp) => exp.category === mode)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4">Experience</h2>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          Roles and outcomes aligned with {persona.role.toLowerCase()} work.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: "var(--color-persona-primary)", opacity: 0.2 }} />

        <div className="space-y-12">
          {filtered.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}-${exp.date}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.05 }}
              className="relative pl-12 md:pl-24"
            >
              <div
                className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-stone-100 dark:border-stone-950 transition-colors duration-300"
                style={{ backgroundColor: "var(--color-persona-primary)" }}
              />

              <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <h4 className="mb-1">{exp.role}</h4>
                    <div className="text-stone-600 dark:text-stone-400">{exp.company}</div>
                  </div>
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border self-start"
                    style={{
                      borderColor: "var(--color-persona-primary)",
                      color: "var(--color-persona-primary)",
                      backgroundColor: "var(--color-persona-primary-bg)",
                    }}
                  >
                    {exp.date}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-stone-700 dark:text-stone-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--color-persona-primary)" }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

