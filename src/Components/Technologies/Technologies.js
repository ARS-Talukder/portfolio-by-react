import React from 'react';
import './Technologies.css';
import { DiHtml5, DiCss3, DiNodejs, DiMongodb } from "react-icons/di";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiFirebase, SiReactrouter, SiHeroku, SiNetlify, SiJsonwebtokens, SiStripe, SiAmericanairlines } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { GiFlowerEmblem, GiTwirlyFlower } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { BiCheckbox } from "react-icons/bi";
import Zoom from 'react-reveal/Zoom';

const Technologies = () => {
    return (
        <div className='px-8 tech_div'>
            <h2 style={{ color: "#ed9d7b" }} className='text-4xl font-bold underline mt-20 mb-20 pt-16'>Technologies what I know</h2>

            <div className='grid lg:grid-cols-4 gap-16 pb-32'>
                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#dd4b25", "display": "inline-block" }}><DiHtml5 /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>HTML</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#2862e9", "display": "inline-block" }}><DiCss3 /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>CSS</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#8011f5", "display": "inline-block" }}><FaBootstrap /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>Bootstrap</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#38bdf8", "display": "inline-block" }}><SiTailwindcss /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>Tailwind CSS</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#F9EA5A", "display": "inline-block" }}><GiFlowerEmblem /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>DaisyUI</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#cdb22f", "display": "inline-block" }}><TbBrandJavascript /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>JavaScript</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#5ed3f3", "display": "inline-block" }}><FaReact /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>React JS</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#f44250", "display": "inline-block" }}><SiReactrouter /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>React Router</h2>
                    </div>

                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#f94155", "display": "inline-block" }}><GiTwirlyFlower /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>React Query</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#6ea560", "display": "inline-block" }}><DiNodejs /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>Node JS</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#e3155f", "display": "inline-block" }}><SiJsonwebtokens /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>JSON Web Token</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#f7f7f7", "display": "inline-block" }}><SiExpress /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>Express JS</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#f7a00e", "display": "inline-block" }}><SiFirebase /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>Firebase</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#52a74b", "display": "inline-block" }}><DiMongodb /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>MongoDB</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#635bff", "display": "inline-block" }}><SiStripe /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>Stripe</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl text-gray-400' style={{ "display": "inline-block" }}><BsGithub /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>GitHub</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#7939cb", "display": "inline-block" }}><SiHeroku /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>Heroku</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#00baab", "display": "inline-block" }}><SiNetlify /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>Netlify</h2>
                    </div>

                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#4bf6c6", "display": "inline-block" }}><BiCheckbox /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>Render.com</h2>
                    </div>
                </Zoom>

                <Zoom>
                    <div className='border-style'>
                        <p className='text-center'><span className='text-7xl' style={{ "color": "#325fc7", "display": "inline-block" }}><SiAmericanairlines /></span></p>
                        <h2 className='text-xl text-gray-300 font-bold mt-4'>Cyclic Host</h2>
                    </div>
                </Zoom>

            </div>
        </div>
    );
};

export default Technologies;