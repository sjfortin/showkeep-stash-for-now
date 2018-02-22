import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from './components/nav';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Navigation/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </MuiThemeProvider>
    );
  }
}

export default App;
