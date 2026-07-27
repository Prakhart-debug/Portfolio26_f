import React from 'react'

export const CATEGORIES = ['AI/ML', 'Web', 'Systems', 'Cloud/DevOps', 'Mobile', 'Data']

const CATEGORY_META = {
  'AI/ML': {
    gradient: 'from-violet-600 to-purple-800',
    icon: (
      <path d="M12 2a4 4 0 00-4 4v.5A3.5 3.5 0 006 10a3.5 3.5 0 00-1 6.87V19a3 3 0 003 3h.5a2.5 2.5 0 004.9 0H14a3 3 0 003-3v-2.13A3.5 3.5 0 0016 10a3.5 3.5 0 00-2-3.5V6a4 4 0 00-4-4z" />
    ),
  },
  Web: {
    gradient: 'from-sky-500 to-blue-700',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </>
    ),
  },
  Systems: {
    gradient: 'from-slate-500 to-slate-800',
    icon: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path d="M9 2v3M12 2v3M15 2v3M9 19v3M12 19v3M15 19v3M2 9h3M2 12h3M2 15h3M19 9h3M19 12h3M19 15h3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </>
    ),
  },
  'Cloud/DevOps': {
    gradient: 'from-teal-500 to-emerald-700',
    icon: (
      <path d="M6.5 19a4.5 4.5 0 01-.5-8.98A5.5 5.5 0 0117 8.05 4 4 0 0116.5 16v0M6.5 19H16.5M6.5 19a4.5 4.5 0 010-9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  Mobile: {
    gradient: 'from-orange-500 to-amber-700',
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="10" y1="19" x2="14" y2="19" stroke="var(--color-bg-card, #222)" strokeWidth="1.5" />
      </>
    ),
  },
  Data: {
    gradient: 'from-rose-500 to-pink-700',
    icon: (
      <>
        <rect x="4" y="12" width="4" height="8" />
        <rect x="10" y="7" width="4" height="13" />
        <rect x="16" y="3" width="4" height="17" />
      </>
    ),
  },
}

const CategoryThumb = ({ category, compact = false }) => {
  const meta = CATEGORY_META[category] || CATEGORY_META['Web']

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${meta.gradient} ${
        compact ? 'py-3' : 'py-6'
      }`}
    >
      <svg
        width={compact ? 22 : 34}
        height={compact ? 22 : 34}
        viewBox="0 0 24 24"
        fill="rgba(255,255,255,0.9)"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="1"
      >
        {meta.icon}
      </svg>
      {!compact && (
        <span className="text-xs md:text-sm tracking-wide text-white/90 font-paragraph uppercase">
          {category}
        </span>
      )}
    </div>
  )
}

export default CategoryThumb
