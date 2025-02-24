import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Mailer from '../Mailer/Mailer';
import Projects from '../Projects/Projects';
import Technologies from '../Technologies/Technologies';
import Footer from './Footer';
import ContactOthers from '../Mailer/ContactOthers';

const Home = () => {
    return (
        <div className='bg-white'>
            <Banner></Banner>
            <About></About>
            <Technologies></Technologies>
            <Projects></Projects>
            <Mailer></Mailer>
            <ContactOthers></ContactOthers>
            <Footer></Footer>
        </div>
    );
};

export default Home;