"use client"
import React from 'react'

const Form = () => {
  return (
    <div>

          <form className="max-w-2xl mx-auto  rounded-lg shadow-lg p-8 bg-gradient-to-br from-blue-200 to-gray-50">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="  Your Email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
              <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Phone Number" required />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
              <select id="subject" name="subject" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                <option value="">Select a subject</option>
                <option value="feedback">Existing Booking</option>
                <option value="general">General Inquiry</option>
                <option value="booking">Booking Related</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message"  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
          </form> 
    
    </div>
  )
}

export default Form
