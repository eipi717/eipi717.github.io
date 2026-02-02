"use client";

import { personal } from "@/data/site";
import clsx from "clsx";
import { Calendar, Mail, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

export default function ContactBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const contacts = [
    {
      icon: Rocket,
      label: "Start project",
      href: `mailto:${personal.email}?subject=Project%20Inquiry`,
    },
    {
      icon: Calendar,
      label: "Book a call",
      href: `mailto:${personal.email}?subject=Schedule%20Intro`,
    },
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${personal.email}`,
    },
  ];

  return (
    <div
      className={clsx(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <div className="px-6 py-4 rounded-[999px] bg-white/90 dark:bg-stone-900/90 backdrop-blur-nav border border-stone-300 dark:border-stone-700 shadow-xl">
        <div className="flex items-center gap-2">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const isExternal = contact.href.startsWith("http");

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="group flex items-center gap-2 px-4 py-2 rounded-[999px] hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200"
                aria-label={contact.label}
                title={contact.label}
                onMouseEnter={(e) => {
                  const icon = e.currentTarget.querySelector<SVGSVGElement>("svg");
                  if (icon) icon.style.color = "var(--color-persona-primary)";
                }}
                onMouseLeave={(e) => {
                  const icon = e.currentTarget.querySelector<SVGSVGElement>("svg");
                  if (icon) icon.style.color = "";
                }}
              >
                <Icon className="w-4 h-4 text-stone-600 dark:text-stone-400 transition-colors duration-200" />
                <span className="text-sm font-medium hidden sm:inline">{contact.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
