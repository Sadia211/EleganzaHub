import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { GoogleAuthProvider,getAuth,signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config'
 import { FaGoogle } from "react-icons/fa";
const Login = () => {
  const {signIn}=useContext(AuthContext);
  const location=useLocation();
  const  navigate= useNavigate();
  const auth=getAuth(app);
  const provider= new GoogleAuthProvider();
const handleLogin =e =>{
    e.preventDefault();
    const form= new FormData(e.currentTarget);
    const email=form.get('email');
    const password=form.get('password');
    signIn(email,password)
    .then(result=>{
    console.log(result)
    navigate(location?.state?location.state:"/")
    })
    .catch(error=>{console.log(error)})
}
{/**FormData creates a set of key/value pairs representing form fields and their values. It is commonly
 used to construct a set of data that can be sent in an HTTP request. */}

{/**For the google log in */}

 const handleGoogleSignIn=()=>{
  signInWithPopup(auth,provider)
  .then(result=>{
    const user=result.user;
    console.log(user);
  })
.catch(error=>{
  console.log('error',error.message)
})


 }
    return (
        <div className='bg-white font-vollkorn'>
            <Navbar></Navbar>
        <h2 className=' text-3xl text-center text-black my-10'>Please Login</h2>
       <form onSubmit={handleLogin} className="card-body mx-auto lg:w-1/2 bg-white">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input type="email" required name="email" className="input input-bordered bg-white border-black  text-black"/>
          {/**The required attribute is used to indicate that the input field must be filled out before submitting the form. */}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black ">Password</span>
          </label>
          <input type="password" required name="password" className="input input-bordered border-black  text-black"/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-black">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-black  bg-white   hover:bg-amber-800 border-black">Login</button>
          <p className='font-serif text-black text-center'>Or</p>
          
          <button onClick={handleGoogleSignIn} className='btn text-black  bg-white border-black hover:bg-amber-800'>
            <span><FaGoogle></FaGoogle></span>
            
            Login in with google</button>
        </div>
      </form>
      <p className='text-center text-black pb-10'> Don't have an account? <Link className='text-amber-800 ' to='/register'> Register</Link></p>
      
    </div>
  
        
    );
};

export default Login;