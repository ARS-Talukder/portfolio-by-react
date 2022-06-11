import React from 'react';
import { DiHtml5 } from "react-icons/di";

const Tech = (props) => {
    const {name,icon}=props.tech
    return (
        <div>
            <span className='text-7xl' style={{ "color": "#dd4b25" }}><icon /></span>
            <h2 className='text-xl text-white'>{name}</h2>
        </div>
    );
};

export default Tech;