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
        <div className='mx-8' id='projects'>
            <h2 className='text-2xl font-bold text-red-600 underline mt-12'>Some of My Projects</h2>

            {
                projects.map(p =>
                    <div key={p._id} className='lg:flex px-4 py-8 project-div my-8 project-img' style={{ "backgroundColor": "#2f3440" }}>
                        <Slide left>
                            <div className='p-2 lg:w-1/2 border project-img'>
                                <img src={p.home_image} alt={p.project_name} />
                            </div>
                        </Slide>

                        <Slide right>
                            <div className='ml-6 mt-4'>
                                <h2 className='text-left text-xl text-orange-400 font-bold'>{p.project_name}</h2>
                                <p className='text-left text-white font-bold'>{p.project_title}</p>
                                <p className='text-left text-white'>{p.project_category}</p>
                                <div className='text-left mt-4'>
                                    <button>
                                        <a href={p.website_link} target="_blank" rel="noreferrer">
                                            <button className='btn bg-gradient-to-r from-orange-400 to-red-500 text-black'>
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
                                            <button className='btn bg-gradient-to-r from-orange-400 to-red-500 text-black'>
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
                                        <label htmlFor="my-modal" className="btn bg-gradient-to-r from-orange-400 to-red-500 text-black">
                                            <span className='mr-2 text-2xl' style={{ "color": "#1a1e22" }}>
                                                <SiGithub />
                                            </span>
                                            <span>Server Side</span>
                                        </label>
                                        :
                                        <button>
                                            <a href={p.server_side_link} target="_blank" rel="noreferrer">
                                                <button className='btn bg-gradient-to-r from-orange-400 to-red-500 text-black'>
                                                    <span className='mr-2 text-2xl' style={{ "color": "#1a1e22" }}>
                                                        <SiGithub />
                                                    </span>
                                                    <span>Server Side</span>
                                                </button>
                                            </a>
                                        </button>}
                                </div>

                                <div className='text-left mt-4'>
                                    <Link to={`/project${p._id}`} className='btn  bg-gradient-to-r from-orange-400 to-red-500 text-black'>See More</Link>
                                </div>

                            </div>
                        </Slide>

                    </div>
                )
            }

            {/* ----------Modal----------- */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">This is not a Full Stack website</h3>
                    <p className="py-4">There's no server side for this website. Because, It is just a Front-End Website</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Okay</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Projects;