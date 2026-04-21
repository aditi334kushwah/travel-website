
import React from 'react'
import Image from 'next/image'
import { Phone,  Mail,  ImageIcon , MessageCircle } from "lucide-react";
import Form from '@/components/ui/Form'

const Contact= () => { 
  return (
   
   <div className='f-full w-full relative '>
      
      <div className='flex object-cover h-100 w-full relative '>
          <Image  src="/images/contact.png" 
        alt="Contact Us" layout="fill" 
        objectFit="cover" 
        className="absolute z-0 opacity-50 " /> 
      </div>

      <div className="absolute  z-20  top-70 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-900 to-gray-700 rounded-3xl text-white mt-0 shadow-lg h-50 w-[80%] flex flex-col items-center justify-center mb-10  ">
         <h1 className="text-6xl font-bold mb-4">Let's Plan Your Journey</h1>
         <h4 className="text-xl">We're here to help you create unforgettable memories in India </h4>
      </div>

      <div className='mt-10'>
    
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold mb-4 mt-20 text-center">Contact Us</h2>
          <p className="text-lg mb-8 text-center">Have questions or need assistance? Reach out to us!</p>
          <div className="grid grid-cols-3 gap-4  items-center px-25">
            {/* three card  */}

            <div className="bg-gradient-to-l from-blue-500 to-purple-500 rounded-lg transition duration-300 hover:-translate-y-2.5 shadow-lg p-6 text-white mb-6 w-[89%] h-90 text-center flex flex-col items-center justify-center">
              <Phone className="w-10 h-10 text-white font-bold mb-5" />
              <h3 className="text-2xl font-bold mb-4">Call Us</h3>
              <p className="text-md mb-4">Our team is available 24/7 to assist you with any inquiries or issues.</p>
              <p className="text-lg mb-4 font-bold">Phone: +91 98765 43210</p>
            </div>

            <div className="bg-gradient-to-l from-green-700 to-green-500 rounded-lg shadow-lg p-6 transition duration-300 hover:-translate-y-2.5 text-white mb-6 w-[89%] h-90 text-center flex flex-col items-center justify-center">
              <MessageCircle className="w-10 h-10 text-white font-bold mb-5" />
              <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
              <p className="text-md mb-4">Instant Messaging Support</p>
              <p className="text-lg mb-4 font-bold">WhatsApp: +91 98765 43210</p>
            </div>


            <div className="bg-gradient-to-l from-orange-700 to-orange-500 rounded-lg shadow-lg p-6 text-white transition duration-300 hover:-translate-y-2.5 mb-6 w-[89%] h-90 text-center flex flex-col items-center justify-center">
              <Mail className="w-10 h-10 text-white font-bold mb-5" />
              <h3 className="text-2xl font-bold mb-4">Email Us</h3>
              <p className="text-md mb-4">Our team is available 24/7 to assist you with any inquiries or issues.</p>
              <p className="text-lg mb-4 font-bold">Email: tripnova@gmail.com</p>
            </div>

            <div className="bg-gradient-to-l from-pink-700 to-orange-500 rounded-lg shadow-lg p-6 text-white transition duration-300 hover:-translate-y-2.5 mb-6 w-[89%] h-90 text-center flex flex-col items-center justify-center">
              <ImageIcon className="w-10 h-10 text-white font-bold mb-5" />
              <h3 className="text-2xl font-bold mb-4">Instragram</h3>
              <p className="text-md mb-4">Follow our journey</p>
              <p className="text-lg mb-4 font-bold">@tripnova</p>
            </div>

          </div>

        </div>

      </div>

      <section>
         <div className="container mx-auto px-4 py-2">
          <h2 className="text-4xl font-bold mb-4 mt-20 text-center">Send Us a Message </h2>
          <p className="text-lg mb-8 text-center">Fill out the form below and we'll get back to you within 24 hours</p>
         </div>

          
          <Form />
        
        
      </section>
    </div>
  )
}

export default Contact
