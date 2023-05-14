import React from 'react';
import ReactWhatsapp from 'react-whatsapp';
import { FaArrowUp } from "react-icons/fa";
import Zoom from 'react-reveal/Zoom';

const LetsChat = () => {
    return (
        <div className='mt-20 mb-1 flex justify-end'>
            <div>
                <ReactWhatsapp className='border border-4 border-green-400 rounded-3xl hover:border-green-500 mb-4' number="+880 1629 396785" message="Hello, MD. ABDUR RAHMAN. I want to get in touch with you.">
                    <img src="https://i.ibb.co/p67tz8w/Chat.png" width={100} alt="chat" />
                </ReactWhatsapp>
                <div className='flex justify-end'>
                    <a href='/#header'>
                        <Zoom>
                            <FaArrowUp className='text-3xl bg-gray-400 text-red-500 border-2 border-red-500'></FaArrowUp>
                        </Zoom>
                    </a>

                </div>
            </div>

        </div>
    );
};

export default LetsChat;