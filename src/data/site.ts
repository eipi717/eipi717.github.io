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
  title: "Software Developer & IT Specialist",
  email: "nicholasriven717@gmail.com",
  phone: "437-660-3280",
  location: "North York, Ontario, Canada",
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
    tagline: "4+ years building scalable APIs, automating workflows, and modernizing enterprise systems.",
    summary: "Software developer with 4+ years building scalable backend systems and modernizing enterprise applications. Specialized in RESTful APIs, secure system design, and automation — including LLM-assisted workflows.",
    highlights: [
      "Modernizing legacy systems into scalable, maintainable applications.",
      "RESTful APIs with secure design, JWT auth, and observability.",
      "Automation and LLM-assisted workflows that eliminate manual effort.",
    ],
    icon: Terminal,
    skills: [
      {
        title: "Programming Languages",
        items: ["Python", "Java (8–21)", "JavaScript", "TypeScript", "SQL", "Shell Scripting"],
      },
      {
        title: "Frameworks & Libraries",
        items: ["Spring Boot", "FastAPI", "ExpressJS", "React", "Selenium", "Hibernate", "OpenCV"],
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
        items: ["LLM-Powered Automation (GPT-4, Gemma 2)", "Local LLM Hosting (Ollama)", "Computer Vision (OpenCV)"],
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
    role: "System Administrator",
    date: "Jul 2025 – Apr 2026",
    category: "it",
    order: 1,
    bullets: [
      "Configured and maintained Sophos firewalls including firewall rules, site-to-site VPNs, and IPS policies; designed VLAN-segmented networks and managed switch configurations.",
      "Built and administered Windows Server (2019–2025) environments with Active Directory, hybrid Microsoft Entra ID, SMB permissions, Group Policy, and access controls.",
      "Deployed and maintained NAS-based file systems and Windows Server VMs; implemented QNAP Sync and managed backups with Acronis and BackupAssist to reduce RPO.",
      "Administered Microsoft 365 environments: user provisioning, mailbox management, licensing, MFA troubleshooting, and end-user support for Outlook and Teams.",
      "Installed and secured 50+ CCTV, access control, and alarm systems; implemented DMZ architectures to isolate camera networks.",
      "Developed scripting-based automation for VLAN deployment (port templates, trunk/access config, validation), reducing configuration time by 70%.",
      "Delivered remote and on-site IT support for healthcare and manufacturing clients; documented incidents and resolutions in GLPI.",
    ],
  },
  {
    company: "Technethon",
    role: "Junior IT Technician",
    date: "May 2024 – Jun 2025",
    category: "it",
    order: 2,
    bullets: [
      "Configured Sophos firewalls, VLAN-segmented networks, and site-to-site VPNs for 10+ client environments in healthcare and manufacturing.",
      "Built and administered Windows Server (2019–2025) environments with Active Directory, hybrid Microsoft Entra ID, and SMB file server permissions.",
      "Installed and secured 50+ CCTV, access control, and alarm systems; implemented DMZ architectures to isolate camera networks from internal infrastructure.",
      "Administered Microsoft 365 environments and provided end-user support for Outlook, Teams, and MFA issues.",
      "Delivered remote and on-site IT support; documented incidents and resolutions in GLPI and maintained IP addressing schemes.",
      "Performed workstation deployments, Windows 10/11 upgrades, hardware replacements, and employee onboarding.",
    ],
  },
  {
    company: "Temerty Faculty of Medicine, University of Toronto",
    role: "Application Developer",
    date: "Apr 2026 – Present",
    category: "dev",
    order: 1,
    bullets: [
      "Contribute to modernizing legacy systems into scalable, maintainable applications supporting research and institutional operations.",
      "Develop and maintain web applications; design, test, and optimize scalable code based on evolving user and business requirements.",
      "Translate stakeholder needs into technical solutions; ensure code quality, security compliance, and adherence to best practices.",
      "Collaborate with cross-functional teams to deliver projects on schedule and provide technical guidance to end-users and stakeholders.",
    ],
  },
  {
    company: "Technethon",
    role: "System Administrator",
    date: "May 2024 – Apr 2026",
    category: "dev",
    order: 2,
    bullets: [
      "Developed scripting-based automation for VLAN deployment (port templates, trunk/access configuration, validation), reducing configuration time by 70% and minimizing errors.",
      "Provided infrastructure support for 10+ clients across healthcare, manufacturing, and property management.",
      "Designed security-camera system layouts and role-based access control models.",
      "Contributed to internal documentation and operational tooling improvements.",
    ],
  },
  {
    company: "Lively Impact Technology Limited",
    role: "Software Developer",
    date: "Aug 2022 – May 2024",
    category: "dev",
    order: 3,
    bullets: [
      "Collaborated with government stakeholders to build a Selenium-based automation solution extracting structured data from 50+ public-sector websites, eliminating ~3 hours of manual work daily.",
      "Refactored and upgraded legacy Spring Boot applications from Java 8 to Java 21, improving maintainability, performance, and long-term supportability.",
      "Designed and implemented RESTful APIs using Spring Boot and Hibernate ORM; conducted UAT to ensure alignment with business and regulatory requirements.",
      "Implemented JWT-based authentication to secure API endpoints against unauthorized access.",
      "Built a social tracking and sentiment analysis platform using React and Spring Boot, enabling real-time brand reputation monitoring.",
      "Automated workflows using shell scripting on Unix systems, reducing manual effort across data ingestion pipelines.",
    ],
  },
  {
    company: "FutureSight Inc.",
    role: "Contract Developer",
    date: "Mar 2024 – Apr 2024",
    category: "dev",
    order: 4,
    bullets: [
      "Designed and implemented LLM-assisted (GPT-4) web scraping and summarization workflows, automating data extraction and transforming unstructured content into actionable marketing insights.",
      "Developed Python-based automation tools to support competitive intelligence and marketing research, improving data processing efficiency and scalability.",
      "Integrated database operations via RESTful APIs, enabling dynamic data updates based on target business profiles.",
      "Collaborated in Agile sprints to deliver features; authored and maintained technical documentation and API specifications.",
    ],
  },
  {
    company: "WildFaces.ai",
    role: "AI Specialist",
    date: "May 2022 – Aug 2022",
    category: "dev",
    order: 5,
    bullets: [
      "Implemented computer vision models using OpenCV and Python for facial feature analysis, achieving over 60% classification accuracy.",
      "Researched facial geometry (angles and proportions) for gender classification, identifying key features for predictive modeling.",
      "Collected and curated facial datasets to ensure data quality and coverage for reliable model training.",
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
    caseStudy: [
      "Goal: centralize bookings and announcements across devices.",
      "Delivery: authenticated Flutter experience with API-backed data.",
      "Stack: Flutter, Dart, Auth API.",
    ],
  },
] as const;
