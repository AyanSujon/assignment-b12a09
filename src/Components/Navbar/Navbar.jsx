import React, { useContext } from 'react';
import Container from '../../Layout/Container';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebase.config';

const Navbar = () => {
  const { user, setUser, loading, setLoading } =
    useContext(AuthContext);
  console.log(user);


  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };










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


 {loading ? (
          <p>loading...</p>
        ) : user ? (
          <div className="text-center space-y-3">
            <button
              className="btn"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="h-[40px] w-[40px] rounded-full mx-auto"
                alt=""
              />
            </button>

            <div
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="text-white/80">{user?.email}</p>
              <button onClick={handleSignout} className="my-btn">
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <Link to={"/signin"}>Sign in</Link>
          </button>
        )}











                    {/* <Link to={"/signin"}  className={"btn bg-primary hover:bg-[#eb3154] text-white"}>Sign in</Link> */}
                </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;