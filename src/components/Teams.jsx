import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'
import {motion} from 'motion/react'

const Teams = () => {
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
      <Title title='Meet the Founder' desc='I help businesses build fast, modern websites that generate leads and grow online presence.'/>

      {/* <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        {teamData.map((team, index)=>(
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400'>
                <img src={team.image} className='w-12 h-12 rounded-full' alt="" />
                <div className='flex-1'>
                    <h3 className='font-bold text-sm'>{team.name}</h3>
                    <p className='text-xs opacity-60'>{team.title}</p>
                </div>
            </motion.div>
        ))}
      </div> */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="max-w-md mx-auto group relative flex flex-col items-center p-8 rounded-3xl border border-gray-100 dark:border-white/5 bg-white dark:bg-gray-900/50 backdrop-blur-sm shadow-2xl shadow-gray-200/50 dark:shadow-none hover:border-indigo-500/50 transition-all duration-500"
>
  {/* Background Glow Effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl -z-10" />

  {/* Image with Ring */}
  <div className="relative mb-6">
    <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
    <img 
      src={teamData[0].image} 
      className="relative w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-105 transition-transform duration-500" 
      alt={teamData[0].name} 
    />
    {/* Pulse Status Indicator */}
    <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full shadow-sm animate-pulse" />
  </div>

  {/* Text Content */}
  <div className="text-center space-y-2">
    <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
      {teamData[0].name}
    </h3>
    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
      {teamData[0].title}
    </p>
    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[280px]">
      Building high-performance digital experiences with a focus on growth and clean architecture.
    </p>
  </div>

  {/* Simple Social / Link Placeholder */}
  <div className="mt-6 flex gap-4">
    <a 
      href="#contact-us" 
      className="text-xs font-bold px-5 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-indigo-600 dark:hover:bg-indigo-50 transition-colors"
    >
      Get in Touch
    </a>
  </div>
</motion.div>
    </motion.div>
  )
}

export default Teams

// import React from 'react';
// import { motion } from 'framer-motion';

// const Teams = () => {
//   return (
//     <section id="founder" className='relative px-6 sm:px-12 lg:px-24 xl:px-48 py-32 overflow-hidden bg-white dark:bg-[#030712] transition-colors duration-500'>
      
//       {/* Dynamic Background Accents - Subtle engineering flex */}
//       <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent' />
//       <div className='absolute -top-24 -right-24 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full' />

//       <div className='max-w-7xl mx-auto'>
        
//         {/* SECTION HEADER */}
//         <div className='mb-20 text-left'>
//           <motion.span 
//             initial={{ opacity: 0, x: -10 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className='text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs'
//           >
//             Behind the Agency
//           </motion.span>
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className='text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 text-gray-900 dark:text-white tracking-tight italic md:not-italic'
//           >
//             Meet the Founder
//           </motion.h2>
//         </div>

//         <div className='grid lg:grid-cols-12 gap-12 lg:gap-20 items-center'>

//           {/* LEFT: THE IMAGE (Visual Authority) */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className='lg:col-span-5 relative group'
//           >
//             {/* Image Frame with Glassmorphism */}
//             <div className='relative z-10 p-2 sm:p-4 bg-gray-50/50 dark:bg-gray-800/30 backdrop-blur-2xl rounded-[3rem] border border-gray-200/50 dark:border-white/10 shadow-2xl overflow-hidden'>
//               <img
//                 src="https://ik.imagekit.io/nsbmvj6m5/cropped_circle_image.png?updatedAt=1771422037799"
//                 alt="Ritesh Sharma - Founder of SiteSparkOne"
//                 className='w-full aspect-[4/5] sm:aspect-square object-cover rounded-[2.2rem] grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 ease-in-out'
//               />
//             </div>
            
//             {/* Experience Card - Adds social proof */}
//             <motion.div 
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//               className='absolute -bottom-6 -left-4 sm:-left-8 z-20 p-4 sm:p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-800 hidden sm:block'
//             >
//               <div className='flex items-center gap-3'>
//                 <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
//                 <div>
//                   <p className='text-[10px] text-gray-400 uppercase font-bold tracking-widest'>Availability</p>
//                   <p className='text-sm font-bold text-gray-900 dark:text-white'>Taking New Projects</p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Decorative Gradients */}
//             <div className='absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-500/20 blur-[80px] rounded-full -z-10' />
//           </motion.div>

//           {/* RIGHT: THE STORY (Conversion Side) */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className='lg:col-span-7'
//           >
//             <div className='space-y-8'>
//               <div>
//                 <h3 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight'>
//                   Ritesh Sharma
//                 </h3>
//                 <p className='text-indigo-600 dark:text-indigo-400 font-semibold text-lg mt-1'>
//                   Founder & Senior Full Stack Engineer
//                 </p>
//               </div>

//               {/* High-Impact Quote */}
//               <blockquote className='text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium'>
//                 "I bridge the gap between <span className='text-indigo-600 dark:text-indigo-400'>complex code</span> and <span className='text-indigo-600 dark:text-indigo-400'>business growth</span> through pixel-perfect digital experiences."
//               </blockquote>

//               <p className='text-gray-500 dark:text-gray-400 leading-relaxed text-base sm:text-lg max-w-2xl'>
//                 Specializing in the <strong>MERN stack</strong> and modern SaaS architecture, I lead <strong>SiteSparkOne</strong> in delivering conversion-focused websites for startups and local brands.
//               </p>

//               {/* Action Group */}
//               <div className='flex flex-col sm:flex-row gap-4 pt-6'>
//                 <motion.a
//                   whileHover={{ scale: 1.05, translateY: -3 }}
//                   whileTap={{ scale: 0.98 }}
//                   href="#contact-us"
//                   className='px-10 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-[0_10px_30px_rgba(79,70,229,0.3)] transition-all text-center'
//                 >
//                   Start a Project —&gt;
//                 </motion.a>

//                 <motion.a
//                   whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.05)', scale: 1.02 }}
//                   href="#our-work"
//                   className='px-10 py-4 rounded-2xl border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-bold text-sm transition-all text-center backdrop-blur-sm'
//                 >
//                   Explore Work
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Teams;