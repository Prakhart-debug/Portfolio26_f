import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ProjectMiniCard from './ProjectMiniCard'
import { CATEGORIES } from './CategoryThumb'
import projectData from '../../projectData'

const FILTERS = ['All', ...CATEGORIES]

const Projects = () => {
	const [activeCategory, setActiveCategory] = useState('All')
	const [showMore, setShowMore] = useState(false)

	const matches = (project) => activeCategory === 'All' || project.category === activeCategory

	const featuredList = useMemo(
		() => projectData.filter((p) => p.featured && matches(p)),
		[activeCategory]
	)
	const moreList = useMemo(
		() => projectData.filter((p) => !p.featured && matches(p)),
		[activeCategory]
	)

	return (
		<div
			id='projects'
			className='flex  flex-col items-center justify-center md:my-48'
		>
			<h2 className='mx-auto my-10  text-6xl tracking-wider text-skin-accent lg:mb-20 lg:text-9xl'>
				Projects
			</h2>

			{/* Category filter pills */}
			<div className='mx-auto mb-10 flex w-full max-w-4xl flex-wrap items-center justify-center gap-2 px-6'>
				{FILTERS.map((filter) => (
					<button
						key={filter}
						onClick={() => setActiveCategory(filter)}
						className={`rounded-full border px-4 py-1.5 text-sm md:text-base font-paragraph transition-colors duration-200
							${
								activeCategory === filter
									? 'border-bordersubtle bg-skin-accent text-skin-inverted'
									: 'border-bordersubtle bg-skin-muted text-skin-base hover:text-skin-accent'
							}`}
					>
						{filter}
					</button>
				))}
			</div>

			<div className='mx-auto w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start'>
				{featuredList.map((project) => (
					<ProjectCard
						name={project.name}
						category={project.category}
						languages={project.languages}
						site={project.sitelink}
						code={project.repolink}
						siteicon={project.siteicon}
						repoicon={project.repoicon}
						projectimg={project.projectimage}
						projectDescription={project.projectDescription}
						key={project.key}
					/>
				))}
			</div>

			{featuredList.length === 0 && (
				<p className='mt-8 text-skin-base font-paragraph'>No featured projects in this category yet — check "See More".</p>
			)}

			{moreList.length > 0 && (
				<div className='mx-auto mt-12 w-full max-w-6xl px-6'>
					<button
						onClick={() => setShowMore((v) => !v)}
						className='mx-auto flex items-center gap-2 rounded-full border border-bordersubtle bg-skin-muted px-6 py-2 text-skin-accent font-paragraph text-lg hover:bg-skin-card transition-colors'
					>
						{showMore ? 'Hide Projects' : `See More Projects (${moreList.length})`}
						<motion.span animate={{ rotate: showMore ? 180 : 0 }} transition={{ duration: 0.2 }}>
							▾
						</motion.span>
					</button>

					<AnimatePresence>
						{showMore && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: 'auto' }}
								exit={{ opacity: 0, height: 0 }}
								transition={{ duration: 0.3 }}
								className='overflow-visible'
							>
								<div className='mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
									{moreList.map((project) => (
										<ProjectMiniCard
											name={project.name}
											category={project.category}
											languages={project.languages}
											projectDescription={project.projectDescription}
											site={project.sitelink}
											code={project.repolink}
											key={project.key}
										/>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			)}
		</div>
	)
}

export default Projects
