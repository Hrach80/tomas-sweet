import React from 'react';
import Hero from '../../components/Hero/Hero';
import CustomCakes from '../../components/CustomCakes/CustomCakes';
import Macarons from '../../components/Macarons/Macarons';
import './Home.scss';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <CustomCakes />
            <Macarons />
        </div>
    );
};

export default Home;