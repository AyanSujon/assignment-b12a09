import React from "react";
import { Link } from "react-router";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const AllGameCard = ({ game }) => {
  const { id, title, coverPhoto, category, description, ratings, developer } = game;

  const ratingNumber = Number(ratings) || 0;

  // Function to render 5 stars
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

  return (
    <Link
      to={`/game-details/${id}`} 
      className="bg-[#17161a] text-gray-300 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 "
    >
      <img
        src={coverPhoto}
        alt={title}
        className="w-full h-48 object-cover rounded-t-2xl"
      />

      <div className="p-5 flex flex-col space-y-3">
        {/* Title and Category */}
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="text-sm text-[#dd163b] font-semibold">{category}</span>
          
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm">{description}</p>

        {/* Developer and Ratings */}
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">By {developer}</span>
          <div className="flex items-center gap-1">
          <div className="flex mt-1">{renderStars()}</div>
          <span className="text-gray-300">{ratings}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllGameCard;
