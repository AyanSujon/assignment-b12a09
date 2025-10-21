import React, { Children } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({Children}) => {
    const authInfo ={
        user: "Ayan Sujon",
        email: "ayansujonbd@gmail.com"
    };
    return (
        <AuthContext value={authInfo}>
            {Children}
        </AuthContext>
    );
};

export default AuthProvider;