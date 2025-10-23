import React, { useEffect } from 'react';

// for changing Page title Dynamically.
const useTitle = (title) => {
    useEffect(()=>{
        document.title = `GameHub | ${title}`;
    }, []);
};

export default useTitle;