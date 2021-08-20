import React from 'react';

const Home =()=>{
  return(
    <main className='homePg'>
      {/* <img src='https://i.pinimg.com/564x/87/24/55/8724550b79264975636d8d078827561d.jpg' alt='code'
      className='absolute object-cover w-full h-full'/> */}

      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-green font-bold cursive leading-none lg:leading-snug home-name'>Hello, Welcome to my page built using React, Tailwind css, mailchimp and netlify</h1> 
      </section>
    </main>
  );
}

export default Home;