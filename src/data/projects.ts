export interface ProjectItem {
  id: number;
  title: string;
  timeline: string;
  icon: string;
  techStack: string;
  description: string;
  detailedOverview: string;
  keyFeatures: string[];
  architecture: string[];
  image?: string;
  links: {
    code?: string;
    live?: string;
    liveLabel?: string;
    contactDemo?: string;
  };
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "SERP — Workforce Platform",
    timeline: "Jun 2026 – Present",
    icon: "bx bx-buildings",
    techStack:
      "Node.js, Express || PostgreSQL, Prisma || Next.js, TS || Cloudflare R2",
    description:
      "Enterprise multi-tenant workforce platform with 50+ table schema, strict company-level data isolation, modular RBAC, company-aware caching, and R2 document storage.",
    detailedOverview:
      "SERP is an enterprise-scale workforce platform engineered to manage complex business operations across multiple companies through unified admin and tenant workspaces. It streamlines contracts, workforce deployments, duty rosters, client relations, and operational assets within an isolated, high-security environment.",
    keyFeatures: [
      "Unified Super Admin control center and isolated company tenant workspaces with fast company switching.",
      "Workforce operations: employee lifecycle, contract management, site deployments, and attendance tracking.",
      "Asset allocation, client management, and dynamic operational reporting.",
      "Permission-driven UI rendering based on assigned administrative modules.",
    ],
    architecture: [
      "PostgreSQL schema with 50+ normalized tables enforcing strict company-level data isolation.",
      "Modular Role-Based Access Control (RBAC) with per-module permissions and site-level restrictions.",
      "Company-aware caching layer and API rate limiting to safeguard against heavy multi-tenant traffic.",
      "Document and contract storage pipeline built directly on Cloudflare R2 object storage.",
    ],
    image: "images/projects/serp.png",
    links: {
      contactDemo: "Contact for Demo",
    },
  },
  {
    id: 2,
    title: "EduSolutions UAE (KHDA)",
    timeline: "Feb 2026 – Present",
    icon: "bx bxs-graduation",
    techStack:
      "React, TypeScript || Node.js, Express || Supabase || Gemini & Whisper AI",
    description:
      "AI compliance platform for UAE schools turning brief lesson notes or voice dictation into inspection-ready A4 PDF evidence across all 18 KHDA indicators with 4-tier RBAC.",
    detailedOverview:
      "Built for schools and academic coordinators in Dubai and the wider UAE, this platform automates official inspection documentation aligned with the Knowledge and Human Development Authority (KHDA) School Inspection Supplement. It converts brief teacher input or voice dictation into inspection-ready A4 vector PDF documentation in under five minutes.",
    keyFeatures: [
      "4-step guided wizard: lesson metadata, AI generation, media/photo upload, and live A4 document preview.",
      "Voice-to-Text teacher dictation via OpenAI Whisper with live browser microphone input metering.",
      "Full bilingual English and German support with localized school branding.",
      "Tokenized no-signup trial links governed by atomic database export quotas for prospective schools.",
      "School coordinator dashboard for teacher approvals, seat allocations, and document generation.",
    ],
    architecture: [
      "Multi-tier RBAC (Super Admin, Delegated Admin, School Org, Educator) with seat licensing and expiration controls.",
      "Google Gemini fallback cascade enforcing quantitative KHDA descriptors across generated narratives.",
      "Client-side vector A4 PDF synthesis using jsPDF and jspdf-autotable with exact print margins and photo grids.",
      "Backend-for-Frontend (BFF) architecture isolating database service-role keys from client access via HTTP-only cookies.",
    ],
    image: "images/projects/edusolutions.png",
    links: {
      live: "https://edusolutionsuae.com",
    },
  },
  {
    id: 3,
    title: "Forever E-Commerce",
    timeline: "Jan 2025 – May 2025",
    icon: "bx bx-shopping-bag",
    techStack:
      "React, Tailwind || Node.js, Express || MongoDB || Stripe & Cloudinary",
    description:
      "Decoupled 3-app commerce suite with customer storefront, merchant admin dashboard, hybrid guest cart sync, Stripe checkout, and 5-stage order fulfillment.",
    detailedOverview:
      "A complete commercial-ready e-commerce platform built across three distinct services: a responsive customer storefront, a merchant administration control panel, and a centralized Node.js/Express REST API backed by MongoDB Atlas and Stripe payment processing.",
    keyFeatures: [
      "Product catalog with multi-facet category/type filters, dynamic keyword search, and price sorting.",
      "Multi-variant shopping cart supporting size selection with hybrid guest-to-authenticated database synchronization.",
      "Dual checkout options: online card checkout via Stripe and Cash on Delivery (COD).",
      "Merchant Admin dashboard for adding products with Cloudinary image uploads, stock levels, and order fulfillment.",
      "Order history for customers with 5-stage fulfillment status updates.",
    ],
    architecture: [
      "Decoupled 3-application architecture with CORS origin controls and token-based authentication.",
      "Multi-image upload pipeline using Multer disk storage and Cloudinary CDN hosting.",
      "Stripe payment return verification with automatic cart cleanup and unpaid order removal.",
    ],
    image: "images/projects/forever.png",
    links: {
      code: "https://github.com/aabr2612/E-Commerce-Frontend",
      live: "https://e-commerce-frontend-bice-ten.vercel.app/",
    },
  },
  {
    id: 4,
    title: "KiteDB",
    timeline: "Mar 2025 – May 2025",
    icon: "bx bx-data",
    techStack: "Python || Flask || TCP/IP || Custom NoSQL DBMS",
    description:
      "Lightweight NoSQL DBMS supporting JSON document storage with custom B-tree indexing, WAL atomic transactions, multi-threaded TCP server, and crash recovery for 10k+ docs.",
    detailedOverview:
      "KiteDB is a lightweight NoSQL document database built from scratch in Python to explore database storage internals. It implements custom indexing algorithms, write-ahead logging (WAL) for atomic transactions, and a multi-threaded TCP server for concurrent client read/write queries.",
    keyFeatures: [
      "Custom query language supporting nested JSON document lookup, logical operators ($and, $or), and comparisons.",
      "Multi-threaded TCP networking layer allowing concurrent client sockets with minimal latency.",
      "Role-based Access Control (ACL) security enforcing collection-level authentication.",
      "Crash recovery and persistence verified across 10,000+ JSON documents.",
    ],
    architecture: [
      "In-memory B-tree indexing for rapid O(log n) document lookups.",
      "Write-Ahead Logging (WAL) protocol ensuring atomic commits and durability across crashes.",
      "Query parser validating JSON schemas and executing complex filter criteria.",
    ],
    image: "images/projects/kitedb.jpg",
    links: { code: "https://github.com/aabr2612/kitedb" },
  },
  {
    id: 5,
    title: "Xzamine",
    timeline: "Mar 2025 – May 2025",
    icon: "bx bx-shield-quarter",
    techStack:
      "Python, Flask || GPT-4o-mini & Gemma3 || Celery & Redis || Chrome Ext",
    description:
      "Chrome extension for X (Twitter) analyzing tweets under PECA-2016 via Gemma3 and GPT-4o-mini with asynchronous Celery/Redis analysis and structured toxic scoring.",
    detailedOverview:
      "Xzamine is a legal compliance browser extension for X (formerly Twitter) built to help users evaluate posts against Pakistan's Prevention of Electronic Crimes Act (PECA 2016). It integrates directly into the Twitter feed, analyzing posts on demand and providing structured legal reports.",
    keyFeatures: [
      "Chrome extension injecting dynamic 'Analyze' action buttons directly into tweets in the live web feed.",
      "Visual compliance indicator labeling content as compliant or potentially infringing.",
      "Detailed reporting view displaying sentiment confidence, toxicity scores, cultural context, and legal rationale.",
    ],
    architecture: [
      "Dual evaluation pipeline: Local Gemma3 model via Ollama paired with GPT-4o-mini via OpenAI API.",
      "Asynchronous background task processing using Celery and Redis to handle evaluations without blocking.",
      "Client polling mechanism to retrieve finalized analysis payloads seamlessly.",
    ],
    image: "images/projects/xzamine.jpg",
    links: { code: "https://github.com/aabr2612/xzamine" },
  },
  {
    id: 6,
    title: "Indian Rummy",
    timeline: "Nov 2024 – Dec 2025",
    icon: "bx bx-network-chart",
    techStack: "Python, Flask || Graph Traversal (DFS/BFS) || Data Structures",
    description:
      "Low-latency multiplayer game engine using graph traversal for sequence detection and hand validation with custom Doubly Linked Lists, Queues, and turn synchronization.",
    detailedOverview:
      "A real-time card engine engineered for low-latency multiplayer gameplay. Hand evaluations are modeled as graph problems, using custom traversal algorithms to detect valid card sequences and sets in real time while synchronizing game state across concurrent player connections.",
    keyFeatures: [
      "Real-time game room management supporting turn-based multiplayer card gameplay.",
      "Instant sequence detection and hand validation using custom traversal algorithms.",
      "Automatic handling of card draw, discard piles, and game termination checks.",
    ],
    architecture: [
      "DFS/BFS graph traversal algorithms for rapid pattern recognition and valid sequence discovery.",
      "Custom-engineered Doubly Linked Lists, Queues, and Stacks to maximize algorithmic efficiency.",
      "Socket-level concurrency handling with state synchronization across player clients.",
    ],
    image: "images/projects/rummy.jpg",
    links: { code: "https://github.com/aabr2612/indian-rummy" },
  },
  {
    id: 7,
    title: "Xcell Digital",
    timeline: "Jul 2024 – Aug 2024",
    icon: "bx bx-globe",
    techStack: "React || Responsive UX || Performance Optimization",
    description:
      "High-conversion digital agency portfolio with responsive modern layouts, smooth micro-interactions, contact workflows, and optimized Vercel asset delivery.",
    detailedOverview:
      "A digital agency portfolio platform engineered to showcase client services, case studies, and modern frontend capabilities. Focused heavily on high performance, seamless responsive typography, and subtle micro-interactions to maximize visitor conversion.",
    keyFeatures: [
      "Modern agency layout with dynamic hero sections and interactive service showcases.",
      "Fluid responsive design built for seamless viewing across smartphones, tablets, and high-DPI displays.",
      "Interactive case study galleries and frictionless inquiry contact forms.",
    ],
    architecture: [
      "Modular React component hierarchy designed for rapid maintenance and expansion.",
      "Optimized asset pipeline deployed on Vercel's global edge network for sub-second load times.",
      "CSS variable theming and layout performance tuning minimizing Cumulative Layout Shift (CLS).",
    ],
    image: "images/projects/xcell-digital-services.jpg",
    links: {
      code: "https://github.com/aabr2612/xcell-digital-services",
      live: "https://xcell-digital-services.vercel.app",
    },
  },
];
