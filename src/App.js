import React from 'react';
// import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Mission from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Mission />
      </>
    );
  }
}

export default App;
