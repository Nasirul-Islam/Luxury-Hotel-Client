import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import SocialIcon from '../SocialIcon/SocialIcon';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            <SocialIcon></SocialIcon>
            <Footer></Footer>
        </div>
    );
};

export default Home;