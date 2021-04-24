import React from "react";
import { TiLocation } from "react-icons/ti";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function NhoodFooter() {
  return (
    <footer className="bg-black flex flex-wrap justify-center py-20 px-48 sm:py-16 sm:px-8">
      <div className="flex flex-col w-3/10 mr-16 sm:w-full sm:mb-12">
        <span className="text-white font-bold text-sm mb-4">Get In Touch</span>
        <div className="flex items-start mb-4">
          <TiLocation className="h-6 w-6 mr-2 text-custom-106" />
          <span className="text-white opacity-40">
            2 Alhaji Estate, Water Gate Hotel Opposite Obio Akpo LGA Council HQ
            Obio Akpo
          </span>
        </div>
        <div className="flex items-center">
          <FaPhoneAlt className="h-4 w-4 mr-2 text-custom-106" />
          <span className="text-white opacity-40">+2349022169861</span>
        </div>
      </div>
      <div className="flex flex-col w-1/5 mr-16 sm:w-full sm:mb-12">
        <span className="text-white font-bold text-sm mb-4">Follow Us</span>
        <div className="flex items-center">
          <FaFacebookF className="h-8 w-8 px-2 py-2 items-center justify-center border-1 border-gray-900 rounded-full mr-3 text-custom-108" />
          <FaTwitter className="h-8 w-8 px-2 py-2 items-center justify-center border-1 border-gray-900 rounded-full mr-3 text-custom-108" />
          <FaInstagram className="h-8 w-8 px-2 py-2 items-center justify-center border-1 border-gray-900 rounded-full mr-3 text-custom-108" />
          <FaYoutube className="h-8 w-8 px-2 py-2 items-center justify-center border-1 border-gray-900 rounded-full text-custom-108" />
        </div>
      </div>
      <div className="flex flex-col w-3/10 sm:w-full">
        <span className="text-white font-bold text-sm mb-4">Newsletter</span>
        <span className="text-white opacity-40 mb-4">
          Etiam maximus, justo ut pellentesque egestas, erat sapien mollis
          massa, nec porta nisl quam eu arcu.
        </span>
        <input
          placeholder="Your Email"
          className="h-10 text-sm rounded-md mb-4 px-2 bg-gray-700 bg-opacity-20 border-1 border-gray-900 border-opacity-70 text-gray-500"
        />
        <button className="bg-custom-106 text-white h-10 w-24 items-center justify-center rounded-full">
          Send
        </button>
      </div>
    </footer>
  );
}
