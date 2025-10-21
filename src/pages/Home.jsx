import React from 'react';
import Hero from '../Components/Hero/Hero';
import useGames from '../Hooks/useGames';
import Loading from './Loading';
import Error404 from './Error404';
import GameCard from '../Components/GameCard/GameCard';
import Container from '../Layout/Container';

const Home = () => {

    const { games, loading, error }  =useGames();
        if(loading){
        return <Loading/>;
       }
        if(error){
        return <Error404/>
       }


const featuredGames = games.slice(3, 6);
// console.log(featuredGames);

    return (
        <div>
            <Container>
            <Hero/>
            <section>
                <h2>Fetured Games</h2>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        featuredGames.map( game => <GameCard key={game.id} game={game}></GameCard>)
                    }
                </div>
            </section>
            </Container>
        </div>
    );
};

export default Home;