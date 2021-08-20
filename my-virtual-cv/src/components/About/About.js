import React from 'react';
import './About.css'

const About =()=>{
  return(
<div className='container'>
  <div class="row flex">
    
    <div class="content-block flex">
      <div>
      <h1>Who am I ?</h1>
      <p>Since you want to get to know me, my name is Elias Akawako and I'm a self-taught developer who loves working with technology. I was born in Angola but spent most of my early years traveling as a refugee due to the war that was going on in my country at the time. I lived in a small city in Germany called Aachen for a bit before moving to Paris for a spell then eventually ending up in London which I have lived in for more than 20 years. I've been interested in computers for as long as I can remember,  growing up my parents would make me set up all the technology related things in the house like computers, printers, routers, etc and found that I have a knack for it however I never got the opportunity to study computer science at a high level so when I was around 19 I started teaching myself to write code which was the start of my web development journey. 
      </p>
      </div>
    </div>

    <div class="content-block flex">
    <div>
    <h1>Want to know more ?</h1>
      <div className='myVid'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/2gm5bXlTFnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br></br>
      <p>Here's a short video from my early years as developer, a lot has changed since then but it always makes me feel nostalgic when I look back on it, hope you enjoy watching it as much as I enjoyed making it!</p>
    </div>
    </div>

  </div>

  <div class="row flex">
    
    <div class="content-block flex">
      <div>
      <h1>What do I do when I'm not writing code ?</h1>
      <p>
      Well I happen to be a massive Arsenal fan so I'm usually watching my team embarrass me but you can take so much so when I'm not watching Arsenal I love a good film, Tv series, or Anime. My taste is quite broad so what I watch can vary wildly.  When I'm not indoors I like to go to the gym or go hiking to connect with nature. I also love traveling and hope to visit every country on the planet at least once, I've been to a few so far but theres many more on the bucket list !
      </p>
      </div>
    </div>

    <div class="content-block flex">
    <div>
      <h1>Am I available ?</h1>
      <p>I am available to work on new projects at the moment. If you have an idea that you want to be made into reality then get in touch and we can discuss it in more detail. I am also available for agency work across London or remote contract work if needed, you want to know my day rate please get in touch</p>
    </div>
    </div>

  </div>

</div>
  );
}

export default About;