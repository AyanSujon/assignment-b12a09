// src/hooks/useGsapScrollAnimation.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapScrollAnimation = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left-side animation
      gsap.utils.toArray(".left-side-animation-gsap").forEach((el) => {
        gsap.from(el, {
          x: -150,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
            delay: .1,
          },
        });
      });

      // Right-side animation
      gsap.utils.toArray(".right-side-animation-gsap").forEach((el) => {
        gsap.from(el, {
          x: 150,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
            delay: .1,
          },
        });
      });

      // Middle animation (fade-up)
      gsap.utils.toArray(".middle-animation-gsap").forEach((el) => {
        gsap.from(el, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
            delay: .1,
          },
        });
      });
    });

    return () => ctx.revert(); // cleanup
  }, []);
};

export default useGsapScrollAnimation;
