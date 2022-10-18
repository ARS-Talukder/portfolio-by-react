import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Mailer from '../Mailer/Mailer';
import Projects from '../Projects/Projects';
import Technologies from '../Technologies/Technologies';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Technologies></Technologies>
            <Projects></Projects>
            <Mailer></Mailer>
            <Footer></Footer>
        </div>
    );
};

export default Home;