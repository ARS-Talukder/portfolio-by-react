import React from 'react';
import { SiInternetexplorer, SiGithub } from "react-icons/si";
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import './Projects.css';
import { GoPrimitiveDot } from "react-icons/go";

const Project2 = () => {
    const project = {
        project_name: "Shop Online",
        project_title: "E-commerce Website",
        project_category: "Full Stack Website",
        website_link: "https://shop-online0.netlify.app/",
        client_side_link: "https://github.com/ARS-Talukder/shop_online_client_side",
        server_side_link: "https://github.com/ARS-Talukder/shop_online_server_side",
        images: [
            { _id: 1, img: "https://i.ibb.co.com/YkrCsFs/Shop-online-1.png" },
            { _id: 2, img: "https://i.ibb.co.com/bXK5bXw/Shop-online-2.png" },
            { _id: 3, img: "https://i.ibb.co.com/TrTp9fX/Shop-online-3.png" },
            { _id: 4, img: "https://i.ibb.co.com/KWpF16y/Shop-online-4.png" },
            { _id: 5, img: "https://i.ibb.co.com/CHk9jtb/Shop-online-5.png" },
            { _id: 6, img: "https://i.ibb.co.com/ypPN0Sq/Shop-online-6.png" },
            { _id: 7, img: "https://i.ibb.co.com/prrk0G0/Shop-online-7.png" },
            { _id: 8, img: "https://i.ibb.co.com/wSMhRNt/Shop-online-8.png" },
            { _id: 9, img: "https://i.ibb.co.com/cwdJY4j/Shop-online-9.png" }
        ],
        features: [
            { _id: 1, feature: "User Authentication has been implemented by using Firebase." },
            { _id: 2, feature: "Customers can place order without any hassle like register/login" },
            { _id: 3, feature: "Customers can see their order details from dashboard. Dashboard will be visible when customers'll login in the site" },
            { _id: 4, feature: "Admin can see all the orders with date & other information also can see all the customers information." },
            { _id: 5, feature: "Admin can add/remove products & categories." },
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
                <div className='absolute left-0 bottom-0'>
                    <Link to="/project1" className='link_button'>Back</Link>
                </div>
                <div className='absolute right-0 bottom-0'>
                    <Link to="/project3" className='link_button'>Next</Link>
                </div>
            </section>

        </div>
    );
};

export default Project2;