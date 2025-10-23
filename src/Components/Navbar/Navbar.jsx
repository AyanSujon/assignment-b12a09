import React, { useContext } from 'react';
import Container from '../../Layout/Container';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';


const Navbar = () => {
  const { user, setUser, loading, setLoading, signOutUserFunction } = useContext(AuthContext);
  console.log(user);


  const handleSignOut = () => {
    signOutUserFunction()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
        setLoading(false)
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };










    const links = <>
    <li><NavLink to={"/"} className={"font-semebold"}>Home</NavLink></li>
    {/* <li><NavLink to={"/profile"} className={"font-semebold"}>Profile</NavLink></li> */}
    <li><NavLink to={"/games"}className={"font-semebold"}>Games</NavLink></li>
   </>



    return (
        <nav className='shadow-sm hover-black '>
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
                    <Link to={"/"} className=" text-xl font-bold text-white uppercase ">Game <span className='text-primary'>Hub</span></Link>
                </div>

                <div className="navbar-end">
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                { loading? <span className="loading loading-ring loading-xl"></span>:
                  user?(

                      <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className=" m-1">
                        <img className='w-10 mx-auto rounded-full overflow-hidden border border-primary' src={user?.photoURL || "https://i.ibb.co.com/tp3xgXbG/avater.jpg"} alt="Avater" />

                        </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm space-y-3 text-center">
                          <Link to={"/profile"}  className="tooltip" data-tip="Click to Profile">
                           <img className='w-25 mx-auto rounded-full overflow-hidden border border-primary' src={user?.photoURL || "https://i.ibb.co.com/tp3xgXbG/avater.jpg"} alt="Avater" />
                          </Link>
                          <h2 className='text-xl font-semebold'>{user?.displayName}</h2>
                           <p className='text-white'>{user?.email}</p>
                          <button onClick={handleSignOut}  className={"btn bg-primary hover:bg-[#eb3154]  text-white"}>Sign Out</button>
                        </ul>
                      </div>
                  ): (
                      <Link to={"/signin"}  className={"btn bg-primary hover:bg-[#eb3154] text-white"}>Sign in</Link>
                  )
                }
                </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;