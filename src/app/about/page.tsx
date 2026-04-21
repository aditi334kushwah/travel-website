import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <>
        <section className='relative  '>

            <div className='flex relative w-full h-100 backdrop-drop justify-center align-center'>
                {/* Background Image */}
                <Image
                    src="/images/premmandir.png"
                    alt="hero image"
                    fill
                    className="object-cover"
                    priority
                    
                />
                <div className='absolute mt-40 text-center align-center justify-center' >
                    <span className='flex justify-center align-center px-4  text-[#da7619] text-md text-center '>A B O U T</span>
                    <h1 className = " text-6xl text-white mt-2">
                        About TripNova – Your Travel Companion
                    </h1>
                    <p className ="text-gray-200 text-xl  mt-5"> TriNova is a modern travel platform dedicated to helping you explore the beauty and diversity of India. From serene hill stations to vibrant cities and spiritual destinations, we bring you carefully curated travel experiences designed to suit every kind of traveler.</p>
                </div>
            </div>
        
        </section>

        <section>
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16 mt-15">
                <div className="space-y-4 max-w-2xl">
                    <span className="text-blue-600 dark:text-blue-500 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600 dark:before:bg-blue-500 before:rounded-full">
                        Happy Clients
                    </span>
                    <h1 className="font-bold text-gray-800 dark:text-white text-3xl">Client’s Say About Us</h1>
                </div>
                <div className="relative">
                    <div className="flex md:items-stretch gap-10 lg:gap-14">
                        <div className="hidden md:flex md:w-1/2 lg:w-2/5 md:h-auto">
                            <Image src="/images/prem.png" width={1900} height={1200} alt="Author Avatr" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flex-1 flex flex-col space-y-6 md:space-y-12 lg:space-y-16 md:py-6 lg:py-8 md:h-auto md:justify-center">
                            <p className="text-xl lg:text-sm font-medium text-gray-500 dark:text-gray-300">
                              "TripNova is a modern travel platform dedicated to helping you explore the beauty and diversity of India. From serene hill stations to vibrant cities and spiritual destinations, we bring you carefully curated travel experiences designed to suit every kind of traveler. "<br/><span /><br />

                                "We believe that travel is more than just visiting places—it’s about creating memories, discovering new cultures, and experiencing life from a different perspective. That’s why we focus on providing seamless planning, affordable packages, and personalized journeys."<br/><span /><br />

                               " Whether you're seeking adventure in the mountains, relaxation by the beaches, or spiritual peace in sacred destinations, TripNova ensures every trip is smooth, safe, and unforgettable."
                                
                            </p>
                            <div className="flex items-start gap-4">
                                <Image src="/images/sidebiew.webp" width={1900} height={1200} alt="Author avatar" className="w-12 h-12 rounded-full flex md:hidden" />
                                <div className="space-y-1 flex-1">
                                    <h2 className="text-lg font-semibold leading-none text-gray-800 dark:text-gray-200">
                                        Prem Kelasi
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Traveller 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
            <div className="space-y-4 max-w-2xl">
                <span className="rounded-lg bg-blue-100 dark:bg-gray-900 px-2.5 py-1 text-xs font-semibold tracking-wide text-blue-800 dark:text-gray-100">Testimonials</span>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    What they say about us
                </h1>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-2 md:gap-6 relative">
                <div className="absolute -left-10 md:left-0 inset-y-0 w-3/5 z-0">
                    <Image src="/images/jaipur.png" alt="woman write" width={1800} height={1800} className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div className="flex col-span-1" />
                <div className="w-full col-span-1 overflow-hidden md:col-span-2 lg:col-span-1 relative flex flex-col gap-8 z-[5] py-10 md:py-14">
                    <div className="h-auto  rounded-2xl shadow-lg shadow-gray-200/40 dark:shadow-none bg-white dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800">
                        <div className="h-full">
                            <div className="flex gap-5 md:gap-6">
                                <div className="flex min-w-max">
                                    <Image src="/images/jaipur2.png" alt="Author Avatar" width={500} height={500} className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-2xl" />
                                </div>
                                <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-5">
                                    <div className="flex flex-col">
                                        <span className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                                            Radha Jadon
                                        </span>
                                        <span className="text-gray-600 dark:text-gray-400">
                                            Traveller
                                        </span>
                                    </div>
                                    <div>
                                        <p className="line-clamp-5 text-gray-700 dark:text-gray-300">
                                           Jaipur, known as the "Pink City," is famous for its stunning Rajput architecture and vibrant heritage sites.
                                           <br/>
                                           Hawa Mahal (Palace of Winds): A five-story honeycomb-shaped facade with 953 small windows designed for royal women to observe street festivals. <br/>
                                            Amer Fort: A majestic hilltop fort featuring the intricate Sheesh Mahal (Mirror Palace) and breathtaking views of Maota Lake.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default About
