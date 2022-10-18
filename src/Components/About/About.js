import React from 'react';
import Loading from '../Loading';
import { useQuery } from 'react-query';

const About = () => {
    const { data: about, isLoading: aboutLoading } = useQuery('allAbout', () => fetch('about.json').then(res => res.json()))
    
    if (aboutLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mx-8 mb-4' id='about'>
            <h2 className='text-2xl font-bold text-red-600 underline mt-20'>About Me</h2>

            <div className='flex justify-center'>
                <div className='mt-4'>
                    {
                        about.map(a=><li key={a._id} className='text-gray-200 text-xl text-left'>{a.point}</li>)
                    }
                </div>
            </div>

        </div>
    );
};

export default About;