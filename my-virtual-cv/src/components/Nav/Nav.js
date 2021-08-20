import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'
import { SocialIcon } from 'react-social-icons';

const Nav =()=>{
  return(
    <header className='myhead'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
        <NavLink to='/' exact 
        activeClassName='text-white bg-red-700'
        className='inline-flex items-center py-6 px-3 mr-4 text-white hover:text-red-800 text-4xl font-bold cursive tracking-widest'>
        Elikescoding
      </NavLink>
      <NavLink to='/about' activeClassName='text-white bg-red-700'
      className='inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-red-800 text-4xl'>
        About
      </NavLink>
      <NavLink to='/contact' activeClassName='text-white bg-red-700'
      className='inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-red-800 text-4xl'>
        Contact
      </NavLink>
      <NavLink to='/samples' activeClassName='text-white bg-red-700'
      className='inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-red-800 text-4xl'>
        Samples
      </NavLink>
        </nav>
        <div className='inline-flex py-3 px- mx-6'>
        <SocialIcon url='https://github.com/Elikecoding' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35,width: 35}}/>
        <SocialIcon url='https://www.linkedin.com/in/elias-akawako-906480110/' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35,width: 35}}/>
        <SocialIcon url='https://www.instagram.com/elikescoding/' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35,width: 35}}/>
        <SocialIcon url='https://leetcode.com/Elikecoding/' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35,width: 35}}/>
        </div>
    </div>
    </header>
  );
}

export default Nav;