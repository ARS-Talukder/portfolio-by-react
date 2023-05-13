import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const ContactOthers = () => {
    return (
        <div className='flex justify-center items-center h-8 mt-1 pt-0'>
            {/* ----------Facebook---------- */}
            <p className='mx-4'>
                <a href="https://www.facebook.com/ars.talukder.shadhin/" target="_blank" rel="noreferrer">
                    <span className='text-4xl mx-4' style={{ "color": "#0878e4", "width": "auto" }}>
                        <FaFacebook></FaFacebook>
                    </span></a>
            </p>
            {/* ----------Github---------- */}
            <p className='mx-4'>
                <a href="https://github.com/ARS-Talukder" target="_blank" rel="noreferrer">
                    <span className='text-4xl' style={{ "color": "#1a1e22" }}>
                        <SiGithub />
                    </span>
                </a>
            </p>
            {/* ----------LinkedIn---------- */}
            <p className='mx-4'>
                <a href="https://www.linkedin.com/in/md-abdur-rahman-20339a241/" target="_blank" rel="noreferrer">
                    <span className='text-5xl' style={{ "color": "#0a66c2" }}>
                        <TiSocialLinkedinCircular />
                    </span>
                </a>
            </p>
            {/* ----------Call---------- */}
            <p className='mx-4'>
                <a href="tel:+880 1629 396785" rel="noreferrer">
                    <span className='text-4xl'>
                        <FiPhoneCall />
                    </span>
                </a>
            </p>
            {/* ----------Gmail---------- */}
            <p className='mx-4'>
                <a href="mailto:abdurrahman1813007@gmail.com" rel="noreferrer">
                    <span className='text-4xl' style={{ "color": "#d32b25" }}>
                        <SiGmail />
                    </span>
                </a>
            </p>
        </div>


    );
};

export default ContactOthers;