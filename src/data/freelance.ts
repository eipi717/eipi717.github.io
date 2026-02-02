import type { Mode } from "@/context/ModeContext";

export const freelance = {
  availability: "Open for new projects",
  stats: {
    dev: [
      { label: "Projects delivered", value: "28+" },
      { label: "Avg. delivery", value: "3–6 weeks" },
      { label: "Repeat clients", value: "62%" },
      { label: "Client satisfaction", value: "4.9/5" },
    ],
    it: [
      { label: "Deployments completed", value: "45+" },
      { label: "Avg. response time", value: "< 2 hrs" },
      { label: "Repeat clients", value: "—" },
      { label: "Client satisfaction", value: "4.8/5" },
    ],
  },
  services: {
    dev: [
      {
        title: "Backend & APIs",
        desc: "Design and build robust APIs with clear contracts, auth, and monitoring.",
      },
      {
        title: "Automation & Data",
        desc: "Automate repetitive workflows, data scraping, and reliable pipelines.",
      },
      {
        title: "System Hardening",
        desc: "Observability, performance tuning, and security best practices.",
      },
    ],
    it: [
      {
        title: "Network & Security",
        desc: "VLANs, firewall rules, VPNs, and secure segmentation.",
      },
      {
        title: "Device & Identity",
        desc: "Endpoint management, M365/Entra governance, and policy rollout.",
      },
      {
        title: "On‑Site Delivery",
        desc: "Cabling, access control, CCTV, and rollout documentation.",
      },
    ],
  },
  packages: {
    dev: [
      {
        name: "Starter",
        price: "$2.5k",
        desc: "Small feature or automation sprint.",
        items: ["Discovery + plan", "1–2 core deliverables", "Handoff docs"],
      },
      {
        name: "Build",
        price: "$6k–$12k",
        desc: "MVP or service build in 3–6 weeks.",
        items: ["Architecture + API design", "Testing + monitoring", "Deployment support"],
      },
      {
        name: "Retainer",
        price: "$2k/mo",
        desc: "Ongoing improvements & support.",
        items: ["Priority fixes", "Monthly enhancements", "Analytics review"],
      },
    ],
    it: [
      {
        name: "Starter",
        price: "$1.5k",
        desc: "Audit + quick fixes for stability.",
        items: ["Network review", "Security checklist", "Action plan"],
      },
      {
        name: "Rollout",
        price: "$4k–$9k",
        desc: "Infrastructure upgrade or deployment.",
        items: ["On‑site setup", "Device hardening", "Runbooks"],
      },
      {
        name: "Retainer",
        price: "$1.2k/mo",
        desc: "Ongoing support & monitoring.",
        items: ["Priority support", "Patch cadence", "Quarterly reviews"],
      },
    ],
  },
  process: [
    {
      title: "Discovery",
      desc: "30‑minute call to map goals, constraints, and success metrics.",
    },
    {
      title: "Plan",
      desc: "I provide a scope, timeline, and fixed quote or milestone plan.",
    },
    {
      title: "Build",
      desc: "Weekly updates with demos, progress notes, and clear next steps.",
    },
    {
      title: "Launch",
      desc: "Handoff docs, training, and support for a smooth transition.",
    },
  ],
  testimonials: [
    {
      quote: "Delivered ahead of schedule and improved our API reliability immediately.",
      author: "CTO, Northbridge Retail",
    },
    {
      quote: "Clear communication, zero surprises, and excellent documentation.",
      author: "Head of Ops, Ridgeway Logistics",
    },
    {
      quote: "We reduced tickets by 40% within a month of the rollout.",
      author: "IT Manager, Medstone Clinic",
    },
  ],
  faqs: [
    {
      q: "How fast can you start?",
      a: "Typically within 1–2 weeks depending on scope. I’ll confirm availability after the intro call.",
    },
    {
      q: "Do you work fixed‑price or hourly?",
      a: "Most projects are fixed‑price with milestones. For ongoing work, I offer a monthly retainer.",
    },
    {
      q: "Can you work with our existing stack?",
      a: "Yes. I adapt to your stack and document everything for easy handoff.",
    },
    {
      q: "What does a typical engagement look like?",
      a: "Discovery → plan → build → launch, with weekly updates and demos.",
    },
  ],
  availabilityNote: "Currently booking new projects for next month.",
};

export function getFreelanceStats(mode: Mode) {
  return freelance.stats[mode];
}

export function getFreelanceServices(mode: Mode) {
  return freelance.services[mode];
}

export function getFreelancePackages(mode: Mode) {
  return freelance.packages[mode];
}
