/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║              PROJECT DATA — EASY TO UPDATE               ║
 * ║                                                          ║
 * ║  To add a project: copy one object block and paste it   ║
 * ║  at the top of the array. Fill in your details.         ║
 * ║                                                          ║
 * ║  Fields:                                                 ║
 * ║   key             — unique number (increment each time) ║
 * ║   name            — project title                       ║
 * ║   category        — 'AI/ML' | 'Web' | 'Systems' |        ║
 * ║                     'Cloud/DevOps' | 'Mobile' | 'Data'   ║
 * ║   featured        — true = big tabbed card, false =      ║
 * ║                     compact "more projects" card         ║
 * ║   languages       — array of tech strings                ║
 * ║   sitelink        — live URL (or null)                  ║
 * ║   repolink        — GitHub URL (or null)                 ║
 * ║   projectimage    — path to screenshot (or null for a    ║
 * ║                     category placeholder graphic)        ║
 * ║   projectDescription — short description paragraph      ║
 * ║   siteicon        — leave as '/site-icons/livesite.png' ║
 * ║   repoicon        — leave as '/site-icons/repo.png'     ║
 * ╚══════════════════════════════════════════════════════════╝
 */

export default [
  {
    key: 1,
    name: 'Image Aesthetic Quality Assessment Pipeline',
    category: 'AI/ML',
    featured: true,
    languages: ['Python', 'PyTorch', 'CLIP ViT-B/16', 'ONNX Runtime', 'Scikit-learn'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      "Multi-task CLIP ViT-B/16 pipeline fine-tuned on 255K+ AVA images for aesthetic scoring, scene recognition, and attribute prediction — SRCC 0.730, PLCC 0.740, 81.2% binary accuracy. Quantized to ONNX int8 for a 5.6x inference speedup (340ms → 61ms), deployed as an interactive Streamlit demo on Hugging Face Spaces with live before/after auto-enhance.",
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 2,
    name: 'Enterprise RAG and Agentic AI Pipeline',
    category: 'AI/ML',
    featured: true,
    languages: ['Python', 'Claude API', 'LangChain', 'LangGraph', 'AWS'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'End-to-end RAG pipeline on Claude API + LangChain with a multi-step agent layer that decomposes complex queries and runs multiple retrievals before synthesizing an answer, deployed as REST microservices on AWS. Built a golden-dataset evaluation framework tracking hallucination rate, retrieval quality, and tool-call reliability, and fixed a table-boundary chunking bug causing hallucinated citations on financial documents.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 3,
    name: 'On-Device ML Inference Compiler Engine',
    category: 'Systems',
    featured: false,
    languages: ['C++', 'Python', 'PyTorch', 'JAX', 'LLVM'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      "End-to-end inference engine deploying PyTorch/JAX transformer models to edge devices, applying operator fusion and LLVM-based compiler passes to cut inference latency by 30% — a workflow directly analogous to Apple's CoreML/ANE compilation pipeline.",
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 4,
    name: 'Conversational Misinformation Detection System',
    category: 'AI/ML',
    featured: true,
    languages: ['Python', 'PyTorch', 'DeBERTa-v3', 'Hugging Face', 'NLP'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'Fine-tuned DeBERTa-v3 on 12.7K labeled news samples, reaching 99.81% accuracy and 0.998 F1, with temperature-scaled confidence calibration and an LLM-as-judge layer surfacing manipulation patterns. Shipped as a conversational Streamlit interface with configurable thresholds and full audit trails for moderator review.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 5,
    name: 'High Performance ML Hardware Driver',
    category: 'Systems',
    featured: false,
    languages: ['C++', 'Multithreading', 'GPU Paradigms', 'gdb'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'C++ driver for host-to-accelerator ML communication with manual memory management and multithreading, lifting throughput 30% across concurrent data streams. Resolved race conditions with gdb and built custom event loops scheduling 5,000+ concurrent streams for deterministic real-time inference.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 6,
    name: 'LSM Tree Key-Value Database Engine',
    category: 'Systems',
    featured: true,
    languages: ['C++', 'Systems Programming', 'Data Structures', 'gdb', 'Linux'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'Log-Structured Merge tree storage engine built from scratch in C++ — in-memory Red-Black Trees, disk-backed SSTables, custom Bloom filters and sparse indexing. Cut disk read latency 95% across 5GB+ datasets, debugged entirely with gdb under strict manual memory management.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 7,
    name: 'Fintel: Financial Telemetry & Observability Framework',
    category: 'Data',
    featured: false,
    languages: ['Python', 'Pandas', 'NumPy', 'SciPy', 'SQL'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'A 4-module Python framework applying production observability principles to market data — automated SMA/EMA/RSI/Bollinger signal detection, Sharpe ratio and max-drawdown tracking, and SLO-based risk governance, with a Tableau-compatible analytics layer. Validated against a year of real AAPL data, catching 30+ anomaly signals across 5 alert rules.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 8,
    name: 'Distributed News Analytics Pipeline',
    category: 'Data',
    featured: false,
    languages: ['Python', 'Apache Spark', 'PySpark', 'Databricks', 'GCP'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'Large-scale PySpark ETL/ELT pipeline on Databricks/GCP ingesting and transforming 210,000+ HuffPost articles (2012–2022). Built topic trend, seasonal aggregation, and sentiment scoring workflows, optimizing Spark job execution to meet strict SLAs for downstream ML consumption.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 9,
    name: 'Revels Ticketing and E-Market Platform',
    category: 'Web',
    featured: true,
    languages: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    sitelink: 'https://revels-mit-2023.netlify.app/',
    repolink: 'https://github.com/perfectionist7/revels-2023-website',
    projectimage: '/project-imgs/revels.png',
    projectDescription:
      "Full-stack TypeScript ticketing and e-commerce platform built end-to-end (Postgres schema, REST API, React frontend) for Revels, MIT Manipal's national fest — shipped to real users handling high-volume concurrent transactions live. Cursor-based pagination and virtualized lists for large transaction datasets, with Jest + Cypress coverage across checkout and permission flows.",
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 10,
    name: 'GitOps Driven Microservices Architecture',
    category: 'Cloud/DevOps',
    featured: true,
    languages: ['Terraform', 'Kubernetes', 'GKE', 'ArgoCD', 'Helm'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'Provisioned a production-grade GKE cluster with Terraform and GitHub Actions, driving an Infrastructure-as-Code pipeline with Helm deployments. Rolled out microservices via ArgoCD with zero-downtime deploys, Horizontal Pod Autoscalers, and SLO-based monitoring.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 11,
    name: 'Cloud Native Financial Knowledge Pipeline',
    category: 'Cloud/DevOps',
    featured: false,
    languages: ['Java', 'Spring Boot', 'Hibernate', 'MongoDB', 'Kafka'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'Cloud-native microservices application in Java (Spring Boot + Hibernate) processing unstructured financial data at scale via REST APIs and MongoDB, with continuous deployment pipelines. Designed the full SDLC — unit/integration testing and CI/CD — for production-ready delivery.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 12,
    name: 'StoryLine AI Application',
    category: 'AI/ML',
    featured: false,
    languages: ['React', 'TypeScript', 'Python', 'Flask', 'LLM APIs'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'Full-stack GenAI web app shipped at a Google Hackathon in under 48 hours — Flask backend + React/TypeScript frontend processing live video and voice in real time, with LLM APIs generating and editing video content on the fly.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 13,
    name: 'Empirical Market Analysis via Bloomberg Terminal',
    category: 'Data',
    featured: false,
    languages: ['Bloomberg Terminal', 'Python', 'SQL', 'Regression Analysis'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'Used Bloomberg Terminal functions (COMP, GP, FA) to extract and regress real market data across tech and automotive sectors, surfacing valuation discrepancies and systematic anomalies for potential quantitative strategies.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 14,
    name: 'Enterprise Observability & Security Pipeline',
    category: 'Cloud/DevOps',
    featured: false,
    languages: ['Kubernetes', 'Prometheus', 'Grafana', 'Splunk', 'NGINX'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'Production observability stack with Prometheus and Grafana for real-time cluster health, NGINX Ingress and Horizontal Pod Autoscaler configuration, and alerting for anomalous traffic. Forwarded logs to Splunk and wrote runbooks enabling rapid fault and security triage.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 15,
    name: 'Disaster Recovery & Linux Node Automation',
    category: 'Cloud/DevOps',
    featured: false,
    languages: ['Linux', 'Ansible', 'Velero', 'PostgreSQL', 'Bash'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'Automated baseline hardening of Linux worker nodes with Ansible, enforcing compliance across distributed infrastructure. Built a Velero-based disaster recovery protocol for stateful PostgreSQL databases, validating zero-data-loss restores under simulated cluster failure.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 16,
    name: 'CardioRehab: Cardiac Rehabilitation App',
    category: 'Mobile',
    featured: true,
    languages: ['Swift', 'SwiftUI', 'UIKit', 'Flutter'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'Native iOS cardiac rehab app (Swift/SwiftUI) built for Kasturba Medical College, digitizing exercise prescriptions, medication reminders, and progress tracking — later ported to a Flutter hybrid build for multilingual, cross-platform reach. Actively used in PhD research, letting doctors remotely monitor patients instead of requiring twice-daily hospital visits.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 17,
    name: 'Caffeine and Calorie Tracker',
    category: 'Mobile',
    featured: false,
    languages: ['Swift', 'SwiftUI', 'On-Device Storage'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'Personal iOS app (Swift/SwiftUI) tracking daily caffeine and calorie intake with fully on-device storage, no backend. Iterated entirely from real daily use — built because it was wanted to exist, not to a spec.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 18,
    name: 'Accelth Healthcare Information System (HIS) — 60+ View Dashboard',
    category: 'Web',
    featured: true,
    languages: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'GraphQL'],
    sitelink: null,
    repolink: null,
    projectimage: null,
    projectDescription:
      'Led a 4-person team as frontend lead building a React 18 + Vite healthcare dashboard (60+ routed views) with Tailwind and Chart.js, serving 200+ clinics under one management group. Shipped WebSocket-driven real-time updates, cursor-based pagination, and full keyboard/ARIA accessibility across paginated clinical data tables.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 19,
    name: 'Accelth Healthcare Platform (Patient-Facing App)',
    category: 'Web',
    featured: true,
    languages: ['Next.js', 'React', 'TypeScript', 'Firebase', 'FastAPI'],
    sitelink: 'https://dancing-phoenix-c4d078.netlify.app',
    repolink: null,
    projectimage: null,
    projectDescription:
      'Patient-facing Next.js platform with Firebase auth and Firestore, including a doctor review system and an AI-powered X-ray/MRI analyser wired into clinical workflows. Built and managed ML models behind FastAPI endpoints, iterating on-site with real healthcare clients under production stakes.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 20,
    name: 'V.ARISE Webpage',
    category: 'Web',
    featured: false,
    languages: ['React', 'HTML', 'Tailwind', 'react-icons'],
    sitelink: 'https://varise.in/',
    repolink: null,
    projectimage: '/project-imgs/varise.png',
    projectDescription:
      'As the founder of the first university-funded AR-VR project, I built an immersive showcase platform in collaboration with professors. Go to the founders section for a fun surprise :)',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 21,
    name: 'MAHE Avinya',
    category: 'Web',
    featured: false,
    languages: ['Next.js', 'HTML', 'Tailwind', 'Firebase', 'Firestore'],
    sitelink: 'https://mahe-avinya.netlify.app/dashboard',
    repolink: 'https://github.com/Prakhart-debug/IC_Accelerator_AppLabHackathon',
    projectimage: '/project-imgs/mahe.png',
    projectDescription:
      'Built for AppLab Hackathon — a platform connecting startup founders with skilled students across domains. Think developers, designers, marketers — all in one place to help early-stage teams hit the ground running.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
]
