import React from 'react'
import Image from 'next/image'

const OneCard = () => {
  return (
    <div className='flex justify-center align-center relative w-full h-screen mt-20 '>
      <Image src="/images/onecard.png"
        alt="image"
        width={1200}
        height={400}
        className="rounded-xl object-cover mb-20" />

         {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT ON TOP */}
      <div className="absolute  flex flex-col align-start justify-center text-white px-15 py-10 ">

        {/* Heading */}
        <h1 className="text-4xl  text-start  mb-5 ">
          Explore the World with Unforgettable Experiences
        </h1>

        <h4 className="text-xl text-start ">
          Discover handpicked destinations, curated travel packages, and seamless journeys across India.
        </h4>

        {/* Cards */}
        <div className="mt-10 flex gap-6 ">

          {/* Card 1 */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl w-40 text-center">
            <h2 className="font-semibold">“Travel is not just about seeing new places, it’s about discovering a new version of yourself.”</h2>
          </div>

          {/* Card 2 */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl w-40 text-center">
            <h2 className="font-semibold">“Collect moments, not things — the world is too beautiful to stay in one place.”</h2>
          </div>

          {/* Card 3 */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl w-40 text-center">
            <h2 className="font-semibold">“The journey you take today becomes the story you tell tomorrow.”</h2>
          </div>

        </div>

      </div>
    
    </div>
  )
}

export default OneCard
