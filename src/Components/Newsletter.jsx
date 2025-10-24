import React, { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter Data:", formData);
    toast.success("Thank you for subscribing!");
    setFormData({ name: "", email: "" });
  };

  return (
    <section className="w-full bg-base-200 py-16 px-4 flex justify-center items-center rounded-2xl my-10">
      <div className="max-w-2xl w-full text-center">
        <h2 className="left-side-animation-gsap text-3xl font-bold mb-4 text-primary">
          Subscribe to Our Newsletter
        </h2>
        <p className="right-side-animation-gsap text-gray-600 mb-8">
          Stay updated with our latest news, articles, and exclusive offers.
        </p>

        <form
          onSubmit={handleSubmit}
          className=" middle-animation-gsap flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="input input-bordered w-full sm:w-1/3"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="input input-bordered w-full sm:w-1/3"
          />
          <button type="submit" className="btn btn-primary w-full sm:w-auto">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
