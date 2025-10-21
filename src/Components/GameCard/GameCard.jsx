import React from "react";
import { FaStar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const GameCard = ({ game }) => {
  const { title, coverPhoto, category, downloadLink, ratings, developer } = game;

  return (
    <div className="card bg-[#181c23] shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300">
      <div className="flex justify-between items-center p-3">
        <h2 className="text-lg font-semibold text-accent">{title}</h2>
        <a className="  hover:bg-secondary transition p-3 rounded-full shadow  " href={downloadLink} target="_blank" >
          <FiExternalLink className="text-gray-400 hover:text-primary transition" />
        </a>
      </div>

      <figure className="px-6 pt-3 ">
        <img
          src={coverPhoto}
          alt={title}
          className="rounded-full bg-secondary w-full object-fit p-4"
        />
      </figure>

      <div className="card-body px-6 py-3">
        <p className="text-sm text-accent">{developer}</p>

        <div className="flex justify-between items-center mt-2">

          {/* Right side - rating */}
          <div className="flex items-center text-yellow-500">
            <FaStar />
            <span className="text-gray-700 text-sm ml-1">{ratings}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
