import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

const createUserWithEmailAndPasswordFunction = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

const updateProfileFunction = (displayName, photoURL)=>{
    setLoading(true);
    return updateProfile(auth.currentUser, {
     displayName, photoURL,
    });
  };
const sendEmailVerificationFunction = ()=>{
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
};

  const signInWithEmailAndPasswordFunction = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithPopupGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

const signInWithPopupGitHub =()=>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
};

 const signOutUserFunction= ()=>{
    setLoading(true);
    return  signOut(auth);
 };
const sendPasswordResetEmailFunction =(email)=>{
    setLoading(true);
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


useEffect(()=>{
    const unsubscrive = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
    });
    return ()=>{
        unsubscrive();
    }
},[]);



















    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;