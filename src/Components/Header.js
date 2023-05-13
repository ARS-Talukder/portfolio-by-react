import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = <>
        <li><Link to='/' className='font-bold text-white'><small>HOME</small></Link></li>
        <li><a href='/#about' className='font-bold text-white'><small>ABOUT</small></a></li>
        <li><a href='/#projects' className='font-bold text-white'><small>PROJECTS</small></a></li>
        <li><Link to='/blogs' className='font-bold text-white'><small>BLOGS</small></Link></li>
        <li><a className='font-bold text-white' href='https://drive.google.com/file/d/1kVEPLPWoxERjtl7yPZBgIMnmKqIxHru8/view?usp=sharing'><small><em>RESUME</em></small></a></li>
        <li><a href='/#contact' className='font-bold text-white'><small>CONTACT</small></a></li>

    </>
    return (
        <div className="navbar text-neutral-content h-14" style={{ "backgroundColor": "#ed9d7b" }} id='header'>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-44 text-center" style={{ "backgroundColor": "#ed9d7b" }}>
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="lg:ml-8 mt-1">
                    <img className='w-52' src="https://i.ibb.co/G7dYDLb/signature.png" alt="signature" />
                </Link>
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