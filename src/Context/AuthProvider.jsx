import React, { children, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from 'firebase/auth';


// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

const createUserWithEmailAndPasswordFunction = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };






    const authInfo ={
        user, 
        setUser,
        createUserWithEmailAndPasswordFunction,
        loading,
        setLoading,


    };
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;