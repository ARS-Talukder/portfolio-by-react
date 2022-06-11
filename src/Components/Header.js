import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = <>
        <li><a href='#home' className='font-bold'>Home</a></li>
        <li><a href='#about' className='font-bold'>About</a></li>
        <li><a href='#projects' className='font-bold'>Project</a></li>
        <li><a href='#contact' className='font-bold'>Contact</a></li>
        <li><a href='https://drive.google.com/uc?export=download&id=1FBZs6_rifYqGHihNxoPGWAQFicclUkq-' className='btn bg-orange-400'>Download Resume</a></li>

    </>
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="normal-case text-2xl text-red-500 font-bold ml-8">Portfolio</a>
            </div>
            <div className="navbar-center hidden lg:flex lg:ml-16">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;