import React from 'react';
import { SiInternetexplorer, SiGithub } from "react-icons/si";
import { Link } from 'react-router-dom';

const Project3 = () => {

    return (
        <div className=' p-4 project-div' style={{ "backgroundColor": "#464b55" }}>
            <div>
                <h2 className='text-3xl text-orange-400 font-bold'>Smile Dental Care</h2>
                <p className=' text-white text-xl font-bold my-2'>A modern website for dental care and patient management</p>
                <p className=' text-white text-xl my-2'>This is Front End Website</p>
            </div>
            <div className='p-2 lg:w-1/2 border project-img mx-auto my-2'>
                <img src="https://i.ibb.co/27hm13g/project-3.png" alt="project-1" />
            </div>
            <div className='p-2 lg:w-1/2 border project-img mx-auto my-2'>
                <img src="https://i.ibb.co/tBq7W31/project-3-b.png" alt="project-1" />
            </div>
            <div className='p-2 lg:w-1/2 border project-img mx-auto my-2'>
                <img src="https://i.ibb.co/7k5Y1g8/project-3-c.png" alt="project-1" />
            </div>
            <div className='ml-4 mt-8 relative'>

                <p className=' text-red-600 font-bold text-xl text-2xl my-2 underline'>Features Of this Site</p>

                <div className='flex justify-center'>
                    <div>
                        <li className='text-white text-left'>Firebase Authentication has been implemented.</li>
                        <li className='text-white text-left'>Only user can take appointment. </li>

                        <li className='text-white text-left'>Patients are users on this website</li>
                    </div>
                </div>


                <div className=' mt-4 my-2'>
                    <button><a href="https://assignment-10-5a266.web.app/" target="_blank"><button className='btn bg-gradient-to-r from-orange-400 to-red-500 text-black'>
                        <span className='mr-2 text-xl' style={{ "color": "#1db5e7" }}><SiInternetexplorer /></span>
                        <span>Website</span>
                    </button></a></button>
                </div>
                <div className=' mt-4'>
                    <button><a href="https://github.com/ARS-Talukder/smile-dental-care" target="_blank"><button className='btn bg-gradient-to-r from-orange-400 to-red-500 text-black'>
                        <span className='mr-2 text-2xl' style={{ "color": "#1a1e22" }}><SiGithub /></span>
                        <span>Client Side</span>
                    </button></a></button>
                </div>

                <div className='absolute right-0 bottom-0'>
                    <Link to="/nextProject" className='btn  bg-gradient-to-r from-orange-400 to-red-500 text-black'>Next</Link>
                </div>
                <div className='absolute left-0 bottom-0'>
                    <Link to="/project2" className='btn  bg-gradient-to-r from-orange-400 to-red-500 text-black'>Back</Link>
                </div>





            </div>
        </div>
    );
};

export default Project3; <h2>Project 3</h2>