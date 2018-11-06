import React, { Component } from 'react';
import Title from './Title/Title';
import Bottom from './Bottom/Bottom';
import './App.css';
import Liste from './Liste/Liste'

class App extends Component {
  

  render() {
    return (
    	<div className="App">
          <Title>

            <Liste></Liste>

          </Title>
          
          <Bottom></Bottom>
        
      </div>
    );
  }
}

export default App;
