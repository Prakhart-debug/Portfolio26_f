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
 * ║   languages       — array of tech strings               ║
 * ║   sitelink        — live URL (or null)                  ║
 * ║   repolink        — GitHub URL (or null)                ║
 * ║   projectimage    — path to screenshot (e.g. /project-  ║
 * ║                     imgs/myapp.png), put image in       ║
 * ║                     /public/project-imgs/               ║
 * ║   projectDescription — short description paragraph      ║
 * ║   siteicon        — leave as '/site-icons/livesite.png' ║
 * ║   repoicon        — leave as '/site-icons/repo.png'     ║
 * ╚══════════════════════════════════════════════════════════╝
 */

export default [
  {
    key: 1,
    name: 'Credit Default Predictor',
    languages: ['Python', 'XGBoost', 'Uvicorn', 'Streamlit'],
    sitelink: 'https://github.com/Prakhart-debug/credit-default-proj',
    repolink: 'https://github.com/Prakhart-debug/credit-default-proj',
    projectimage: '/project-imgs/credit.png',
    projectDescription:
      'ML pipeline to predict credit defaults using XGBoost with a Streamlit dashboard and FastAPI backend. Trained on real-world financial data to surface high-risk borrowers efficiently.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 2,
    name: 'Document Clustering & Summarization',
    languages: ['ReactJS', 'HTML', 'TailwindCSS', 'Axios'],
    sitelink: 'https://cheerful-syrniki-d189ba.netlify.app/',
    repolink: 'https://github.com/Be-Freezin/elden-ring',
    projectimage: '/project-imgs/cluster.png',
    projectDescription:
      'NLP-powered tool for clustering and summarizing large document sets. Built with React and Axios consuming a Python NLP backend. Designed to help users quickly surface themes across unstructured text.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 3,
    name: 'V.ARISE Webpage',
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
    key: 4,
    name: 'MAHE Avinya',
    languages: ['Next.js', 'HTML', 'Tailwind', 'Firebase', 'Firestore'],
    sitelink: 'https://mahe-avinya.netlify.app/dashboard',
    repolink: 'https://github.com/Prakhart-debug/IC_Accelerator_AppLabHackathon',
    projectimage: '/project-imgs/mahe.png',
    projectDescription:
      'Built for AppLab Hackathon — a platform connecting startup founders with skilled students across domains. Think developers, designers, marketers — all in one place to help early-stage teams hit the ground running.',
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
  {
    key: 5,
    name: 'Revels 2023 Website',
    languages: ['ReactJS', 'Node.js', 'Python', 'JavaScript'],
    sitelink: 'https://revels-mit-2023.netlify.app/',
    repolink: 'https://github.com/perfectionist7/revels-2023-website',
    projectimage: '/project-imgs/revels.png',
    projectDescription:
      "Cultural festival platform handling 7,000+ concurrent users with ticketing, payments, QR authentication, and a merchandise marketplace. One of the best dev collaborations I've been part of.",
    siteicon: '/site-icons/livesite.png',
    repoicon: '/site-icons/repo.png',
  },
]
