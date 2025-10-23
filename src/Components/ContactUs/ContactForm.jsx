import React, { useState } from "react";

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); // Show thank you message
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-lg mx-auto bg-[#181c23] rounded-2xl shadow-md p-8 ">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          Send Us a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label text-sm font-semibold text-white">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="input input-bordered w-full text-gray-500 outline-none"
            />
          </div>

          <div>
            <label className="label text-sm font-semibold text-white">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="input input-bordered w-full text-gray-500 outline-none"
            />
          </div>

          <div>
            <label className="label text-sm font-semibold text-white">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              className="input input-bordered w-full text-gray-500 outline-none"
            />
          </div>

          <div>
            <label className="label text-sm font-semibold text-white">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="textarea textarea-bordered w-full h-32 text-gray-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn w-full bg-[#dd163b] hover:bg-[#b51230] text-white text-lg font-semibold border-none"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
