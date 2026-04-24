"use client";

import clsx from "clsx";
import { Github, Linkedin } from "lucide-react";
import { personal } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={clsx(
        "py-10 px-6 lg:px-8 border-t border-stone-300 dark:border-stone-800"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-stone-600 dark:text-stone-400">
            © {currentYear} {personal.name}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={personal.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
