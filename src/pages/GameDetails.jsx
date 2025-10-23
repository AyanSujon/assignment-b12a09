import React from "react";
import { useParams, Link } from "react-router";
import { FaStar, FaStarHalfAlt, FaRegStar, FaArrowLeft, FaDownload } from "react-icons/fa";
import useGames from "../Hooks/useGames";
import GameNotFound from "./GameNotFound";
import Newsletter from "../Components/Newsletter";
import Container from "../Layout/Container";


const GameDetails = () => {
  const { id } = useParams();
  const { games, error } = useGames();

  if (error)
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to load game details.
      </div>
    );

  const game = games.find((p) => String(p.id) === id);

  if (!game)
    return (
      <div className="text-center text-gray-400 mt-10">
        <GameNotFound/>
      </div>
    );

  // Dynamic Rating Stars Renderer
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-primary" />);
      } else if (i === fullStars + 1 && halfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-primary" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-500" />);
      }
    }

    return <div className="flex items-center gap-1">{stars}</div>;
  };

  return (
    <>
        <div className="min-h-screen bg-secondary text-white py-10 px-5 md:px-20">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/games"
          className="inline-flex items-center text-sm hover:text-primary transition"
        >
          <FaArrowLeft className="mr-2" /> Back to Library
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Cover Image */}
        <div className="w-full">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-full rounded-2xl shadow-lg border-2 border-primary object-cover"
          />
        </div>

        {/* Game Info */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            {game.title}
          </h1>

          {/* Category + Rating */}
          <div className="flex items-center gap-4">
            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              {game.category}
            </span>
            <div className="flex items-center gap-2 text-lg">
              {renderStars(parseFloat(game.ratings))}
              <span className="text-gray-300 text-sm">({game.ratings})</span>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">{game.description}</p>

          <div className="text-sm text-gray-400">
            <strong className="text-white">Developer:</strong> {game.developer}
          </div>

          <div className="pt-4">
            <a
              href={game.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-xl hover:bg-[#eb3154] transition"
            >
              <FaDownload /> Download Game
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <section>
       <Container>
         <Newsletter/>
       </Container>
    </section>
    
    </>
  );
};

export default GameDetails;
