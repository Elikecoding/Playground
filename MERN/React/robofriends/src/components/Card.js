import React from 'react';
import { render } from 'react-dom';

const Card = ({ id, name, email, username }) =>{
  return(
    <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src ={`https://robohash.org/${id}?200x200`} alt= 'card'/> 
      <div>
        <h2>name: {name}</h2>
        <p>email: {email}</p><br></br>
        <p>username: {username}</p> 
      </div>
    </div>
  );
}

export default Card;