import { Terminal, ShieldCheck } from "lucide-react";

export type PersonaKey = "dev" | "it";

export type WorkLinks = {
  live?: string;
  repo?: string;
  writeup?: string;
};

export type WorkItem = {
  title: string;
  slug: string;
  category: PersonaKey;
  tech: readonly string[];
  desc: string;
  caseStudy: readonly string[];
  featured?: boolean;
  links?: WorkLinks;
};

export const personal = {
  name: "Chun Him Ho (Nicholas)",
  title: "Developer | IT Support Specialist",
  email: "nicholasriven717@gmail.com",
  phone: "437-660-3280",
  location: "Toronto, Ontario, Canada",
  links: {
    github: "https://github.com/eipi717",
    linkedin: "https://www.linkedin.com/in/nicholaschho",
    resume: "mailto:nicholasriven717@gmail.com",
  },
  education: [
    { school: "The University of Hong Kong", degree: "BEng (Computer Engineering)", detail: "Minor in Mathematics", date: "2018 - 2023" },
  ],
  certifications: [
    "ISC2 Certified in Cybersecurity",
    "Microsoft Azure Fundamentals",
    "CompTIA Security+ (in progress)",
  ],
};

export const personas = {
  dev: {
    role: "Developer",
    verb: "drive impact",
    headline: "Backend systems that scale.",
    tagline: "APIs, automation, and data pipelines that cut manual effort and improve reliability.",
    summary: "Backend engineer focused on resilient services, automation, and data accuracy. I build systems that are easy to operate, document, and extend.",
    highlights: [
      "API design with clear contracts, observability, and secure defaults.",
      "Automation workflows that reduce repetitive manual work.",
      "Production-ready services built with Python and Java.",
    ],
    icon: Terminal,
    skills: [
      {
        title: "Programming Languages",
        items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "Shell Scripting"],
      },
      {
        title: "Frameworks & Libraries",
        items: ["Spring Boot", "FastAPI", "ExpressJS", "React", "Selenium", "Django", "Hibernate"],
      },
      {
        title: "Backend & API Development",
        items: ["RESTful API Design", "JWT Authentication", "Role-Based Access Control (RBAC)", "Secure API Development"],
      },
      {
        title: "Automation & Data Processing",
        items: ["Web Scraping", "Data Extraction", "Data Normalization", "Automation Pipelines"],
      },
      {
        title: "AI & LLM Integration",
        items: ["LLM-Powered Automation", "Local LLM Hosting (Ollama)"],
      },
      {
        title: "Tools & Platforms",
        items: ["Linux", "Docker", "Git", "GitHub", "Postman", "Agile", "Jira"],
      },
    ],
  },
  it: {
    role: "IT Support Specialist",
    verb: "keep teams online",
    headline: "Infrastructure that stays online.",
    tagline: "Network hardening, endpoint security, and on-site delivery that keep teams productive.",
    summary: "IT specialist focused on uptime, security, and fast response. I harden networks, manage endpoints, and document systems so support stays reliable.",
    highlights: [
      "Firewall, VPN, and VLAN hardening aligned to compliance needs.",
      "Proactive monitoring and backups to reduce downtime risk.",
      "L1/L2 support with documented runbooks and fast resolution.",
    ],
    icon: ShieldCheck,
    skills: [
      {
        title: "Operating Systems",
        items: ["Windows 10", "Windows 11", "Windows Server 2019-2025", "macOS", "Linux"],
      },
      {
        title: "Networking & Security",
        items: [
          "VLAN",
          "DMZ",
          "DHCP",
          "DNS",
          "Sophos Firewall (XG)",
          "VPN (Site-to-Site, Remote Access)",
          "IPS",
          "IDS",
          "Email Filtering",
          "Access Control Lists (ACL)",
          "Wireshark",
        ],
      },
      {
        title: "Switching & Wireless",
        items: [
          "Cisco Switches",
          "Aruba Switches",
          "TP-Link Switches",
          "UniFi Switches",
          "UniFi Access Points",
          "UniFi Cloud Key",
          "Trunk Ports",
          "Link Aggregation (LAG)",
        ],
      },
      {
        title: "Servers, Identity & Storage",
        items: [
          "Active Directory (On-Premises)",
          "Microsoft Entra ID (Azure AD Hybrid)",
          "QNAP NAS",
          "File Server Management",
          "SMB File Sharing",
          "User Permissions",
          "Virtualization Station",
          "Windows Server Virtual Machines",
          "QNAP Sync",
        ],
      },
      {
        title: "Physical Security Systems",
        items: [
          "CCTV Installation and Configuration (Hikvision, Dahua, Axis)",
          "Access Control Systems (EyeonGate, ICT)",
          "Alarm Systems (Alarm.com, DSC, PowerG, 2GIG/Qolsys)",
        ],
      },
      {
        title: "Backup & Endpoint Security",
        items: ["Acronis Backup", "BackupAssist", "Endpoint Protection (ESET, Symantec, Norton 365)"],
      },
      {
        title: "Hardware & IT Support",
        items: [
          "PC Assembly and Repair",
          "RAM Upgrade",
          "SSD/HDD/NVMe Replacement",
          "NAS Management",
          "UPS Systems",
          "Printers and Peripherals",
          "Remote Support: TeamViewer, AnyDesk, Remote Desktop (RDP)",
        ],
      },
      {
        title: "Tools & Scripting",
        items: ["GLPI Ticketing System", "PowerShell", "Python"],
      },
    ],
  },
} as const;

export const experiences = [
  {
    company: "Technethon",
    role: "IT Administrator (Contract)",
    date: "Jul 2025 - Present",
    category: "it",
    order: 1,
    bullets: [
      "Configured and maintained Sophos firewalls, including firewall rules, IPS policies, and VPNs (SSL and site-to-site).",
      "Designed and implemented VLAN-segmented networks, trunk ports, and managed switch configurations.",
      "Built and administered Windows Server (2019-2025) environments, including Active Directory and hybrid Microsoft Entra.",
      "Created and managed Microsoft 365 accounts, mailboxes, licenses, and supported Outlook and MFA issues.",
      "Deployed and administered NAS as file servers; configured SMB permissions, hosted Windows Server VMs, and implemented QNAP Sync.",
      "Installed and configured routers, switches, wireless access points, and Cat6 Ethernet cabling; documented IP addressing.",
      "Managed system backups and restores using Acronis and BackupAssist.",
      "Performed Windows 10 -> 11 upgrades, workstation deployments, and hardware replacements.",
    ],
  },
  {
    company: "Technethon",
    role: "Junior IT Technician",
    date: "May 2024 - Jul 2025",
    category: "it",
    order: 2,
    bullets: [
      "Delivered IT support and infrastructure setup for clients in healthcare and manufacturing sectors.",
      "Installed and configured 50+ CCTV, access control, and alarm systems to enhance physical security.",
      "Secured IP camera networks using DMZ architecture to isolate them from internal networks.",
      "Built and maintained Windows Server environments with Active Directory and hybrid Entra ID.",
      "Managed file and folder permissions, network shares, and group access rights.",
      "Provided remote and on-site infrastructure support using TeamViewer, AnyDesk, and RDP.",
      "Assisted with new employee onboarding, device provisioning, and printer/scanner setup.",
      "Installed and maintained standard business applications (Office 365, Teams, Zoom, Adobe).",
      "Provided remote support and documented work using GLPI.",
    ],
  },
  {
    company: "FutureSight Inc.",
    role: "Contract Developer",
    date: "Mar 2024 - May 2024",
    category: "it",
    order: 3,
    bullets: [
      "Implemented a web scraper tool using a large language model to automate information summarization and database updates via RESTful API, enabling clients to tailor marketing solutions.",
    ],
  },
  {
    company: "Technethon",
    role: "Junior IT Technician",
    date: "May 2024 - Present",
    category: "dev",
    order: 1,
    bullets: [
      "Provided infrastructure support for 10+ clients across healthcare, manufacturing, and property management; implemented security measures to improve operational efficiency and cybersecurity.",
      "Developed automation scripts and tooling to support infrastructure configuration and deployment consistency.",
      "Assisted in designing security-camera system layouts and role-based access control models.",
      "Contributed to internal documentation and operational tooling improvements.",
    ],
  },
  {
    company: "FutureSight Inc.",
    role: "Contract Developer",
    date: "Mar 2024 - May 2024",
    category: "dev",
    order: 2,
    bullets: [
      "Developed AI-powered tools to analyze client growth and enhance marketing research, improving automation for data processing.",
      "Developed Python-based automation tools to support competitive intelligence and marketing research.",
      "Built automated web scraping and data processing pipelines integrated with backend systems via RESTful APIs.",
      "Implemented LLM-powered summarization workflows to automate data analysis and reporting.",
      "Collaborated in Agile sprints to deliver features and maintain technical documentation.",
    ],
  },
  {
    company: "Lively Impact Technology Limited",
    role: "Software Developer",
    date: "Aug 2022 - May 2024",
    category: "dev",
    order: 3,
    bullets: [
      "Collaborated with government clients to build a Selenium-based web scraping tool for 50+ food-recall sites, eliminating ~3 hours of manual collection per day.",
      "Designed and executed comprehensive RESTful API specifications and User Acceptance Testing (UAT) plans to align delivery with client requirements.",
      "Implemented JWT authentication to secure API endpoints and prevent vulnerabilities.",
      "Built a social tracking system with sentiment analysis and dashboards using React and Spring Boot (Java 8+), enabling real-time brand reputation monitoring.",
      "Developed backend applications using Spring Boot to support data ingestion and processing workflows.",
    ],
  },
] as const;

export const projects: readonly WorkItem[] = [
  {
    title: "PriceMatchAPI",
    slug: "pricematchapi",
    category: "dev",
    featured: true,
    tech: ["Python", "FastAPI", "Selenium", "Ollama (Gemma 2)"],
    desc: "Automated price-tracking API that standardizes product names with LLMs.",
    links: {
      repo: "https://github.com/eipi717",
    },
    caseStudy: [
      "Goal: automate price tracking while normalizing product naming.",
      "Delivery: API endpoints supported by LLM-assisted normalization.",
      "Stack: Python, FastAPI, Selenium, Ollama (Gemma 2).",
    ],
  },
  {
    title: "Church Management App",
    slug: "church-management-app",
    category: "dev",
    featured: true,
    tech: ["Flutter", "Dart", "Auth API"],
    desc: "Cross-platform booking and announcements system with authenticated access.",
    links: {
      repo: "https://github.com/eipi717",
    },
    caseStudy: [
      "Goal: centralize bookings and announcements across devices.",
      "Delivery: authenticated Flutter experience with API-backed data.",
      "Stack: Flutter, Dart, Auth API.",
    ],
  },
  {
    title: "Secure Network Deployment",
    slug: "secure-network-deployment",
    category: "it",
    featured: true,
    tech: ["Sophos XG", "VLAN", "DMZ"],
    desc: "Segmented VLAN topology protecting 100+ cameras via DMZ isolation.",
    links: {
      writeup: "https://www.linkedin.com/in/nicholaschho/",
    },
    caseStudy: [
      "Goal: isolate camera networks and reduce security risk.",
      "Delivery: segmented VLAN topology with firewall policy tuning.",
      "Stack: Sophos XG, VLAN, DMZ.",
    ],
  },
  {
    title: "Incident Playbooks",
    slug: "incident-playbooks",
    category: "it",
    featured: true,
    tech: ["PowerShell", "Intune", "O365"],
    desc: "Automated remediation scripts for onboarding, patching, and device recovery.",
    links: {
      writeup: "https://www.linkedin.com/in/nicholaschho/",
    },
    caseStudy: [
      "Goal: speed up onboarding, patching, and recovery workflows.",
      "Delivery: scripted playbooks aligned to device management.",
      "Stack: PowerShell, Intune, O365.",
    ],
  },
] as const;
