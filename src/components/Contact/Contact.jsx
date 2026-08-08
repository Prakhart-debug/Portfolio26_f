import React from 'react'
import Form from './Form'

const Contact = () => {
	return (
		<div
			id='contact'
			className='my-20  flex flex-col items-center  justify-evenly lg:flex-row'
		>
			<h2 className='my-10 text-center  text-6xl tracking-wider text-skin-accent sm:text-7xl md:w-96 lg:text-10xl '>
				Don't be shy!
			</h2>
			<Form />
		</div>
	)
}

export default Contact
