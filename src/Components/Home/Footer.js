import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='bg-black h-16 flex justify-center items-center'>
            <p className='text-gray-400'><small>Copyright © {year}</small></p>
        </div>
    );
};

export default Footer;