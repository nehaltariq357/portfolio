import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { aboutInfo } from '@/app/Data/data'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image'

const About = () => {
  return (
    <div className='pt-16 pb-16 min-h-screen bg-[#050709]'>
      <SectionHeading>About Me</SectionHeading>
      
      <div className='w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-10 lg:mt-20'>
        {/* text content */}
        <div>
          <h1 className='text-bg text-[24px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>
            {aboutInfo.title}
          </h1>
          <p className='mt-6 text-base sm:text-lg md:text-xl text-gray-500'>
            {aboutInfo.description}
          </p>
          <div className='mt-8 space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className='w-7 h-7 bg-blue-800 flex items-center justify-center rounded-full'>
                <FaCheck className='text-white'/>
              </div>
              <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Frontend Development</p>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-7 h-7 bg-orange-800 flex items-center justify-center rounded-full'>
                <FaCheck className='text-white'/>
              </div>
              <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Exploring Backend Development</p>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-7 h-7 bg-green-800 flex items-center justify-center rounded-full'>
                <FaCheck className='text-white'/>
              </div>
              <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>Building Full Stack Skills</p>
            </div>
          </div>
        </div>
        
        {/* stats content */}
        <div className='grid grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center'>
          <div className='text-center'>
            <Image 
              src="/images/customer.png"
              alt='customer icon'
              width={80}
              height={80}
              className='mx-auto'
            />
            <p className='mt-3 font-bold text-lg sm:text-xl text-white'>{aboutInfo.client}</p>
            <p className='text-sm sm:text-base text-gray-400'>Projects for Friends & Family</p>
          </div>
          <div className='text-center'>
            <Image 
              src="/images/experience.png"
              alt='experience icon'
              width={80}
              height={80}
              className='mx-auto'
            />
            <p className='mt-3 font-bold text-lg sm:text-xl text-white'>{aboutInfo.experience} Year</p>
            <p className='text-sm sm:text-base text-gray-400'>Learning Experience</p>
          </div>
          <div className='text-center'>
            <Image 
              src="/images/completed.png"
              alt='completed projects icon'
              width={80}
              height={80}
              className='mx-auto'
            />
            <p className='mt-3 font-bold text-lg sm:text-xl text-white'>{aboutInfo.project}</p>
            <p className='text-sm sm:text-base text-gray-400'>Small Projects Completed</p>
          </div>
          <div className='text-center'>
            <Image 
              src="/images/rocket.png"
              alt='website icon'
              width={80}
              height={80}
              className='mx-auto'
            />
            <p className='mt-3 font-bold text-lg sm:text-xl text-white'>{aboutInfo.website}</p>
            <p className='text-sm sm:text-base text-gray-400'>Websites Published</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
