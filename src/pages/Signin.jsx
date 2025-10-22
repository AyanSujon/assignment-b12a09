import { GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useContext, useRef, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';


const Signin = () => {

     const [show, setShow] = useState(false);
    //  const [email, setEmail] = useState(null); 
    const { user, setUser, signInWithEmailAndPasswordFunction, signInWithPopupGoogle, signInWithPopupGitHub, signOutUserFunction, sendPasswordResetEmailFunction} =useContext(AuthContext);
    const emailRef = useRef(null);
  
    
// Google Signin 
     const handleGoogleSignin = ()=> {
        // signInWithPopup(auth, googleProvider)
        signInWithPopupGoogle()
       .then(res => {
                console.log(res);
                setUser(res.user);
                toast.success("Signin with Google Successfull!");
            })
            .catch((e)=>{
                console.log(e);
               toast.error(e.message);
            })
     };

    //  GitHub Signin 
    const handleGitHubSignin = (e)=>{
        e.preventDefault();
        // console.log("GIthub Clicked");
        // signInWithPopup(auth, gitHubProvider)
        signInWithPopupGitHub()
        .then(res => {
                console.log(res);
                setUser(res.user);
                console.log(res.user);
                toast.success("Signin with GitHub Successfull!");
            })
            .catch((e)=>{
                console.log(e);
               toast.error(e.message);
            })

    };



    
        const handleSignin = (e)=> {
            e.preventDefault();
            const email = e.target.email?.value;
            const password = e.target.password?.value;
            // console.log("signin function entered.", {email, password});
    
            if(password.length < 8){
                toast.error("Password should be at least 6 Digit.");
                return;
            }
    
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|:;"'<>,.?/~`]).{8,}$/;
            if(!passwordRegex.test(password)){
                toast.error(
                    "❌ Password must be at least 8 characters long and include uppercase, lowercase, number, and special symbol."
                );
                return;
            }
    
    
            // signInWithEmailAndPassword(auth, email, password)
            signInWithEmailAndPasswordFunction(email, password)
            .then(res => {
                if(!res.user?.emailVerified){
                    toast.error("Your email is not verified.")
                    return;
                }
                console.log(res);
                setUser(res.user);
                toast.success("Signin Successfull!");
            })
            .catch((e)=>{
                console.log(e);
               toast.error(e.message);
            })
        };


// const handleSignOut = ()=>{


//     console.log("Signout clicked")
//     signOutUserFunction().then(()=> {
//         toast.success("Sign Out Successfull!")
//         setUser(null);
//     }).catch(e => {
//         toast.error(e.message);
//     })

// }

const handleFrogetPassword =()=> {
console.log(emailRef.current.value);
const email = emailRef.current.value;
//  sendPasswordResetEmail(auth, email)
sendPasswordResetEmailFunction(email)
 .then(() => {
    toast.success("Check you email to reset password.");
 }).catch(e=> {
    toast.error(e.message);
 })
};


    return (
            <div className="card mx-auto my-5 bg-white/10 backdrop-blur-sm w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-4xl text-center font-bold">Login now!</h1>
                <form onSubmit={handleSignin} > 
                <fieldset className="fieldset text-white">
                <label className="label">Email</label>
                <input ref={emailRef} type="email" name='email' className="input bg-white/10 backdrop-blur-sm" placeholder="Email" />
                <label className="label">Password</label>
               <div className='relative'>
                 <input type={show? "text": "password"} name='password' className="input bg-white/10 backdrop-blur-sm" placeholder="Password" />
                 <span onClick={()=> setShow(!show)} className='absolute right-8 top-[14px] cursor-pointer z-20'>
                    {show? <FaEye/>: <IoEyeOff/>}
                 </span>
               </div>
                <div><button onClick={handleFrogetPassword} type='button' className="link link-hover">Forgot password?</button></div>
                <button className="btn btn-primary mt-4">Sign in</button>
                </fieldset>
                <p className='text-white'>New to our webstie? <Link to={"/signup"} className="hover:text-primary text-white">SignUp</Link></p>
                </form>

                {/* Divider */}
                <div className="flex w-full flex-col">
                <div className="divider text-white">OR</div>
                </div>

                {/* Google */}
                <button onClick={handleGoogleSignin} className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Continue with Google
                </button>


                {/* GitHub */}
                <button onClick={handleGitHubSignin} className="btn bg-black text-white border-black">
                <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                Continue with GitHub
                </button>
            </div>
            </div>
    );
};

export default Signin;