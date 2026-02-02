"use client";

import clsx from "clsx";
import { Heart } from "lucide-react";
import { personal } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={clsx(
        "py-12 px-6 lg:px-8 border-t border-stone-300 dark:border-stone-800"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className={clsx("flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400")}>
            <span>© {currentYear} {personal.name}</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
