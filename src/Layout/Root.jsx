import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Container from './Container';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen bg-secondary'>
            <Navbar/>
            <div className='flex-1'>
                <Outlet/>
            </div>
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default Root;