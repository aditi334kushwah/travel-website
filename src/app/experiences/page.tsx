
import ExperienceCategories from '@/components/experiences/ExperienceCategories'
import FeaturedExperiences from '@/components/experiences/FeaturedExperiences'
import WhatYouGet from '@/components/experiences/WhatYouGet'
import TestimonialCard from '@/components/home/TestimonialCard'
import Image from 'next/image'
import React from 'react'

const ExperienceSection = () => {
  return (
    <section>
        <div className='relative w-full h-120'>

              <Image src="/images/night.png"
               alt="Experience"
                fill className=' mb-6' />

              <div className='absolute  inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40'>
                <h2 className='text-2xl font-bold mb-4 text-amber-800'>E X P E R I E N C E S</h2>
                <p className='text-white mb-6 text-6xl'>Discover unforgettable <br/> experiences around the world.</p>
                <p className='text-white text-xl'>Join us on a journey to create memories that last a lifetime. <br />
                  Experience the world with us. Experience the Soul of India 🇮🇳
              </p>
              </div>

        </div>

        <div >
        <ExperienceCategories />
        <FeaturedExperiences />
        <WhatYouGet />
        <TestimonialCard />
        
    </div>


    </section>
  )
}

export default ExperienceSection
