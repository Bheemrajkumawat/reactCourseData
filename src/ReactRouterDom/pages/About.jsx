import React from "react";

function About() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl bg-white rounded-2xl shadow-xl p-10">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-gray-700 text-lg mb-4">
            Welcome to our website! We are passionate about creating amazing
            digital experiences for our users. Our team is dedicated to
            delivering high-quality products and providing excellent customer
            service.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Our mission is to innovate and provide solutions that make life
            easier and more enjoyable. We believe in continuous improvement,
            creativity, and collaboration to achieve our goals.
          </p>
          <p className="text-gray-700 text-lg">
            Thank you for visiting our page. We hope you enjoy exploring our
            services and learning more about what we do.
          </p>

          {/* Optional Team Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Our Team
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-gray-100 rounded-xl p-4 w-40 text-center shadow-md">
                <h3 className="font-semibold text-gray-800">Alice</h3>
                <p className="text-gray-600 text-sm">CEO</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 w-40 text-center shadow-md">
                <h3 className="font-semibold text-gray-800">Bob</h3>
                <p className="text-gray-600 text-sm">Developer</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 w-40 text-center shadow-md">
                <h3 className="font-semibold text-gray-800">Charlie</h3>
                <p className="text-gray-600 text-sm">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
