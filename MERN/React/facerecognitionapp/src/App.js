import { Component } from 'react';
import './App.css';
import Particles from "react-tsparticles";
import Nav from './components/Nav/Nav.js';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo.js';
import ImgIptForm from './components/ImageIptForm/ImgIptForm.js';
import Rank from './components/Rank/Rank.js';
import Clarifai from 'clarifai';
import FaceRec from './components/FaceRec/FaceRec';


const app = new Clarifai.App({
  apiKey: '13055de7b1f6442cb7d9b8b87bda5bfc'
});

const particleOpt = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calcFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const img = document.getElementById('inputImage');
    const width = Number(img.width);
    const height = Number(img.height);
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

displayFacebox = (box) =>{
  console.log(box);
  this.setState({box: box})
}

  onIptChange = (event) => {
    this.setState({input: event.target.value});
  }


  ////Bug is Heeree !!!!!! 
  onBtnSubmit =  () =>{
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response =>{
      console.log(this.displayFacebox(this.calcFaceLocation(response)));
    })
    .then(response =>{
      this.calcFaceLocation(response)
    })
    .catch(err =>{
      console(err, 'Oops something went wrong')
    })
  }

  onRouteChange = (route) =>{
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    }else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

    render(){
    const {isSignedIn,route,box,imageUrl} = this.state;
      return (
        <div className="App">
          <Particles
            className='particles'
            options={particleOpt}
          />
          <Nav isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
          {route === 'home' 
          ? 
          <div>
          <Logo/>
          <Rank/>
          <ImgIptForm onIptChange={this.onIptChange} 
          onBtnSubmit={this.onBtnSubmit}/>
          <FaceRec box={box} imageUrl={imageUrl}/>
          </div> :(
            route === 'signin'
            ?
            <SignIn onRouteChange={this.onRouteChange}/>
            :<Register onRouteChange={this.onRouteChange}/>
          )
        }
        </div>
      );
    }; 
}

export default App;