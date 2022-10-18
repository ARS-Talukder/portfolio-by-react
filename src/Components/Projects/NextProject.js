import React from 'react';
import { Link } from 'react-router-dom';

const NextProject = () => {
    return (
        <div>
            <div className='flex justify-center items-center' style={{ "width": "100%", "height": "100vh" }}>
                <div>
                    <h2 className='text-3xl text-white'>My Next Project is Coming Soon</h2>
                    <div className='mt-12'>
                        <Link to="/project4" className='btn  bg-gradient-to-r from-orange-400 to-red-500 text-black'>Click to Previous Project</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NextProject;