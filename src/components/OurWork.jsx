import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import {motion} from 'motion/react'

const OurWork = () => {

    const workData = [
        {
            title: 'Doctor Appointment System',
            description: 'Book appointments, manage doctors, and patient dashboard (MERN)',
            image: assets.work_doctor_appointment
        },
        {
            title: 'Local Business Website (Restaurant / Salon)',
            description: 'Modern responsive website with services, contact, and booking',
            image: assets.work_local_business
        },
        {
            title: 'High-Converting Landing Page',
            description: 'Fast, responsive landing page designed to generate leads',
            image: assets.work_landing_page
        },
    ]

  return (
    <motion.div 
        initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='What We Can Build For You' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {
            workData.map((work, index)=>(
                <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                    <img src={work.image} className='w-full rounded-xl' alt="" />
                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                </motion.div>
            ))
        }
    </div>

    </motion.div>
  )
}

export default OurWork
