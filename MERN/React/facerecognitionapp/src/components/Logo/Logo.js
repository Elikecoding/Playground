import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css';

const Logo = () =>{
  return(
    <div className='ma3 nt0'>
      <Tilty className="tilty br2 shadow-2" 
      style={{hieght: 150, width: 150}} 
      glare scale={1.05} maxGlare={0.5}
      max={55}>
        <div className="inner pa3">
          <img src="https://img.icons8.com/wired/64/000000/artificial-intelligence.png"
              style={{paddingTop: '5px'}}
              alt="my logo"/>
        </div>
      </Tilty>
    </div>
  );
}

export default Logo;