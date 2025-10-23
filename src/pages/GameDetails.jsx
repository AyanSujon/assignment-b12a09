import React, { useState } from 'react';
import { useParams } from 'react-router';
import useGames from '../Hooks/useGames';

const GameDetails = () => {
  const { id } = useParams();
  const { games, loading, } = useGames();
  const [disabled, setDisabled] = useState(false);

  const game = games.find(p => String(p.id) === id);

  console.log(game);
  
    return (
        <div>
            Game Details
        </div>
    );
};

export default GameDetails;