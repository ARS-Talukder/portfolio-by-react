import React from 'react';
import './Projects.css';
import { SiInternetexplorer, SiGithub } from "react-icons/si";
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { useQuery } from 'react-query';
import Slide from 'react-reveal/Slide';

const Projects = () => {
    const { data: projects, isLoading: projectsLoading } = useQuery('allProject', () => fetch('projects.json').then(res => res.json()))

    if (projectsLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-4 lg:px-8' id='projects'>
            <h2 style={{ color: "#ed9d7b" }} className='text-4xl font-bold underline pt-8'>My Projects</h2>
            <p className='text-gray-500 font-bold'><small>Take a look at the frontend, backend and full-stack projects I have built or worked on for work and fun!</small></p>

            {
                projects.map(p =>
                    <div>
                        <div key={p._id} className='lg:flex px-4 py-8 lg:my-8'>
                            <Slide left>
                                <div className='p-2 lg:w-1/2 lg:flex justify-center text-center'>
                                    <div className='flex justify-center'>
                                        <img src={p.home_image} width={400} alt={p.project_name} />
                                    </div>
                                    <div className='flex justify-center'>
                                        <img src={p.home_image_2} width={200} alt={p.project_name} />
                                    </div>
                                </div>
                            </Slide>

                            <div className='flex items-center hidden lg:flex'>
                                <div style={{ backgroundColor: "#ed9d7b" }} className='h-52 w-1 border rounded-xl mx-8'></div>
                            </div>

                            <Slide right>
                                <div className='mt-3 lg:mt-0'>
                                    <h2 className='text-left text-2xl text-gray-500 font-bold'>{p.project_name}</h2>
                                    <p className='text-left text-gray-500 font-bold'>{p.project_title}</p>
                                    <p className='text-left text-gray-500'>{p.project_category}</p>
                                    <div className='text-left mt-4'>
                                        <button>
                                            <a href={p.website_link} target="_blank" rel="noreferrer">
                                                <button className='link_button'>
                                                    <span className='mr-2 text-xl' style={{ "color": "#1db5e7" }}>
                                                        <SiInternetexplorer />
                                                    </span>
                                                    <span>Website</span>
                                                </button>
                                            </a>
                                        </button>
                                    </div>

                                    <div className='text-left mt-4'>
                                        <button>
                                            <a href={p.client_side_link} target="_blank" rel="noreferrer">
                                                <button className='link_button'>
                                                    <span className='mr-2 text-2xl' style={{ "color": "#1a1e22" }}>
                                                        <SiGithub />
                                                    </span>
                                                    <span>Client Side</span>
                                                </button>
                                            </a>
                                        </button>
                                    </div>

                                    <div className='text-left mt-4'>
                                        {p.server_side_link === 'not full stack' ?
                                            <button>
                                                <label htmlFor="my-modal" className="link_button">
                                                    <span className='mr-2 text-2xl' style={{ "color": "#1a1e22" }}>
                                                        <SiGithub />
                                                    </span>
                                                    <span>Server Side</span>
                                                </label>
                                            </button>

                                            :
                                            <button>
                                                <a href={p.server_side_link} target="_blank" rel="noreferrer">
                                                    <button className='link_button'>
                                                        <span className='mr-2 text-2xl' style={{ "color": "#1a1e22" }}>
                                                            <SiGithub />
                                                        </span>
                                                        <span>Server Side</span>
                                                    </button>
                                                </a>
                                            </button>}
                                    </div>

                                    <div className='text-left mt-4'>
                                        <Link to={`/project${p._id}`}><button className='link_button'>See More</button></Link>
                                    </div>

                                </div>

                            </Slide>
                        </div>
                        <div className='flex justify-center'>
                            <div style={{ backgroundColor: "#ed9d7b" }} className='w-11/12  h-0.5 rounded-xl'></div>
                        </div>
                    </div>


                )
            }

            {/* ----------Modal----------- */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-xl text-gray-500 underline">This is not a Full Stack website</h3>
                    <p className="py-4 text-lg text-gray-500">There's no server side for this website. Because, It is just a Front-End Website</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="link_button">Okay</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Projects;