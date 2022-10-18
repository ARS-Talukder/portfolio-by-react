import React from 'react';

const Loading = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center' style={{ "backgroundColor": "#3D4451" }}>
            <p className='text-gray-300 text-2xl'>Processing...</p>

        </div>
    );
};

export default Loading;