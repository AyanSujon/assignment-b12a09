import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#17161a] text-gray-300 py-10 px-6 border-t border-[#222]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Game<span className="text-[#dd163b]">Hub</span>
          </h2>
          <p className="text-sm leading-relaxed">
            GameHub – A Game Library. An engaging online library for discovering
            and supporting game developers. Browse indie games, explore details,
            and install what you love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#dd163b] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/games"
                className="hover:text-[#dd163b] transition-colors"
              >
                Games
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#dd163b] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#dd163b] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/faq"
                className="hover:text-[#dd163b] transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-[#dd163b] transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-[#dd163b] transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="hover:text-[#dd163b] transition-colors"
              >
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <Link to="https://www.facebook.com/ayansujon/" target="_blank" rel="noopener noreferrer" className="hover:text-[#dd163b] transition-colors">
              <FaFacebookF />
            </Link>
            <Link to="https://x.com/YourAyanSujon" target="_blank" rel="noopener noreferrer" className="hover:text-[#dd163b] transition-colors">
              <FaTwitter />
            </Link>
            <Link to="https://www.instagram.com/ayansujon/" target="_blank" rel="noopener noreferrer" className="hover:text-[#dd163b] transition-colors">
              <FaInstagram />
            </Link>
            <Link to="https://www.linkedin.com/in/ayansujon/" target="_blank" rel="noopener noreferrer" className="hover:text-[#dd163b] transition-colors">
              <FaLinkedin />
            </Link>
            <Link to="https://github.com/AyanSujon" target="_blank" rel="noopener noreferrer" className="hover:text-[#dd163b] transition-colors">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#222] mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">GameHub</span>. All rights
        reserved. Designed by{" "}
        <Link to={"https://www.ayansujon.com/"} className="text-[#dd163b] font-semibold">Ayan Sujon</Link>.
      </div>
    </footer>
  );
};

export default Footer;
