import React, { useRef, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GameCard = ({ game, index }) => {
  const { id, title, coverPhoto, category, description, ratings, developer } = game;
  const cardRef = useRef(null);

  const ratingNumber = Number(ratings) || 0;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (ratingNumber >= i) {
        stars.push(<FaStar key={i} className="text-[#dd163b] mr-1" />);
      } else if (ratingNumber >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-[#dd163b] mr-1" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-500 mr-1" />);
      }
    }
    return stars;
  };

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0, 
        duration: 0.8,
        delay: index * 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%", 
          toggleActions: "play none none none",
        },
      }
    );
  }, [index]);

  return (
    <Link to={`/game-details/${id}`}>
      <div
        ref={cardRef}
        className="bg-[#17161a] text-gray-300 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      >
        <img src={coverPhoto} alt={title} className="w-full h-48 object-cover" />

        <div className="p-5 flex flex-col h-full">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <span className="text-sm text-[#dd163b] font-semibold">{category}</span>
          </div>

          <p className="text-gray-400 text-sm my-3">{description}</p>

          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-400 text-sm">By {developer}</span>
            <div className="flex items-center">
              {renderStars()}
              <span className="text-gray-300 ml-2">{ratings}</span>
            </div>
          </div>

          <button className="bg-primary hover:bg-[#eb3154] text-white font-semibold text-center py-2 px-4 rounded-lg transition-colors">
            View Game Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
