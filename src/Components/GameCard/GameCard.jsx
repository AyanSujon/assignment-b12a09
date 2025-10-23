import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router";


const GameCard = ({ game }) => {
  const { id, title, coverPhoto, category, description, ratings, developer } = game;

  const ratingNumber = Number(ratings) || 0; 

  // Function to render 5 stars based on rating
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
  console.log(renderStars())

  return (
    <>
    <Link to={`/game-details/${id}`} >
        <div className=" bg-[#17161a] text-gray-300 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Cover Photo */}
      <img src={coverPhoto} alt={title} className="w-full h-48 object-cover" />

      <div className="p-5 flex flex-col h-full">
        {/* Title and Category */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <span className="text-sm text-[#dd163b] font-semibold">{category}</span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm my-3">{description}</p>

        {/* Developer and Ratings */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-400 text-sm">By {developer}</span>
          <div className="flex items-center">
            {renderStars()} 
            <span className="text-gray-300 ml-2">{ratings}</span>
          </div>
        </div>

        {/* Download Button */}
        <button
          className="bg-primary hover:bg-[#eb3154] text-white font-semibold text-center py-2 px-4 rounded-lg transition-colors"
        >
          View Game Details
        </button>
      </div>
    </div>
    
    </Link>
    
    </>
  );
};

export default GameCard;
