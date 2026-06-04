import React from 'react'
import { Link } from 'react-router-dom'
import scytheLeft from '../../../public/scythe left.svg'
import scytheRight from '../../../public/scythe right.svg'

const Footer = () => {
  return (
    <div className="relative flex justify-center border-t border-bordersubtle py-6 bg-skin-bg">
      <div className="flex flex-row items-center justify-evenly w-full md:w-1/4">
        <img src={scytheLeft} alt="" className="w-10 md:w-20" />
        <p className="font-paragraph font-light text-skin-base text-center">
          Crafted with love and ☕ by Prakhar Tripathi!
        </p>
        <img src={scytheRight} alt="" className="w-10 md:w-20" />
      </div>
      <Link
        to="/icons"
        className="absolute right-4 bottom-4 text-xs px-2 py-1 border border-bordersubtle rounded-md text-skin-muted hover:border-bordermain hover:text-skin-accent transition-all duration-200"
      >
        Icons
      </Link>
    </div>
  )
}

export default Footer
