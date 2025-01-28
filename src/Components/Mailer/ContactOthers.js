import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const ContactOthers = () => {
    return (
        <div className='pt-0'>
            <div className='flex justify-center items-center'>
                {/* ----------Facebook---------- */}
                <p className='mx-2'>
                    <a href="https://www.facebook.com/ars.talukder.shadhin/" target="_blank" rel="noreferrer">
                        <span className='text-4xl mx-4 hover:text-5xl' style={{ "color": "#0878e4", "width": "auto" }}>
                            <FaFacebook></FaFacebook>
                        </span></a>
                </p>
                {/* ----------Github---------- */}
                <p className='mx-2'>
                    <a href="https://github.com/ARS-Talukder" target="_blank" rel="noreferrer">
                        <span className='text-4xl hover:text-5xl' style={{ "color": "#1a1e22" }}>
                            <SiGithub />
                        </span>
                    </a>
                </p>
                {/* ----------LinkedIn---------- */}
                <p className='mx-2'>
                    <a href="https://www.linkedin.com/in/md-abdur-rahman-20339a241/" target="_blank" rel="noreferrer">
                        <span className='text-5xl hover:text-6xl' style={{ "color": "#0a66c2" }}>
                            <TiSocialLinkedinCircular />
                        </span>
                    </a>
                </p>
                {/* ----------Call---------- */}
                <p className='mx-2'>
                    <a href="tel:+880 1629 396785" rel="noreferrer">
                        <span className='text-4xl hover:text-5xl'>
                            <FiPhoneCall />
                        </span>
                    </a>
                </p>
                {/* ----------Gmail---------- */}
                <p className='mx-2'>
                    <a href="mailto:abdurrahman1813007@gmail.com" rel="noreferrer">
                        <span className='text-4xl hover:text-5xl' style={{ "color": "#d32b25" }}>
                            <SiGmail />
                        </span>
                    </a>
                </p>
            </div>

            <div className='mb-8'>
                <p>+880 1629-396785</p>
                <p>abdurrahman1813007@gmail.com</p>
                <p>Shyamoli, Dhaka, Bangladesh</p>
            </div>
        </div>



    );
};

export default ContactOthers;