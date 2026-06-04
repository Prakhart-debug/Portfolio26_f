import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import scythe from '../../../public/ghilbi.png'

const Headercontent = () => {
  const interests = [
    'a ML Engineer',
    'a Data Scientist',
    'a Metal Head',
    'a Video Editor',
    'an Engineering Enthusiast',
    'a Guitarist',
  ]
  const [currentInterest, setCurrentInterest] = useState(interests[0])
  const indexRef = useRef(0)

  useEffect(() => {
    const intervalID = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % interests.length
      setCurrentInterest(interests[indexRef.current])
    }, 3000)
    return () => clearInterval(intervalID)
  }, [])

  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex flex-col items-start justify-start tracking-wider pl-6 md:pl-16">
        <div className="flex w-full flex-col md:flex-row items-start justify-between text-skin-base md:my-48 md:h-5/6">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-start justify-start md:w-1/2">
            <motion.h1
              className="my-10 text-left text-6xl sm:text-8xl lg:text-10xl font-namefont text-skin-accent"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              Prakhar
              <br />&nbsp;&nbsp;&nbsp;Tripathi
            </motion.h1>
            <motion.div
              className="flex flex-col items-start justify-start text-left pl-6 sm:pl-12 font-paragraph text-lg sm:text-2xl lg:text-3xl tracking-wide text-skin-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="w-full">I'm a Front End Developer</p>
              <div className="flex w-full flex-col justify-start overflow-hidden text-left">
                <div className="flex items-center justify-start">
                  <p className="mr-2">and </p>
                  <div className="text-left md:w-2/3">
                    <motion.div
                      className="text-skin-accent"
                      key={currentInterest}
                      initial={{ opacity: 0, y: '100%' }}
                      animate={{ opacity: 1, y: '0%' }}
                      exit={{ opacity: 0, y: '100%' }}
                      transition={{ duration: 2 }}
                    >
                      {currentInterest}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            className="flex md:w-1/2 items-center md:items-start justify-center md:justify-end mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <img
                src={scythe}
                alt="Ghibli Art"
                className="w-4/5 sm:w-2/3 md:w-1/2 max-w-xs sm:max-w-md md:max-w-full object-contain rounded-2xl shadow-md md:mr-16"
              />
              {/* Decorative border offset */}
              <div
                className="absolute rounded-2xl md:mr-16"
                style={{
                  inset: '10px -10px -10px 10px',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: '1rem',
                  zIndex: -1,
                  pointerEvents: 'none',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Headercontent
