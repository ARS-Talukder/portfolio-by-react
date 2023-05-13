import React from 'react';
import { SiInternetexplorer, SiGithub } from "react-icons/si";
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import './Projects.css';
import { GoPrimitiveDot } from "react-icons/go";

const Project1 = () => {
    const project = {
        project_name: "The Golden Style",
        project_title: "This is a Men's Grooming modern website",
        project_category: "Full Stack Website",
        website_link: "https://the-golden-style.web.app/",
        client_side_link: "https://github.com/ARS-Talukder/the-golden-style-client-side",
        server_side_link: "https://github.com/ARS-Talukder/the-golden-style-server",
        images: [
            { _id: 1, img: "https://i.ibb.co/LPyzC6Z/project-the-golden-style-1.png" },
            { _id: 2, img: "https://i.ibb.co/YfDH8fb/project-the-golden-style-2.png" },
            { _id: 3, img: "https://i.ibb.co/42LR5Qn/project-the-golden-style-3.png" },
            { _id: 4, img: "https://i.ibb.co/D4CC985/project-the-golden-style-4.png" },
            { _id: 5, img: "https://i.ibb.co/x6h2ZFQ/project-the-golden-style-5.png" },
            { _id: 6, img: "https://i.ibb.co/0QQZ3df/project-the-golden-style-6.png" },
            { _id: 7, img: "https://i.ibb.co/HH8GsJK/project-the-golden-style-7.png" },
            { _id: 8, img: "https://i.ibb.co/qyf3y6p/project-the-golden-style-8.png" },
            { _id: 9, img: "https://i.ibb.co/dDmyBWs/project-the-golden-style-9.png" },
            { _id: 10, img: "https://i.ibb.co/Hh3F09C/project-the-golden-style-10.png" },
            { _id: 11, img: "https://i.ibb.co/8Ng4j7j/project-the-golden-style-11.png" }
        ],
        features: [
            { _id: 1, feature: "User Authentication has been implemented by using Firebase." },
            { _id: 2, feature: "Everyone needs to login for extra access." },
            { _id: 3, feature: "User, Barber, Manager and Chairman has different access on this site." },
            { _id: 4, feature: "User is usually the customer of this website. Customer can place appointment to selected barber." },
            { _id: 5, feature: "Customer can give review. And that is the main way to develop this grooming brand." },
            { _id: 6, feature: "All the payment method has been set up here so that customer can pay with their all type of cards." },
            { _id: 7, feature: "Barber can see all the appointments with date and also reviews to him so that he or she can improve him or herself." },
            { _id: 8, feature: "There's no way to give review by barber, manager and chairman. Because, If they get this access, they will give the false review to show the world that they are the best. That's why Customer will fall in trap." },
            { _id: 9, feature: "Manager can check all the appointments, all customers, reviews and also can add/remove barbers and services to improve the company and management." },
            { _id: 10, feature: "Chairman has all the access whatever manager has. Chairman has more access in this website. Chairman can add/remove manager for developing the company." }
        ]
    }

    return (
        <div className='p-4 relative'>
            {/* -----------------Top Section------------------- */}
            <section>
                <h2 className='text-3xl text-orange-400 font-bold underline'>{project.project_name}</h2>
                <p className='text-gray-400 font-bold my-0'>{project.project_title}</p>
                <p className='text-gray-400 mb-4 font-bold'><small>{project.project_category}</small></p>
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
            <section className='mt-8 mb-4 px-1 lg:px-24 md:px-8'>
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
                <div className=' mt-4'>
                    <button>
                        <a href={project.server_side_link} target="_blank" rel="noreferrer">
                            <button className='link_button'>
                                <span className='mr-2 text-2xl' style={{ "color": "#1a1e22" }}>
                                    <SiGithub />
                                </span>
                                <span>Server Side</span>
                            </button>
                        </a>
                    </button>
                </div>
            </section>

            {/* -----------------Link Button Section------------------- */}
            <section>
                <div className='absolute right-0 bottom-0'>
                    <Link to="/project2" className='link_button'>Next</Link>
                </div>
            </section>

        </div>
    );
};

export default Project1;