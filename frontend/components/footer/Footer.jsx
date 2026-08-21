import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0b1629] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Logo + About */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-[#2878df]">
              niroggyan
            </h2>

            <p className="mt-5 text-sm leading-6 max-w-xs">
              Empowering you with simple health insights, risk assessments,
              and tools to make better-informed health decisions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-7">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#14233b] flex items-center justify-center hover:bg-[#2878df] hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#14233b] flex items-center justify-center hover:bg-[#2878df] hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#14233b] flex items-center justify-center hover:bg-[#2878df] hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#14233b] flex items-center justify-center hover:bg-[#2878df] hover:text-white transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#14233b] flex items-center justify-center hover:bg-[#2878df] hover:text-white transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wide text-sm">
              Our Products
            </h3>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Smart Reports
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Health Risk Calculator
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Lab Report Analyzer
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Analytics Dashboard
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wide text-sm">
              Resources
            </h3>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog & Resources
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Health Guides
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wide text-sm">
              Company
            </h3>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wide text-sm">
              Contact
            </h3>

            <div className="flex items-center gap-2 mt-6 text-sm">
              <MdEmail className="text-lg" />
              <a
                href="mailto:hello@niroggyan.com"
                className="hover:text-white transition"
              >
                hello@niroggyan.com
              </a>
            </div>

            {/* Newsletter */}
            <h3 className="text-white font-bold uppercase tracking-wide text-sm mt-8">
              Newsletter
            </h3>

            <p className="mt-4 text-sm">
              Get useful health insights delivered to your inbox.
            </p>

            <div className="mt-4 flex border border-gray-700 rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-gray-500"
              />

              <button className="bg-[#2878df] text-white px-5 hover:bg-[#1f63bd] transition">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p>
            © 2026 NirogGyan. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;