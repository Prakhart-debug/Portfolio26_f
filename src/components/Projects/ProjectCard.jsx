import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectCard = ({ name, languages, site, siteicon, repoicon, code, index, projectimg, projectDescription }) => {
  const [activeTab, setActiveTab] = useState('description')

  const tabs = [
    { id: 'description', label: 'Details' },
    { id: 'techStack', label: 'Tech Stack' },
    { id: 'links', label: 'Links' },
  ]

  return (
    <div className='mx-6 font-paragraph text-sm text-skin-base lg:w-3/4 lg:text-xl'>
      <motion.div
        className='mt-8 rounded-xl bg-skin-card border border-bordersubtle overflow-hidden'
        whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.25)' }}
        transition={{ duration: 0.25 }}
        key={index}
      >
       <div className='w-full h-48 bg-skin-muted overflow-hidden border-y-4 border-mainblack flex-shrink-0'>
  <img
    className='w-full h-full object-cover object-top'
    src={projectimg}
    alt={name}
  />
</div>

        <div className='mx-4 mb-4 rounded-lg border border-bordersubtle'>
          {/* Tabs */}
          <div className='relative flex flex-row rounded-t-lg overflow-hidden border-b border-bordersubtle'>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full py-2 text-lg md:text-2xl transition-colors duration-200 font-paragraph
                  ${activeTab === tab.id
                    ? 'text-skin-accent bg-skin-muted'
                    : 'text-skin-base hover:bg-skin-muted hover:text-skin-accent'
                  }`}
              >
                {tab.label}
              </button>
            ))}
            {/* Animated underline */}
            <motion.div
              className='absolute bottom-0 h-[2px] bg-skin-accent'
              style={{ width: '33.33%' }}
              animate={{ left: `${tabs.findIndex(t => t.id === activeTab) * 33.33}%` }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            />
          </div>

          {/* Tab Content */}
          <div className='h-28 overflow-y-auto'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'description' && (
                  <p className='p-4 text-lg md:text-xl text-skin-base leading-relaxed'>{projectDescription}</p>
                )}
                {activeTab === 'techStack' && (
                  <div className='flex flex-wrap gap-2 p-4'>
                    {(Array.isArray(languages) ? languages : [languages]).flatMap(l => l.split(',').map(s => s.trim())).map((lang, i) => (
                      <span
                        key={i}
                        className='text-sm px-3 py-1 rounded-full bg-skin-muted text-skin-accent border border-bordersubtle font-paragraph'
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                )}
                {activeTab === 'links' && (
                  <div className='flex flex-row items-center justify-evenly p-4 text-lg md:text-2xl'>
                    {site && (
                      <a className='flex items-center gap-2 hover:text-skin-accent transition-colors' target='_blank' href={site} rel='noreferrer'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live Site
                      </a>
                    )}
                    {code && (
                      <a className='flex items-center gap-2 hover:text-skin-accent transition-colors' target='_blank' href={code} rel='noreferrer'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        Repo
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard
