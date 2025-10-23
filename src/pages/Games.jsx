import React from 'react';
import Container from '../Layout/Container';
import AllGameCard from '../Components/GameCard/AllGameCard';
import useGames from '../Hooks/useGames';
import Loading from './Loading';
import Error404 from './Error404';
import useTitle from '../Hooks/useTitle';

const Games = () => {
    // for changing Page title Dynamically.
    useTitle("Games");

        const { games, loading, error }  =useGames();
        if(loading){
        return <Loading/>;
       }
        if(error){
        return <Error404/>
       }


const AllGames = games;

    return (
        <div className='py-10 bg-secondary'>
           <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        AllGames.map( game => <AllGameCard key={game.id} game={game}></AllGameCard>)
                    }
                </div>
           </Container>
        </div>
    );
};

export default Games;