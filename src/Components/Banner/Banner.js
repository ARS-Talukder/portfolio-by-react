import React from 'react';
import TypeAnimation from 'react-type-animation';
import './Banner.css'

const Banner = () => {
    return (
        <div className='pt-8 lg:flex flex-row-reverse mx-8 justify-between' id='home'>
            <div className='lg:mt-24  lg:w-3/5'>
                <h1 className='text-2xl mb-4 lg:text-5xl text-left lg:mb-6'>A Dedicated & Passionate</h1>
                <h1 className='text-3xl my-4 lg:text-6xl text-left lg:mt-6 lg:mb-10 text-orange-400'>Web Developer</h1>

                <p className='text-left my-6'><a href='https://drive.google.com/uc?export=download&id=1kVEPLPWoxERjtl7yPZBgIMnmKqIxHru8' className='resume_button'><small>DOWNLOAD RESUME</small></a></p>
            </div>

            <div className='lg:mt-2 banner-img-div'>
                <img src="https://i.ibb.co/j3tHGhy/My-Photo-Without-Background.png" alt="myPicture" width={380} />
            </div>
        </div>
    );
};

export default Banner;