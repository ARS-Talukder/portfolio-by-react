import React, { useState } from 'react';
import './Banner.css';
import HeadShake from 'react-reveal/HeadShake';
import Pulse from 'react-reveal/Pulse';

const Banner = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setCounter(counter + 1);

    }
    return (
        <div className='pt-4 lg:flex flex-row-reverse mx-8 justify-between' id='home'>
            <Pulse>
                <div className='lg:mt-24  lg:w-3/5'>
                    <h1 className='text-2xl mb-4 lg:text-5xl text-left lg:mb-6 text-gray-500'>A Dedicated & Passionate</h1>
                    <h1 className='text-3xl my-4 lg:text-6xl text-left lg:mt-6 lg:mb-10 text-orange-400'>Frontend Developer</h1>

                    <p className='text-left my-6'><a href='https://drive.google.com/uc?export=download&id=1kVEPLPWoxERjtl7yPZBgIMnmKqIxHru8' className='resume_button'><small>DOWNLOAD RESUME</small></a></p>
                </div>
            </Pulse>

            <div className='lg:mt-2 banner-img-div'>
                <HeadShake>
                    <HeadShake spy={counter}><img onClick={handleClick} src="https://i.ibb.co/7j9zcxc/My-Photo-Without-Background-optimized.png" alt="myPicture" width={380} /></HeadShake>
                </HeadShake>
            </div>
        </div>
    );
};

export default Banner;