import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Container from './Container';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='flex-1'>
                <Container>
                    <Outlet/>
                </Container>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;