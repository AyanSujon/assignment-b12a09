import React from "react";
import { Link } from "react-router";
import { FaArrowLeft, FaSadTear } from "react-icons/fa";

const GameNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-secondary text-white text-center px-5">
      <div className="flex flex-col items-center space-y-5">
        {/* Sad Icon */}
        <FaSadTear className="text-primary text-6xl animate-bounce" />

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Game Not Found
        </h1>
        <p className="text-gray-400 max-w-md">
          Oops! The game you’re looking for doesn’t exist or has been removed.
          Please check the link or go back to explore more games.
        </p>

        {/* Back Button */}
        <Link
          to="/games"
          className="inline-flex items-center gap-2 mt-4 bg-primary hover:bg-[#eb3154] text-white px-5 py-2 rounded-xl transition"
        >
          <FaArrowLeft /> Back to Game Library
        </Link>
      </div>
    </div>
  );
};

export default GameNotFound;
