"use client"
import Link from 'next/link'
import { useState } from 'react'
import Form from '@/components/ui/Form'

 
export default function BookingPage() {
return (
<>
  
  <section className="bg-gray-100 dark:bg-gray-900 py-32 sm:py-36 lg:py-40 overflow-hidden h-[100dvh] min-h-max flex items-center relative">
    <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70
  backdrop-filter blur-3xl opacity-50" />
    <div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70
  backdrop-filter blur-3xl opacity-50" />
    <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-emerald-400/5 right-0
  -translate-y-[40%] translate-x-[40%] top-0">
      <div className="inset-[10%] rounded-full bg-gradient-to-l from-emerald-400/20">
        <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-emerald-400/30" />
      </div>
    </div>
    <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-emerald-400/5 left-0
  translate-y-[40%] -translate-x-[40%] bottom-0">
      <div className="inset-[10%] rounded-full bg-gradient-to-r from-emerald-400/40">
        <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-emerald-400/50" />
      </div>
    </div>
    <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 ">
      <div className="text-center flex flex-col items-center space-y-10 mb-10">
        <span className="border border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 dark:bg-gray-950 bg-opacity-50 text-gray-700 dark:text-gray-300">
          Plan Your Visit
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl/tight xl:text-7xl/tight text-gray-900 dark:text-white font-bold max-w-4xl capitalize">
          Book Your Dream Trip
        </h1>
        <p className="text-base text-gray-700 dark:text-gray-300 text-center max-w-xl">
         Plan your perfect journey with us. Fill in your details and let us create an unforgettable travel experience just for you.
        </p>
      </div>
      <Form />
    </div>
  </section>
</>
)
}