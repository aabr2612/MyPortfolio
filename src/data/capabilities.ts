import React from "react";

export interface SkillItem {
  name: string;
  iconClass: string;
  customAttr?: {
    "data-icon"?: string;
    style?: React.CSSProperties;
  };
}

export interface Capability {
  id: string;
  tabLabel: string;
  icon: string;
  badge: string;
  title: string;
  description: string;
  deliverables: string[];
  skills: SkillItem[];
}

export const capabilities: Capability[] = [
  {
    id: "fullstack",
    tabLabel: "Full-Stack Web",
    icon: "bx bx-laptop",
    badge: "Web Applications",
    title: "Full-Stack Web Applications",
    description:
      "Custom web applications built for reliability and scale, connecting clean, responsive user interfaces with robust backend architectures.",
    deliverables: [
      "End-to-end responsive web applications with React",
      "Clean component state & modular frontend architecture",
      "RESTful API integration & client-side caching",
    ],
    skills: [
      { name: "React", iconClass: "devicon-react-original colored" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
      { name: "Express", iconClass: "devicon-express-original colored" },
      { name: "HTML5/CSS3", iconClass: "devicon-html5-plain colored" },
    ],
  },
  {
    id: "backend",
    tabLabel: "Backend & APIs",
    icon: "bx bx-server",
    badge: "Server Architecture",
    title: "Backend & API Engineering",
    description:
      "Design and implementation of secure REST APIs, core business logic, authentication systems, and seamless third-party integrations.",
    deliverables: [
      "RESTful API design & endpoint security",
      "Authentication & Role-Based Access Control (RBAC)",
      "External service synchronization & latency optimization",
    ],
    skills: [
      { name: "C# / .NET", iconClass: "devicon-csharp-plain colored" },
      { name: "ASP.NET Core", iconClass: "devicon-dot-net-plain colored" },
      { name: "Python", iconClass: "devicon-python-plain colored" },
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
      { name: "REST APIs", iconClass: "bx bx-cloud-upload" },
      {
        name: "Postman",
        iconClass: "iconify",
        customAttr: {
          "data-icon": "simple-icons:postman",
          style: { color: "#FF6C37" },
        },
      },
    ],
  },
  {
    id: "database",
    tabLabel: "Database Architecture",
    icon: "bx bx-data",
    badge: "Data Systems",
    title: "Database Architecture & Optimization",
    description:
      "Schema design, query optimization, and structured migrations to ensure high data integrity, reliability, and speed.",
    deliverables: [
      "Normalized relational & document database schemas",
      "Complex SQL stored procedures & query optimization",
      "Zero-data-loss legacy data migrations & audits",
    ],
    skills: [
      {
        name: "SQL Server",
        iconClass: "devicon-microsoftsqlserver-plain colored",
      },
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
      { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
      { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
      { name: "Schema Design", iconClass: "bx bx-data" },
      { name: "Stored Procs", iconClass: "bx bx-code-alt" },
    ],
  },
  {
    id: "enterprise",
    tabLabel: "Enterprise Systems",
    icon: "bx bx-buildings",
    badge: "Enterprise Solutions",
    title: "Enterprise Business Systems",
    description:
      "Custom internal tools, ERP modules, HR & payroll systems, and automated operational SQL reporting to streamline operations.",
    deliverables: [
      "Modular ERP, HR & payroll lifecycle engines",
      "Employee Self-Service (ESS) & internal management portals",
      "Automated SQL reporting & audit workflows",
    ],
    skills: [
      { name: "C#", iconClass: "devicon-csharp-plain colored" },
      { name: "ASP.NET", iconClass: "devicon-dot-net-plain colored" },
      {
        name: "SQL Server",
        iconClass: "devicon-microsoftsqlserver-plain colored",
      },
      { name: "DevExpress", iconClass: "bx bx-layer" },
      { name: "Migration", iconClass: "bx bx-transfer" },
      { name: "Code Review", iconClass: "bx bx-check-shield" },
    ],
  },
];
