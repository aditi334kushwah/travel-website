"use client"
import React from 'react'

const Form = () => {
  return (
    <div className="w-full px-4">
      <form className="max-w-2xl mx-auto rounded-2xl shadow-lg p-6 sm:p-8 bg-gradient-to-br from-blue-200 to-gray-50">

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" placeholder="Your Name" required />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" placeholder="Your Email" required />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Phone</label>
          <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" placeholder="Your Phone Number" required />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Subject</label>
          <select id="subject" name="subject" className="w-full px-3 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" required>
            <option value="">Select a subject</option>
            <option value="existing">Existing Booking</option>
            <option value="general">General Inquiry</option>
            <option value="booking">Booking Related</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-6 rounded-lg transition duration-300 hover:-translate-y-0.5">
          Send Message
        </button>

      </form>
    </div>
  )
}

export default Form
