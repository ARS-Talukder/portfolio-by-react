import React from 'react';
import { SiInternetexplorer, SiGithub } from "react-icons/si";
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import './Projects.css';
import { GoPrimitiveDot } from "react-icons/go";

const Project6 = () => {
    const project = {
        project_name: "Smile Dental Care",
        project_title: "A modern website for dental care and patient management",
        project_category: "This is Front End Website",
        website_link: "https://assignment-10-5a266.web.app/",
        client_side_link: "https://github.com/ARS-Talukder/smile-dental-care",
        images: [
            { _id: 1, img: "https://i.ibb.co/27hm13g/project-3.png" },
            { _id: 2, img: "https://i.ibb.co/tBq7W31/project-3-b.png" },
            { _id: 3, img: "https://i.ibb.co/7k5Y1g8/project-3-c.png" }
        ],
        features: [
            { _id: 1, feature: "Firebase Authentication has been implemented." },
            { _id: 2, feature: "Only user can take appointment." },
            { _id: 3, feature: "Patients are users on this website." }
        ]
    }

    return (
        <div className='p-4 relative'>
            {/* -----------------Top Section------------------- */}
            <section>
                <h2 className='text-3xl text-orange-400 font-bold underline'>{project.project_name}</h2>
                <p className='text-gray-400 font-bold my-0'>{project.project_title}</p>
                <p className='text-gray-400 font-bold mb-0'><small>{project.project_category}</small></p>
            </section>

            {/* -----------------Image Section------------------- */}
            <section className='grid lg:grid-cols-2 gap-10 lg:px-12'>
                {project.images.map(i =>
                    <Slide left key={i._id}>
                        <div className='p-2 lg:w-full border border-2 rounded-md mx-auto'>
                            <img src={i.img} alt="project_picture" />
                        </div>
                    </Slide>
                )
                }
            </section>

            {/* -----------------Feature Section------------------- */}
            <section className='mt-8 mb-4'>
                <p style={{ color: "#ed9d7b" }} className='text-4xl font-bold underline my-2'>Features Of this Site</p>
                <div className='flex justify-center'>
                    <div>
                    {
                            project.features.map(f =>
                                <Slide left key={f._id}>
                                    <div className='project_text'>
                                        <GoPrimitiveDot className='text-white mt-1 mr-2'></GoPrimitiveDot>
                                        <p>{f.feature}</p>
                                    </div>
                                </Slide>)
                        }
                    </div>
                </div>
            </section>

            {/* -----------------Button Section------------------- */}
            <section className='ml-4 mt-8 relative'>
                <div className='mt-4 my-2'>
                    <button>
                        <a href={project.website_link} target="_blank" rel="noreferrer">
                            <button className='link_button'>
                                <span className='mr-2 text-xl' style={{ "color": "#1db5e7" }}>
                                    <SiInternetexplorer />
                                </span>
                                <span>Website</span>
                            </button>
                        </a>
                    </button>
                </div>
                <div className=' mt-4'>
                    <button>
                        <a href={project.client_side_link} target="_blank" rel="noreferrer">
                            <button className='link_button'>
                                <span className='mr-2 text-2xl' style={{ "color": "#1a1e22" }}>
                                    <SiGithub />
                                </span>
                                <span>Client Side</span>
                            </button>
                        </a>
                    </button>
                </div>
            </section>

            {/* -----------------Link Button Section------------------- */}
            <section>
                <div className='absolute left-0 bottom-0'>
                    <Link to="/project5" className='link_button'>Back</Link>
                </div>
                <div className='absolute right-0 bottom-0'>
                    <Link to="/nextProject" className='link_button'>Next</Link>
                </div>
            </section>

        </div>
    );
};

export default Project6;