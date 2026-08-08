import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CategoryThumb from './CategoryThumb'

const ProjectMiniCard = ({ name, category, languages, projectDescription, site, code }) => {
  const [hovered, setHovered] = useState(false)
  const stack = Array.isArray(languages) ? languages : [languages]

  return (
    <motion.div
      className='relative rounded-lg bg-skin-card border border-bordersubtle overflow-hidden font-paragraph cursor-default'
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.04, zIndex: 20, boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}
      transition={{ duration: 0.2 }}
      style={{ transformOrigin: 'top center' }}
    >
      <div className='h-16 w-full'>
        <CategoryThumb category={category} compact />
      </div>

      <div className='p-3'>
        <div className='flex items-start justify-between gap-2'>
          <h3 className='text-sm md:text-base text-skin-base leading-snug'>{name}</h3>
        </div>
        <p className='mt-1 text-xxs md:text-xs text-skin-accent uppercase tracking-wide'>{category}</p>

        {!hovered && (
          <div className='mt-2 flex flex-wrap gap-1'>
            {stack.slice(0, 3).map((lang, i) => (
              <span key={i} className='text-xxs px-2 py-0.5 rounded-full bg-skin-muted text-skin-base border border-bordersubtle'>
                {lang}
              </span>
            ))}
            {stack.length > 3 && (
              <span className='text-xxs px-2 py-0.5 rounded-full bg-skin-muted text-skin-accent border border-bordersubtle'>
                +{stack.length - 3}
              </span>
            )}
          </div>
        )}

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className='overflow-hidden'
            >
              <p className='mt-2 text-xs md:text-sm text-skin-base leading-relaxed'>{projectDescription}</p>

              <div className='mt-2 flex flex-wrap gap-1'>
                {stack.map((lang, i) => (
                  <span key={i} className='text-xxs px-2 py-0.5 rounded-full bg-skin-muted text-skin-accent border border-bordersubtle'>
                    {lang}
                  </span>
                ))}
              </div>

              {(site || code) && (
                <div className='mt-3 flex items-center gap-4 text-xs md:text-sm'>
                  {site && (
                    <a className='flex items-center gap-1 hover:text-skin-accent transition-colors' target='_blank' href={site} rel='noreferrer'>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Site
                    </a>
                  )}
                  {code && (
                    <a className='flex items-center gap-1 hover:text-skin-accent transition-colors' target='_blank' href={code} rel='noreferrer'>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Repo
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default ProjectMiniCard
