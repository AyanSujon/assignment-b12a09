import React from 'react';
import useTitle from '../Hooks/useTitle';

const Loading = () => {
        // for changing Page title Dynamically.
    useTitle("Loading...");
    return (
        <div className='flex justify-center items-center min-w-screen min-h-screen'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default Loading;