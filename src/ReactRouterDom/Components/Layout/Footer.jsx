import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full text-gray-300 mt-10">
      {/* Main Footer */}
      <div className="max-w-[1763px] mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10  bg-gray-900">
        {/* Logo + About */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold text-red-500">BheemFlix</h2>
          <p className="mt-3 text-sm">
            Enjoy unlimited movies, shows, and entertainment with BheemFlix.
            Your ultimate destination for fun.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Movies</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <p className="text-sm">📞 +91 9876543210</p>
            <p className="text-sm">✉️ support@bheemflix.com</p>
            <div className="flex space-x-4 mt-4 text-xl">
              <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
              <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1760.5px] ml-10 border-t border-gray-700 bg-gray-900 ">
        <div className="max-w-[1200px] mx-auto px-6 py-4 text-center text-sm">
          © {new Date().getFullYear()} BheemFlix. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
