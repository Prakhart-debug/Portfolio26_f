import React from 'react'
import { motion } from 'framer-motion'
import vscode from '../../assets/site-icons/vscode.svg?url'
import tailwind from '../../assets/site-icons/tailwind.svg?url'
import react from '../../assets/site-icons/react.svg?url'
import javascript from '../../assets/site-icons/javascript.svg?url'
import html from '../../assets/site-icons/html.svg?url'
import gitcircle from '../../assets/site-icons/git-circle.svg?url'
import figma from '../../assets/site-icons/figma.svg?url'
import css from '../../assets/site-icons/css.svg?url'
import next from '../../assets/site-icons/next.svg?url'
import firebase from '../../assets/site-icons/firebase.svg?url'
import python from '../../assets/site-icons/python.svg?url'
import cpp from '../../assets/site-icons/cpp_img.svg?url'
import excel from '../../assets/site-icons/excel.svg?url'
import powerbi from '../../assets/site-icons/powerbi.svg?url'
import flutter from '../../assets/site-icons/flutter.svg?url'
import docker from '../../assets/site-icons/docker.svg?url'
import mongodb from '../../assets/site-icons/mongodb.svg?url'
import snowflake from '../../assets/site-icons/Snowflake.svg?url'
import swift from '../../assets/site-icons/swift.svg?url'
import photoshop from '../../assets/site-icons/photoshop.svg?url'
import illustrator from '../../assets/site-icons/illustrator.svg?url'
import audacity from '../../assets/site-icons/audacity.svg?url'
import fcp from '../../assets/site-icons/fcp.svg?url'

const skills = [
  { image: python, name: 'Python' },
  { image: cpp, name: 'C++' },
  { image: javascript, name: 'Javascript' },
  { image: photoshop, name: 'Photoshop' },
  { image: illustrator, name: 'Illustrator' },
  { image: mongodb, name: 'MongoDB' },
  { image: figma, name: 'Figma' },
  { image: audacity, name: 'Audacity' },
  { image: snowflake, name: 'Snowflake' },
  { image: fcp, name: 'Final Cut Pro' },
  { image: powerbi, name: 'Power BI' },
  { image: html, name: 'HTML' },
  { image: css, name: 'CSS' },
  { image: excel, name: 'Excel' },
  { image: react, name: 'React' },
  { image: flutter, name: 'Flutter' },
  { image: next, name: 'Next.js' },
  { image: firebase, name: 'Firebase' },
  { image: gitcircle, name: 'Git' },
  { image: vscode, name: 'VSCode' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

const SkillsContent = () => {
  return (
    <div className='flex flex-col items-center justify-center md:h-full'>
      <h2 className='my-10 w-full text-center tracking-wider px-5 text-6xl text-skin-accent sm:text-7xl lg:text-9xl'>
        Things I'm good at!
      </h2>
      <motion.div
        className='grid grid-cols-3 md:grid-cols-5 place-content-center content-center gap-8 px-8 md:gap-16 my-10'
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, margin: '-80px' }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.08, y: -4 }}
            className='content-center mx-auto flex h-full w-16 flex-col items-center justify-between p-2 font-paragraph text-xl text-skin-base md:h-full md:w-36 md:text-xl lg:text-2xl
              rounded-xl border border-bordersubtle bg-skin-card hover:border-bordermain transition-colors duration-200 cursor-default'
          >
            <div>
              <img
                className='my-2 mx-auto w-full md:w-1/2 lg:w-3/4'
                src={skill.image}
                alt={skill.name}
              />
            </div>
            <span className='text-center'>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default SkillsContent
