import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";

const ContactSuccess = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-base-200 text-center">
      <FaCheckCircle className="text-6xl text-[#dd163b] mb-4" />
      <h2 className="text-3xl font-bold mb-2 text-white">Message Sent!</h2>
      <p className="text-gray-600 max-w-md">
        Thanks for reaching out! Our team will get back to you within 24–48 hours.  
        In the meantime, explore more games on <Link to={"/"} className="font-semibold text-[#dd163b]">GameHub</Link> 🎮
      </p>
    </section>
  );
};

export default ContactSuccess;
