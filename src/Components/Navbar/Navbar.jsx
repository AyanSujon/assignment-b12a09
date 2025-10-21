import React from 'react';
import Container from '../../Layout/Container';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
    <li><NavLink to={"/"} className={"font-semebold"}>Home</NavLink></li>
    <li><NavLink to={"/profile"} className={"font-semebold"}>Profile</NavLink></li>
    <li><NavLink to={"/games"}className={"font-semebold"}>Games</NavLink></li>
   </>
    return (
        <nav className='shadow-sm hover-black'>
            <Container>
                <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                    </ul>
                    </div>
                    <Link to={"/"} className=" text-xl font-bold text-primary">GameHub</Link>
                </div>

                <div className="navbar-end">
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                    <Link to={"/signin"}  className={"btn bg-primary hover:bg-[#eb3154] text-white"}>Sign in</Link>
                </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;