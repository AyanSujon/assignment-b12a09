import React from 'react';
import { Link } from "react-router";
import { FaArrowRight} from "react-icons/fa";

const HeroAboutUs = () => {
    return (
        <div className="grid md:grid-cols-2 gap-10 items-center mx-auto py-12">
        <div>
          <h2 className="text-primary text-4xl md:text-5xl font-extrabold leading-tight">
            GameHub — Discover. Play. Support.
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl">
            Your curated library for indie gems and AAA titles. We connect players
            with creators by making discovery simple, fast, and delightful.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/games"
              className="inline-flex items-center gap-2 bg-primary hover:bg-[#eb3154] text-white px-5 py-3 rounded-xl transition"
            >
              Browse Games <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-gray-700 px-5 py-3 rounded-xl text-gray-300 hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* right image */}
        <div className="mx-auto">
          
          <div className="w-full rounded-2xl overflow-hidden border-2 border-primary shadow-lg">
            <img
              src="https://i.ibb.co.com/jkTBVv1g/gamehub.png"
              alt="GameHub hero"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    );
};

export default HeroAboutUs;