import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import {motion} from 'motion/react'

const Services = () => {

    const servicesData = [
        {
          title: 'Website Development',
          description: 'Modern, fast, mobile-friendly websites using React & latest tech.',
          icon: assets.ads_icon
        },
        {
          title: ' Business Website Setup',
          description: 'Complete setup with domain, hosting, and live deployment.',
          icon: assets.marketing_icon
        },
        {
            title: 'Landing Pages',
            description: 'High-converting pages designed to generate leads.',
            icon: assets.content_icon,
        },
        {
            title: ' Website Redesign',
            description: 'Upgrade your old website into a modern, professional look.',
            icon: assets.social_icon,
        },
    ]

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

    <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

    <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index)=>(
            <ServiceCard key={index} service={service} index={index}/>
        ))}
    </div>

    </motion.div>
  )
}

export default Services
