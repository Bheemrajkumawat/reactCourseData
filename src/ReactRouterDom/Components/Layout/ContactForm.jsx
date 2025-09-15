import React from "react";
import { Form } from "react-router-dom";

export const contactData = async ({request})=>{
    try{
        const res = await request.formData();
        console.log(res)
        const data =Object.fromEntries(res)
        console.log(data)
        return null
    }catch(error){
        console.log(error)
    }
}

function ContactForm() {
  return (
    <div className="min-h-screen bg-gradient-to-r flex items-center justify-center p-4 container m-auto">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Contact Us
        </h2>
        <Form  method="POST" action="/contact"className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Your message"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-md"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;
