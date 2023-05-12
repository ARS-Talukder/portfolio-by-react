import React from 'react';
import { SiInternetexplorer, SiGithub } from "react-icons/si";
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

const Project2 = () => {
    const project = {
        project_name: "ARS Car Parts",
        project_title: "A modern website for the parts of car management",
        project_category: "This is Full Stack Website",
        website_link: "https://ars-car-parts.web.app/",
        client_side_link: "https://github.com/ARS-Talukder/ars-car-parts-client-side",
        server_side_link: "https://github.com/ARS-Talukder/ars-car-parts-server-side",
        images: [
            { _id: 1, img: "https://i.ibb.co/dPzpgzt/project-1.png" },
            { _id: 2, img: "https://i.ibb.co/vh0398Q/project-1-d.png" },
            { _id: 3, img: "https://i.ibb.co/J2bjfRy/project-1-e.png" }
        ],
        features: [
            { _id: 1, feature: "On this website, user can place order and can see own profile." },
            { _id: 2, feature: "Admin can add product, delete product, manage order. " },
            { _id: 3, feature: "User can give review of products." },
            { _id: 4, feature: "User also can see own profile and update that." },
            { _id: 5, feature: "User Authentication has been implemented by using Firebase." }
        ]
    }

    return (
        <div className='p-4 relative'>
            {/* -----------------Top Section------------------- */}
            <section>
                <h2 className='text-2xl text-orange-400 font-bold underline'>{project.project_name}</h2>
                <p className='text-gray-200 font-bold my-0'>{project.project_title}</p>
                <p className='text-gray-200 my-0'><small>{project.project_category}</small></p>
            </section>

            {/* -----------------Image Section------------------- */}
            <section>
                {project.images.map(i =>
                    <Slide left key={i._id}>
                        <div className='p-2 lg:w-1/2 border project-img mx-auto my-2'>
                            <img src={i.img} alt="project_picture" />
                        </div>
                    </Slide>
                )
                }
            </section>

            {/* -----------------Feature Section------------------- */}
            <section className='mt-8 mb-4'>
                <p className=' text-red-600 font-bold text-xl text-2xl my-2 underline'>Features Of this Site</p>
                <div className='flex justify-center'>
                    <div>
                        {
                            project.features.map(f => <li key={f._id} className='text-white text-left'>{f.feature}</li>)
                        }
                    </div>
                </div>
            </section>

            {/* -----------------Button Section------------------- */}
            <section className='ml-4 mt-8 relative'>
                <div className='mt-4 my-2'>
                    <button>
                        <a href={project.website_link} target="_blank" rel="noreferrer">
                            <button className='btn bg-gradient-to-r from-orange-400 to-red-500 text-black'>
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
                            <button className='btn bg-gradient-to-r from-orange-400 to-red-500 text-black'>
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
                            <button className='btn bg-gradient-to-r from-orange-400 to-red-500 text-black'>
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
                <div className='absolute left-0 bottom-0'>
                    <Link to="/project1" className='btn  bg-gradient-to-r from-orange-400 to-red-500 text-black'>Back</Link>
                </div>
                <div className='absolute right-0 bottom-0'>
                    <Link to="/project3" className='btn  bg-gradient-to-r from-orange-400 to-red-500 text-black'>Next</Link>
                </div>
            </section>

        </div>
    );
};

export default Project2;