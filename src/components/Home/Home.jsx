import React from 'react';
import WhyBook from '../WhyBook/WhyBook';
import HeroBanner from '../HeroBanner/HeroBanner';
import PopularRoutes from '../PopularRoutes/PopularRoutes';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
           <PopularRoutes></PopularRoutes>
            <WhyBook></WhyBook>

        </div>
    );
};

export default Home;