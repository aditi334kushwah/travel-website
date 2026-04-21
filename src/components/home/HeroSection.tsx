import React from 'react'
import { AnimatedTooltipPreview } from "@/components/toolfit"
import Image from 'next/image'
import Link from 'next/dist/client/link'
 
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen ">

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="hero image"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center bg-black/40">
        <h1 className="text-4xl md:text-6xl ">
          Explore Incredible India with TriNova 🇮🇳
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Discover breathtaking destinations, rich culture, and unforgettable journeys across India — all in one place.
        </p>

        <div className="mt-6 flex gap-4">
          <Link href="/packages">
            <button className="bg-transparent rounded-full border py-3 border-white/35 backdrop-blur px-5 transition duration-300 hover:-translate-y-1 hover:bg-white/12">
              Explore Packages
            </button>
          </Link>
          <Link href="/booking">
            <button className="bg-[#c8782f]  rounded-full border py-3 border-white/35 backdrop-blur px-5 transition duration-300 hover:-translate-y-1 hover:bg-white/12">
              Book Your Trip
            </button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row mt-20 gap-10 items-center justify-between">

        {/* LEFT CARD */}
        <div className="md:w-1/3 h-52 w-full bg-transparent backdrop-blur-md border border-white/35 rounded-xl mb-10 p-6 text-white">
          <AnimatedTooltipPreview />
          <p className="flex text-sm align-right">
            Book amazing travel packages across India with TriNova.
          </p>
           <Link href="/booking"><button className="bg-transparent border border-white/35 md:mt-4   text-white  py-1 px-4 rounded-full transition duration-300 hover:-translate-y-0.5 hover:bg-white/12  md:inline-flex " >Book Your Trip</button></Link>
        </div>

        {/* RIGHT IMAGES */}
        <div className="md:w-1/2 flex gap-12 justify-center">

          <Image
            src="/images/hero_card1.jpg"
            alt="image"
            width={150}
            height={250}
            className="rounded-xl object-cover"
          />

          <Image
            src="/images/taj.jpg"
            alt="image"
            width={150}
            height={250}
            className="rounded-xl object-cover mt-6"
          />

          <Image
            src="/images/golden.jpg"
            alt="image"
            width={150}
            height={250}
            className="rounded-xl object-cover mt-12"
          />

        </div>

      </div>
      </div>

    </div>
  )
}

export default HeroSection
