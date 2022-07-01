import React from 'react';
import TypeAnimation from 'react-type-animation';
import './Banner.css'

const Banner = () => {
    return (
        <div className='mt-10 lg:flex mx-8 justify-between' id='home'>
            <div className='lg:mt-24  lg:w-3/5'>
                <p className='text-left text-white'>My Name</p>
                <h2 className='text-left text-white text-2xl font-bold'>MD. ABDUR RAHMAN</h2>
                <h2 className='text-left text-white text-2xl font-bold'>I'M A <span className='text-orange-400 text-3xl'></span>
                    <span className='text-orange-400 text-left text-3xl font-bold'>
                        <TypeAnimation
                            cursor={false}
                            sequence={[
                                'WEB DESIGNER',
                                2000,

                                'REACT DEVELOPER',
                                2000,
                                'WEB DEVELOPER',
                                2000,
                            ]}
                            wrapper="span"
                        />
                    </span></h2>


                <p className='text-left text-white mt-2 font-bold'>I'm dedicated Web Developer. I love to take challenges. I never stop myself before making a website look beautiful & functional. The most interesting fact is I'm a passionate Guitarist also</p>

                <p className='text-left my-4'><a href='https://drive.google.com/uc?export=download&id=1vOyIblkH6pKLG-KuIqxEDJq4P4GuG97b' className='btn bg-orange-400 text-black'>Download Resume</a></p>
            </div>
            <div className='lg:mt-2 banner-img-div'>
                <img src="https://i.ibb.co/V3mTnjP/Without-background.png" alt="myPicture" />
            </div>
        </div>
    );
};

export default Banner;