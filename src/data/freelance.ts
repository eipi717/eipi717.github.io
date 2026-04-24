import type { Mode } from "@/context/ModeContext";

type FreelanceStat = {
  label: string;
  value: string;
};

export const freelance = {
  availability: "Open for new projects",
  stats: {
    dev: [] as FreelanceStat[],
    it: [] as FreelanceStat[],
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
      {
        title: "Website Development",
        desc: "Modernizing websites for professional institutions — including a financial institution's full redesign to a clean, contemporary look.",
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
        desc: "Small feature or automation sprint.",
        items: ["Discovery + plan", "1–2 core deliverables", "Handoff docs"],
      },
      {
        name: "Build",
        desc: "MVP or service build in 1–2 weeks.",
        items: ["Architecture + API design", "Testing + monitoring", "Deployment support"],
      },
      {
        name: "Retainer",
        desc: "Ongoing improvements & support.",
        items: ["Priority fixes", "Monthly enhancements", "Analytics review"],
      },
    ],
    it: [
      {
        name: "Starter",
        desc: "Audit + quick fixes for stability.",
        items: ["Network review", "Security checklist", "Action plan"],
      },
      {
        name: "Rollout",
        desc: "Infrastructure upgrade or deployment.",
        items: ["On‑site setup", "Device hardening", "Runbooks"],
      },
      {
        name: "Retainer",
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
      desc: "I provide a scope, timeline, and milestone plan.",
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
  faqs: [
    {
      q: "How fast can you start?",
      a: "Typically within 1–2 weeks depending on scope. I’ll confirm availability after the intro call.",
    },
    {
      q: "How are projects structured?",
      a: "Most projects use clear milestones. For ongoing work, I offer a monthly retainer.",
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
