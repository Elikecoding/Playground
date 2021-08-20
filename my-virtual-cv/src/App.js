import { Component } from 'react';
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact-Us/Contact';
import Samples from './components/Samples/Samples';
import 'tachyons';


class App extends Component {
  constructor(){
    super();

    this.state = {

    }
  }

  render(){
    return (
    <div className='App'>
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route component={Home} path='/' exact/>
          <Route component={About} path='/about'/>
          <Route component={Contact} path='/contact'/>
          <Route component={Samples} path='/samples'/>
        </Switch>
      </BrowserRouter>
    </div>
    )
  }
}

export default App;
