import React from "react";
import HeaderApp from "./HeaderApp";
import Footer from "./FooterApp";
export default function ContactUs() {
  return (
    <>
      <HeaderApp />
     {/* PAGE BANNER */}
     <div className="max-w-6xl mx-auto px-4 py-8 mb-20">

      <div className="relative bg-green-600 rounded-2xl mb-10 overflow-hidden">
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-16">
      
      {/* Text */}
      <div className="text-center md:text-left md:max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-green-100 mb-6">
          Explore the best products in electronics, fashion, and more!
        </p>
        <a
          href="/shop"
          className="inline-block px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Shop Now
        </a>
      </div>

      {/* Optional Banner Image */}
      <div className="mt-6 md:mt-0 md:ml-10 flex-1 flex justify-center">
        <img
          src="https://png.pngtree.com/png-clipart/20241016/original/pngtree-fruit-and-vegetable-png-image_16343587.png" // replace with your banner image path
          alt="Shop Banner"
          className="h-48 md:h-64 object-contain"
        />
      </div>

    </div>
  </div>

      <div className="max-w-7xl mx-auto px-4 py-8 mb-20 grid md:grid-cols-2 gap-10">

        {/* Office Address & Google Map */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Our Office</h2>
          <p className="text-gray-600">
            123 Green Street, MyCity, MyState, 123456
          </p>
          <p className="text-gray-600">Email: support@myshop.com</p>
          <p className="text-gray-600">Phone: +91 98765 43210</p>

          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1165674847!2d72.74109982001986!3d19.082197839928673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63dfad6a2f5%3A0x7e8a7f0c0cfa7a11!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697158039448!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
      <Footer />
    </>
  );
}
