import React from 'react'
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";



export default function Contact() {
  return (
    <div>

    <Navbar/>
{/* ------------Formular */}
    <div className="max-w-lg mx-auto py-20">
      <h2 className="text-2xl font-bold mb-20">We are excited for your message, and we won't take long to respond, promised!</h2>
      <form >
        <div className="mb-20">
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="name">Name</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-20">
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">E-Mail</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            id="email"
            type="email"
            name="email"
            placeholder="Your email address"
            required
          />
        </div>
        <div className="mb-20">
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="message">Your message</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            id="message"
            rows="5"
            name="message"
            placeholder="Your message..."
            required
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-20 rounded">
          Send
        </button>
      </form>
    </div>
{/* ----------- */}
    <Footer/>
</div>
  )
}

