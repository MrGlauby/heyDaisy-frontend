import React from "react";
import transition from "../transition";

function Contact() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* ------------Formular */}
      <div className="max-w-lg mx-auto py-20">
        <h2 className="text-2xl font-bold mb-20">
          We look forward to your message and will reply as soon as possible, we
          promise!
        </h2>
        <form>
          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="email"
            >
              E-Mail
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              id="email"
              type="email"
              name="email"
              placeholder="Your email address"
              required
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor="message"
            >
              Your message
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              id="message"
              rows="5"
              name="message"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
      {/* ----------- */}
    </div>
  );
}
export default transition(Contact);
