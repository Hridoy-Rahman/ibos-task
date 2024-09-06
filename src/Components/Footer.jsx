import React from "react";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import { LiaFlagUsaSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-8 mx-auto mt-10">
      <div className="flex flex-wrap justify-between items-start">
        
        <div className="flex items-center mb-6">
          <div className="flex items-center gap-2">
            <p className="bg-[#1E99F5] rounded-full p-1">
              <img src="/F.png" alt="FurniFlex Logo Icon" />
            </p>
            <img src="/FurniFlex.png" alt="FurniFlex Logo" className="h-fit" />
          </div>
        </div>

        <div className="flex flex-wrap justify-between w-2/3">
          <div className="flex flex-col mb-6">
            <h1 className="mb-2 text-lg font-semibold">About Us</h1>
            <Link to="#" className="text-gray-500 text-lg font-semibold">
              Master Plan
            </Link>
            <Link to="#" className="text-gray-500 text-lg font-semibold">
              Jobs
            </Link>
            <Link to="#" className="text-gray-500 text-lg font-semibold">
              Invest
            </Link>
            <Link to="#" className="text-gray-500 text-lg font-semibold">
              Pressroom
            </Link>
            <Link to="#" className="text-gray-500 text-lg font-semibold">
              Blog
            </Link>
            <Link to="#" className="text-gray-500 text-lg font-semibold">
              Contact
            </Link>
          </div>


          <div className="flex flex-col mb-6">
            <h1 className="mb-2 text-lg font-semibold">Explore EEVE</h1>
            <Link to="#" className="text-gray-500 text-lg font-semibold">
              Unlock my Robot Power
            </Link>
            <Link to="#" className="text-gray-500 text-lg font-semibold">
              Starlight
            </Link>
            <Link to="#" className="text-gray-500 text-lg font-semibold">
              Robot Platform
            </Link>
            <Link to="#" className="text-gray-500 text-lg font-semibold">
              EEVE Roadmap
            </Link>
          </div>

          <div className="flex flex-col mb-6">
            <h1 className="mb-2 text-lg font-semibold">Community & Support</h1>
            <Link to="#" className="text-gray-500 text-lg font-semibold">
              Willow X Community
            </Link>
            <Link to="#" className="text-gray-500 text-lg font-semibold">
              Developer & Maker Access
            </Link>
            <Link to="#" className="text-gray-500 text-lg font-semibold">
              Special Cases
            </Link>
          </div>
        </div>
      </div>


      <hr className="w-full border-gray-500 my-6" />

      <div className="flex flex-wrap justify-between items-center">
        <div className="flex gap-4 mb-6">
          <Link to="#">
            <FaFacebook className="hover:text-gray-400" />
          </Link>
          <Link to="#">
            <FaInstagram className="hover:text-gray-400" />
          </Link>
          <Link to="#">
            <FaX className="hover:text-gray-400" />
          </Link>
          <Link to="#">
            <FaLinkedinIn className="hover:text-gray-400" />
          </Link>
        </div>


        <div className="flex flex-wrap gap-4 mb-6">
          <Link to="#" className="text-gray-500 text-lg font-semibold">
            March22 Recap
          </Link>
          <Link to="#" className="text-gray-500 text-lg font-semibold">
            Privacy Policy
          </Link>
          <Link to="#" className="text-gray-500 text-lg font-semibold">
            General Terms
          </Link>
          <Link to="#" className="text-gray-500 text-lg font-semibold">
            Contact
          </Link>
        </div>

        <div className="mb-6">
          <Link
            to="#"
            className="text-gray-500 text-lg font-semibold flex gap-2 items-center"
          >
            <LiaFlagUsaSolid /> United States (English)
          </Link>
        </div>
      </div>

      <p className="text-gray-700 text-lg font-semibold text-center py-6">
        EEVE © 2024. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
