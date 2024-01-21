import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
const Navbar = () => {
 

   const navLinks=<>
   
     <li  className='font-vollkorn'>  
     <nav id="sidebar">
     <NavLink to="/" className="nav-link" > Home</NavLink></nav></li>   
       <li className='font-vollkorn'><NavLink to='/addproduct' className="nav-link" >Add Product</NavLink></li> 
       <li className='font-vollkorn'> <NavLink to='/cart' className="nav-link">My cart</NavLink></li>
       <li className='font-vollkorn'> <NavLink to='/login' className="nav-link">Login</NavLink></li>
    </>
    
    
    return (        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
    
    </div>
   <img className='h-20' src='https://i.ibb.co/6F1fJDT/Velvet-vogue-1.png'></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    
  </div>
 

</div>    
       
    );
};

export default Navbar;