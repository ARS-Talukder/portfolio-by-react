import React from 'react';
import './About.css';
import { DiHtml5,DiCss3,DiNodejs,DiMongodb } from "react-icons/di";
import { FaBootstrap,FaReact } from "react-icons/fa";
import { SiTailwindcss,SiExpress,SiFirebase } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const About = () => {

    return (
        <div className='mx-8 mb-4' id='about'>
            <h2 className='text-2xl font-bold text-red-600 underline mt-12'>About Me</h2>
            
            <li className='text-white  text-xl mt-4'>I am a very good Learner</li>
            <li className='text-white  text-xl'>I can learn a new software or other subject very quickly</li>
            <li className='text-white  text-xl'>My Communication Skill is not so poor. I can communicate with any type of person</li>
            <li className='text-white  text-xl'>The main fact is, I love MYSELF </li>
            
            
            <h3 className='text-xl font-bold mt-4 underline text-green-600'>Technologies what I know</h3>
            <div className='grid lg:grid-cols-4 gap-16 mt-12'>
                <div className='border-style'>
                    
                    <span className='text-6xl' style={{"color":"#dd4b25","display":"inline-block"}}><DiHtml5/></span>
                    <h2 className='text-xl text-white mt-4'>HTML</h2>
                </div>
                <div className='border-style'>
                    
                    <p className='text-center'><span className='text-6xl' style={{"color":"#2862e9","display":"inline-block"}}><DiCss3/></span></p>
                    <h2 className='text-xl text-white mt-4'>CSS</h2>
                </div>
                <div className='border-style'>
                    
                    <p className='text-center'><span className='text-6xl' style={{"color":"#8011f5","display":"inline-block"}}><FaBootstrap/></span></p>
                    <h2 className='text-xl text-white mt-4'>Bootstrap</h2>
                </div>
                <div className='border-style'>
                    
                    <p className='text-center'><span className='text-6xl' style={{"color":"#38bdf8","display":"inline-block"}}><SiTailwindcss/></span></p>
                    <h2 className='text-xl text-white mt-4'>Tailwind CSS</h2>
                </div>
                <div className='border-style'>
                    
                    <p className='text-center'><span className='text-6xl' style={{"color":"#cdb22f","display":"inline-block"}}><TbBrandJavascript/></span></p>
                    <h2 className='text-xl text-white mt-4'>JavaScript</h2>
                </div>
                <div className='border-style'>
                    
                    <p className='text-center'><span className='text-6xl' style={{"color":"#5ed3f3","display":"inline-block"}}><FaReact/></span></p>
                    <h2 className='text-xl text-white mt-4'>React JS</h2>
                </div>
                <div className='border-style'>
                    
                    <p className='text-center'><span className='text-6xl' style={{"color":"#6ea560","display":"inline-block"}}><DiNodejs/></span></p>
                    <h2 className='text-xl text-white mt-4'>Node JS</h2>
                </div>
                <div className='border-style'>
                    
                    <p className='text-center'><span className='text-6xl' style={{"color":"#f7f7f7","display":"inline-block"}}><SiExpress/></span></p>
                    <h2 className='text-xl text-white mt-4'>Express JS</h2>
                </div>
                <div className='border-style'>
                    
                    <p className='text-center'><span className='text-6xl' style={{"color":"#f7a00e","display":"inline-block"}}><SiFirebase/></span></p>
                    <h2 className='text-xl text-white mt-4'>Firebase</h2>
                </div>
                <div className='border-style'>
                    
                    <p className='text-center'><span className='text-6xl' style={{"color":"#52a74b","display":"inline-block"}}><DiMongodb/></span></p>
                    <h2 className='text-xl text-white mt-4'>MongoDB</h2>
                </div>
            </div>
            
        </div>
    );
};

export default About;