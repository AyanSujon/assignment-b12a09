import React, { Children } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const authInfo ={
        user: "Ayan Sujon",
        email: "ayansujonbd@gmail.com"
    };
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;