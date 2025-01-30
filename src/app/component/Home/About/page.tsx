"use client"
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../../Helper/SectionHeading'
import { aboutInfo } from '@/app/Data/data'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'

const About = () => {
  return (
    <motion.div
      className='pt-16 pb-16 h-[80vh] bg-[#050709]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>About Me</SectionHeading>

      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
        {/* text content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>{aboutInfo.title}</h1>
          <p className='mt-6 text-base text-gray-500'>{aboutInfo.description}</p>

          <div className='mt-8'>
            {[
              { text: 'Frontend Development', bg: 'bg-blue-800' },
              { text: 'Backend Development', bg: 'bg-orange-800' },
              { text: 'Building Full Stack Skills', bg: 'bg-green-800' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className='flex items-center space-x-2 mb-6'
                whileHover={{ scale: 1.1 }}
              >
                <div className={`w-7 h-7 ${item.bg} flex items-center justify-center`}>
                  <FaCheck className='text-white' />
                </div>
                <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* stats content */}
        <motion.div
          className='grid grid-cols-2 gap-16 items-center lg:mx-auto'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {[
            { src: '/images/customer.png', value: aboutInfo.client, label: 'Projects for Friends & Family' },
            { src: '/images/experience.png', value: `${aboutInfo.experience} Year`, label: 'Learning Experience' },
            { src: '/images/completed.png', value: aboutInfo.project, label: 'Small Projects Completed' },
            { src: '/images/rocket.png', value: aboutInfo.website, label: 'Websites Published' }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={item.src} alt={item.label} width={80} height={80} className='mx-auto' />
              <p className='mt-3 font-bold text-xl text-white text-center'>{item.value}</p>
              <p className='text-base sm:text-lg text-center text-gray-400'>{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
