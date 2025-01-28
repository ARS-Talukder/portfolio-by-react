import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div>
            <div className='flex justify-center'><div className='w-2/3 h-0.5 bg-black rounded-2xl'></div></div>
            <div className='flex justify-center items-center mt-2 mb-12'>
                <p className='font-bold'>© Copyright {year}</p>
                <p className='mx-8'>MD. ABDUR RAHMAN</p>
                <p>All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;