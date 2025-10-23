import React from "react";
import { FaHeadset } from "react-icons/fa";

const ContactHero = () => {
  return (
    <section className="text-center py-16 bg-[#17161a] text-white">
      <div className="max-w-2xl mx-auto px-4">
        <FaHeadset className="text-5xl text-[#dd163b] mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
        <p className="text-gray-300">
          Have questions, feedback, or a new game to share?  
          We’d love to hear from you! Let’s make <span className="text-[#dd163b] font-semibold">GameHub</span> even better — together.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
