import React from 'react';
import Loading from '../Loading';
import { useQuery } from 'react-query';
import '../Banner/Banner.css';
import Slide from 'react-reveal/Slide';

const About = () => {
    const { data: about, isLoading: aboutLoading } = useQuery('allAbout', () => fetch('about.json').then(res => res.json()))

    if (aboutLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mx-8 mb-4' id='about'>
            <h2 style={{ color: "#ed9d7b" }} className='text-4xl font-bold underline mt-20'>About Me</h2>

            <div className='flex justify-center'>
                <div className='mt-6'>
                    {
                        about.map(a => <Slide left key={a._id}><div className='about_text'><p>{a.point}</p></div></Slide>)
                    }

                </div>
            </div>

        </div>
    );
};

export default About;