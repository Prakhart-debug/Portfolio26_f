import { motion } from 'framer-motion'
import Git from '../../assets/site-icons/git.png?url'
import Download from '../../assets/site-icons/download.png?url'
import Linkedin from '../../assets/site-icons/linkedin.png?url'
import PrakharResume from '../../../public/resume1.pdf'

const wobble = {
	scale: [1, 1.1, 1.05, 1.1, 1],
	rotate: [0, -3, 3, -3, 0],
	transition: {
		scale: {
			times: [0, 0.2, 0.4, 0.6, 1],
			duration: 0.5,
		},
		rotate: {
			times: [0, 0.2, 0.4, 0.6, 1],
			duration: 0.5,
		},
	},
}
{/* <a href="https://iconscout.com/lottie-animations/web-development" class="text-underline font-size-sm" target="_blank">Web Development</a> by <a href="https://iconscout.com/contributors/north-star" class="text-underline font-size-sm" target="_blank">Optima GFX</a> */}

const Navsocials = () => {
	return (
		<div className='flex items-center lg:mr-20'>
			<a href={PrakharResume} download>
				<motion.img
					className='h-6 w-6 max-w-none px-2 md:h-7 md:w-7 md:px-4'
					whileHover={wobble}
					src={Download}
					alt='download logo'
					srcSet=''
				/>
			</a>
			<a href='https://github.com/Prakhart-debug' target='_blank'>
				<motion.img
					className='h-6 w-6 max-w-none px-2 md:h-7 md:w-7 md:px-4'
					whileHover={wobble}
					src={Git}
					alt='Github Logo'
					srcSet=''
				/>
			</a>
			<a href='https://www.linkedin.com/in/prakhar-tripathi-9729a7141/' target='_blank'>
				<motion.img
					className='h-6 w-6 max-w-none px-2 md:h-7 md:w-7 md:px-4'
					whileHover={wobble}
					src={Linkedin}
					alt='Linkedin Logo'
					srcSet=''
				/>
			</a>
		</div>
	)
}

export default Navsocials
