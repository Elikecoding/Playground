import React, {Component} from 'react';

class ErrorBoundry extends Component{
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    } 
  }

  componentDidCatch(err, info){
    this.setState({ hasError: true })
  }
  
  render(){
    if (this.state.hasError) {
      return(
        <div>
          <h1>Opps somethign went wrong...</h1>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundry;