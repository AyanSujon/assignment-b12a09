
import React from "react";
import useGsapScrollAnimation from "../../Hooks/useGsapScrollAnimation";

const AboutGamehub = () => {
    useGsapScrollAnimation(); // activate animations
 
  return (
    <section className="bg-[#17161a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text / Logo */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="left-side-animation-gsap text-4xl font-extrabold uppercase mb-4">
            About the{" "}
            <span className="text-[#dd163b] tracking-wide">GameHub</span>
          </h2>
          <p className="left-side-animation-gsap text-gray-300 mb-6 leading-relaxed">
            GameHub is an engaging online library for discovering and supporting
            game developers. Users can browse indie games, view detailed
            information, and install games they love. Connect, explore, and
            experience gaming like never before — all in one place!
          </p>
          <button className="left-side-animation-gsap btn bg-[#dd163b] hover:bg-[#b81031] border-none text-white px-8 mt-3">
            Read More
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="right-side-animation-gsap flex-1 flex justify-center">
          <img
            src="https://i.ibb.co.com/Xk8zF75V/3425081.jpg"
            alt="GameHub Community"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutGamehub;
