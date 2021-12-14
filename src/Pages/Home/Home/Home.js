import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import SocialIcon from '../SocialIcon/SocialIcon';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h1>this is home</h1>
            <SocialIcon></SocialIcon>
            <Footer></Footer>
        </div>
    );
};

export default Home;