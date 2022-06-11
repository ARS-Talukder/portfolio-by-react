import React from 'react';
import './Projects.css';
import { SiInternetexplorer,SiGithub } from "react-icons/si";

const Projects = () => {
    return (
        <div className='mx-8' id='projects'>
            <h2 className='text-2xl font-bold text-red-600 underline mt-12 mb-4'>Some of My Projects</h2>
            <div className='lg:flex p-4 project-div' style={{"backgroundColor":"#464b55"}}>
                <div className='p-2 lg:w-1/2 border project-img'>
                    <img src="https://i.ibb.co/dPzpgzt/project-1.png" alt="project-1" />
                </div>
                <div className='ml-4 mt-4'>
                    <h2 className='text-left text-xl text-orange-400 font-bold'>ARS Car Parts</h2>
                    <p className='text-left text-white font-bold'>A modern website for the parts of car management</p>
                    <p className='text-left text-white'>This is Full Stack Website</p>
                    <div className='text-left mt-4'>
                        <button><a href="https://ars-car-parts.web.app/" target="_blank"><button className='btn bg-orange-400'>
                            <span className='mr-2 text-xl' style={{"color":"#1db5e7"}}><SiInternetexplorer /></span>
                            <span>Website</span>
                        </button></a></button>
                    </div>
                    <div className='text-left mt-4'>
                        <button><a href="https://github.com/ARS-Talukder/ars-car-parts-client-side" target="_blank"><button className='btn bg-orange-400'>
                            <span className='mr-2 text-2xl' style={{"color":"#1a1e22"}}><SiGithub /></span>
                            <span>Client Side</span>
                        </button></a></button>
                    </div>
                    <div className='text-left mt-4'>
                        <button><a href="https://github.com/ARS-Talukder/ars-car-parts-server-side" target="_blank"><button className='btn bg-orange-400'>
                            <span className='mr-2 text-2xl' style={{"color":"#1a1e22"}}><SiGithub /></span>
                            <span>Server Side</span>
                        </button></a></button>
                    </div>





                </div>
            </div>
            <div className='lg:flex p-4 project-div mt-8' style={{"backgroundColor":"#464b55"}}>
                <div className='p-2 lg:w-1/2 border project-img'>
                    <img src="https://i.ibb.co/yqd79cQ/project-2.png" alt="project-2" />
                </div>
                <div className='ml-4 mt-4'>
                    <h2 className='text-left text-xl text-orange-400 font-bold'>Electronics Warehouse</h2>
                    <p className='text-left text-white font-bold'>A website for Electronics Gadgets stock management</p>
                    <p className='text-left text-white'>This is also a Full Stack Website</p>
                    <div className='text-left mt-4'>
                        <button><a href="https://warehouse-6cdc6.web.app/" target="_blank"><button className='btn bg-orange-400'>
                            <span className='mr-2 text-xl' style={{"color":"#1db5e7"}}><SiInternetexplorer /></span>
                            <span>Website</span>
                        </button></a></button>
                    </div>
                    <div className='text-left mt-4'>
                        <button><a href="https://github.com/ARS-Talukder/warehouse-client-side" target="_blank"><button className='btn bg-orange-400'>
                            <span className='mr-2 text-2xl' style={{"color":"#1a1e22"}}><SiGithub /></span>
                            <span>Client Side</span>
                        </button></a></button>
                    </div>
                    <div className='text-left mt-4'>
                        <button><a href="https://github.com/ARS-Talukder/warehouse-serverr-side" target="_blank"><button className='btn bg-orange-400'>
                            <span className='mr-2 text-2xl' style={{"color":"#1a1e22"}}><SiGithub /></span>
                            <span>Server Side</span>
                        </button></a></button>
                    </div>





                </div>
            </div>
            <div className='lg:flex p-4 project-div mt-8' style={{"backgroundColor":"#464b55"}}>
                <div className='p-2 lg:w-1/2 border project-img'>
                    <img src="https://i.ibb.co/27hm13g/project-3.png" alt="project-3" />
                </div>
                <div className='ml-4 mt-4'>
                    <h2 className='text-left text-xl text-orange-400 font-bold'>Electronics Warehouse</h2>
                    <p className='text-left text-white font-bold'>A modern website for dental care and patient management</p>
                    <p className='text-left text-white'>This is just Front-End Website</p>
                    <div className='text-left mt-4'>
                        <button><a href="https://assignment-10-5a266.web.app/home" target="_blank"><button className='btn bg-orange-400'>
                            <span className='mr-2 text-xl' style={{"color":"#1db5e7"}}><SiInternetexplorer /></span>
                            <span>Website</span>
                        </button></a></button>
                    </div>
                    <div className='text-left mt-4'>
                        <button><a href="https://github.com/ARS-Talukder/smile-dental-care" target="_blank"><button className='btn bg-orange-400'>
                            <span className='mr-2 text-2xl' style={{"color":"#1a1e22"}}><SiGithub /></span>
                            <span>Client SIde</span>
                        </button></a></button>
                    </div>
                   





                </div>
            </div>
        </div>
    );
};

export default Projects;