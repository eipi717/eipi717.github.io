"use client";

import { freelance } from "@/data/freelance";
import { personal } from "@/data/site";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4">Let’s work together</h2>
        <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          Share your goals, timeline, and budget range — I’ll respond with a plan within 48 hours.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <ContactCard
          icon={<Mail className="w-5 h-5" />}
          label="Email"
          value={personal.email}
          href={`mailto:${personal.email}?subject=Project%20Inquiry`}
        />
        <ContactCard
          icon={<Phone className="w-5 h-5" />}
          label="Phone"
          value={personal.phone}
          href={`tel:${personal.phone}`}
        />
        <ContactCard
          icon={<Calendar className="w-5 h-5" />}
          label="Schedule"
          value="Book a 20‑min intro"
          href={`mailto:${personal.email}?subject=Schedule%20Intro`}
        />
      </div>

      <div className="rounded-3xl border border-stone-300 dark:border-stone-800 bg-white dark:bg-stone-900 p-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8">
          <div>
            <h3 className="mb-3">Project brief template</h3>
            <p className="text-stone-600 dark:text-stone-400 mb-4">
              Include these points to speed up scoping and pricing.
            </p>
            <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
              {[
                "Goal / outcome you want to achieve",
                "Timeline / deadline",
                "Budget range",
                "Current stack or tooling",
                "Any must‑have requirements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--color-persona-primary)" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900/80 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500">Availability</p>
            <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">{freelance.availabilityNote}</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
              <MapPin className="w-4 h-4" style={{ color: "var(--color-persona-primary)" }} />
              {personal.location}
            </div>
            <Link
              href={`mailto:${personal.email}?subject=Project%20Brief`}
              className="mt-6 px-6 py-3 rounded-2xl text-white font-medium hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2"
              style={{ backgroundColor: "var(--color-persona-primary)" }}
            >
              Send project brief
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-stone-500 dark:text-stone-500">
          Prefer async? Email works great — I’ll follow up with next steps.
        </p>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <Link href={href} className="group">
      <div
        className="p-6 rounded-2xl bg-white dark:bg-stone-900 border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        style={{ borderColor: "var(--color-stone-300)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--color-persona-primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--color-stone-300)";
        }}
      >
        <div className="flex items-center gap-3">
          <div className="inline-flex p-3 rounded-xl" style={{ backgroundColor: "var(--color-persona-primary-bg)" }}>
            <span style={{ color: "var(--color-persona-primary)" }}>{icon}</span>
          </div>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500">{label}</p>
            <p className="font-medium text-stone-800 dark:text-stone-200 break-words">{value}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

