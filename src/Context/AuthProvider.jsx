import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

const createUserWithEmailAndPasswordFunction = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

const updateProfileFunction = (displayName, photoURL)=>{
    return updateProfile(auth.currentUser, {
     displayName, photoURL,
    });
  };
const sendEmailVerificationFunction = ()=>{
    return sendEmailVerification(auth.currentUser);
};

  const signInWithEmailAndPasswordFunction = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithPopupGoogle = ()=>{
    return signInWithPopup(auth, googleProvider);
  };

const signInWithPopupGitHub =()=>{
    return signInWithPopup(auth, githubProvider);
};

 const signOutUserFunction= ()=>{
    return  signOut(auth);
 };
const sendPasswordResetEmailFunction =(email)=>{
    return sendPasswordResetEmail(auth, email);
};




    const authInfo ={
        user, 
        setUser,
        createUserWithEmailAndPasswordFunction,
        loading,
        setLoading,
        signInWithEmailAndPasswordFunction,
        signInWithPopupGoogle,
        signInWithPopupGitHub,
        signOutUserFunction,
        sendPasswordResetEmailFunction,
        updateProfileFunction,
        sendEmailVerificationFunction,
        


        



    };
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;