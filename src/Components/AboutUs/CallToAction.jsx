import React from 'react';
import { Link } from 'react-router';

const CallToAction = () => {
    return (
    <section className="py-12  border-t border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-2xl font-bold text-primary">Ready to explore?</h4>
          <p className="text-gray-300 mt-2">Dive into GameHub and discover something new today.</p>
        </div>

        <div className="flex gap-3">
          <Link
            to="/games"
            className="inline-flex items-center gap-2 bg-primary px-5 py-3 rounded-xl hover:bg-[#eb3154] transition"
          >
            Browse Games
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-gray-700 px-5 py-3 rounded-xl text-gray-300 hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
    );
};

export default CallToAction;