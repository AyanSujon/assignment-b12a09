import React, { useEffect, useRef } from "react";
import { FaHeadset, FaDownload, FaFileAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AmazingFeatures = () => {
  const cardsRef = useRef([]);

  const features = [
    {
      id: 1,
      icon: <FaHeadset className="text-4xl text-white" />,
      title: "CUSTOMER SUPPORT",
      description: "Our five-star support team helps you solve problems anytime.",
    },
    {
      id: 2,
      icon: <FaDownload className="text-4xl text-white" />,
      title: "ONE CLICK INSTALL",
      description: "Install your favorite games or demos with just one click.",
    },
    {
      id: 3,
      icon: <FaFileAlt className="text-4xl text-white" />,
      title: "WELL DOCUMENTED",
      description: "We provide clear guides and documentation for easy understanding.",
    },
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="text-white py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-[#1a1a1f] hover:bg-[#222228] transition-colors duration-300 rounded-2xl p-8 flex flex-col items-center text-center shadow-md"
            >
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold uppercase mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmazingFeatures;
