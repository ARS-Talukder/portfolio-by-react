import React from 'react';
import { SiInternetexplorer, SiGithub } from "react-icons/si";
import { Link } from 'react-router-dom';

const Project1 = () => {
    return (
        <div className=' p-4 project-div' style={{ "backgroundColor": "#464b55" }}>
            <div>
                <h2 className='text-3xl text-orange-400 font-bold'>ARS Car Parts</h2>
                <p className=' text-white text-xl font-bold my-2'>A modern website for the parts of car management</p>
                <p className=' text-white text-xl my-2'>This is Full Stack Website</p>
            </div>
            <div className='p-2 lg:w-1/2 border project-img mx-auto my-2'>
                <img src="https://i.ibb.co/dPzpgzt/project-1.png" alt="project-1" />
            </div>
            <div className='p-2 lg:w-1/2 border project-img mx-auto my-2'>
                <img src="https://i.ibb.co/vh0398Q/project-1-d.png" alt="project-1" />
            </div>
            <div className='p-2 lg:w-1/2 border project-img mx-auto my-2'>
                <img src="https://i.ibb.co/J2bjfRy/project-1-e.png" alt="project-1" />
            </div>
            <div className='ml-4 mt-8 relative'>


                <p className=' text-red-600 font-bold text-xl text-2xl my-2 underline'>Features Of this Site</p>

                <div className='flex justify-center'>
                    <div>
                        <li className='text-white text-left'>On this website, user can place order and can see own profile.</li>
                        <li className='text-white text-left'>Admin can add product, delete product, manage order. </li>

                        <li className='text-white text-left'>User can give review of products</li>
                        <li className='text-white text-left'>User also can see own profile and update that</li>
                        <li className='text-white text-left'>User Authentication has been implemented by using Firebase</li>
                    </div>
                </div>

                <div className=' mt-4 my-2'>
                    <button><a href="https://ars-car-parts.web.app/" target="_blank"><button className='btn bg-gradient-to-r from-orange-400 to-red-500 text-black'>
                        <span className='mr-2 text-xl' style={{ "color": "#1db5e7" }}><SiInternetexplorer /></span>
                        <span>Website</span>
                    </button></a></button>
                </div>
                <div className=' mt-4'>
                    <button><a href="https://github.com/ARS-Talukder/ars-car-parts-client-side" target="_blank"><button className='btn bg-gradient-to-r from-orange-400 to-red-500 text-black'>
                        <span className='mr-2 text-2xl' style={{ "color": "#1a1e22" }}><SiGithub /></span>
                        <span>Client Side</span>
                    </button></a></button>
                </div>
                <div className=' mt-4'>
                    <button><a href="https://github.com/ARS-Talukder/ars-car-parts-server-side" target="_blank"><button className='btn bg-gradient-to-r from-orange-400 to-red-500 text-black'>
                        <span className='mr-2 text-2xl' style={{ "color": "#1a1e22" }}><SiGithub /></span>
                        <span>Server Side</span>
                    </button></a></button>
                </div>
                <div className='absolute right-0 bottom-0'>
                    <Link to="/project2" className='btn  bg-gradient-to-r from-orange-400 to-red-500 text-black'>Next</Link>
                </div>





            </div>
        </div>
    );
};

export default Project1;