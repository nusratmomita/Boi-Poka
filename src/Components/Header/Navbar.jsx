import React from 'react';

const Navbar = () => {
    const links = 
    <>
        <li className='m-4'>Home </li>
        <li className='m-4'>Listed Books</li>
        <li className='m-4'>Pages to Read</li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <h1 className='ml-4'>Book vibe</h1>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {
                        links
                    }
                </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {
                    links
                }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn m-4">Sign In</a>
                <a className="btn">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;