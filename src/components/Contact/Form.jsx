import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTheme } from '../../ThemeContext'

const Form = () => {
  const { theme } = useTheme()
  const success = () => toast.success('Message sent successfully!')
  const fail = () => toast.error('Uh oh! Something went wrong!')

  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' })
  const contactForm = useRef()

  function handleChange(event) {
    setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!formData.user_name.trim()) { toast.error('Name is required'); return }
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!emailPattern.test(formData.user_email)) { toast.error('Invalid email address'); return }
    if (!formData.message.trim()) { toast.error('Message is required'); return }

    emailjs
      .sendForm('service_qes0prs', 'template_c4cdr38', contactForm.current, 'ymodW8CiJl4tcZPPy')
      .then(() => { success(); setFormData({ user_name: '', user_email: '', message: '' }) })
      .catch(() => fail())
  }

  const inputClass = `
    mx-auto mb-6 block w-96 rounded-lg border-2 bg-transparent p-4 lg:w-[40rem] lg:text-2xl
    font-paragraph text-skin-base outline-none transition-colors duration-200
    border-bordersubtle focus:border-bordermain placeholder:text-skin-muted
  `

  return (
    <form className="font-paragraph" ref={contactForm} onSubmit={handleSubmit}>
      <div className="mx-auto flex-col items-center justify-evenly text-skin-base">
        <input type="text" placeholder="Name" onChange={handleChange} name="user_name" value={formData.user_name} className={inputClass} />
        <input type="text" placeholder="Email Address" onChange={handleChange} name="user_email" value={formData.user_email} className={inputClass} />
        <textarea
          placeholder="Message"
          onChange={handleChange}
          name="message"
          value={formData.message}
          className={`${inputClass} h-64 resize-none`}
        />
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ rotate: [0, -5, 5, -5, 5, 0], transition: { ease: 'easeInOut', duration: 0.3 } }}
          className="mx-auto block w-full rounded-lg bg-skin-accent px-8 py-2 text-xl font-bold text-skin-inverted hover:bg-skin-accentMute transition-colors duration-200 lg:py-4 lg:text-4xl"
          type="submit"
        >
          Send!
        </motion.button>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </form>
  )
}

export default Form
