import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
     <div className="flex flex-col items-center absolute z-50 w-full">

        <div className="flex justify-center align-center w-[80%] h-16 px-2  text-white bg-gray-200/80 backdrop-blur-md transition-colors duration-300 fixed nav  mt-5 rounded-4xl  border-b shadow-lg border-white-700  ">
          <Link href="/"><Image  src="/logo.png" alt="Logo" width={120} height={120} className="rounded-full transition duration-300 hover:translate-y-0.5 "  /></Link>
          <div className="flex  gap-8 ml-auto py-4 space-x-2 ">
            <Link href="/" className=" text-gray-900 text-sm transition duration-300 hover:translate-y-0.5 hover:bg-[#c8782f]  hover:text-white px-4 pt-1 hover: rounded-full justify-between align-center ">Home</Link>
            <Link href="/packages" className=" text-gray-900 text-sm transition duration-300 hover:translate-y-0.5 hover:bg-[#c8782f]  hover:text-white px-4 pt-1 hover: rounded-full justify-between align-center ">Packages</Link>
            <Link href="/experiences" className=" text-gray-900 text-sm transition duration-300 hover:translate-y-0.5 hover:bg-[#c8782f]  hover:text-white px-4 pt-1 hover: rounded-full justify-between align-center ">Experiences</Link>
            <Link href="/about" className=" text-gray-900 text-sm transition duration-300 hover:translate-y-0.5 hover:bg-[#c8782f]  hover:text-white px-4 pt-1 hover: rounded-full justify-between align-center ">About</Link>
            <Link href="/contact" className=" text-gray-900 text-sm transition duration-300 hover:translate-y-0.5 hover:bg-[#c8782f]  hover:text-white px-4 pt-1 hover: rounded-full justify-between align-center ">Contact</Link>
          </div>    
          <div className ="flex justify-center align-center my-3 mr-5 ml-15">
            <Link href="/booking"><button className="bg-[#c8782f]  h-10 text-white  py-2 px-4 rounded-full transition duration-300 hover:-translate-y-0.5 hover:bg-[#a56025]  md:inline-flex "  >Book Your Trip</button></Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar
