import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";

const Footer = () => {
    return (
        <div className='mt-8' style={{"bottom":"0"}}>
            <p className='text-white'>Copyright © 2022</p>
            <p className='text-white'>Enayetpur, Sirajganj, Rajshahi, Bangladesh</p>
            <p className='text-white'>All Rights are Reserved</p>
            <div className='flex justify-center items-center mt-0 pt-0'>
                <p className='mx-2'><a href="https://www.facebook.com/ars.talukder.shadhin/" target="_blank"><span className='text-4xl mx-2' style={{ "color": "#0878e4", "width": "auto" }}><FaFacebook></FaFacebook></span></a></p>
                <p className='mx-2'><a href="https://github.com/ARS-Talukder" target="_blank">
                    <span className=' text-4xl' style={{ "color": "#1a1e22" }}><SiGithub /></span>
                </a></p>
                <p className='mx-2'><a href="https://www.linkedin.com/in/md-abdur-rahman-20339a241/" target="_blank">
                    <span className=' text-4xl' style={{ "color": "#0a66c2" }}><ImLinkedin2 /></span>
                </a></p>

            </div>

        </div>
    );
};

export default Footer;