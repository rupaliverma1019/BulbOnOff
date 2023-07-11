import React, { Component } from 'react';
import './App.css';
import OffBulb from './screens/OffBulb/OffBulb';
import OnBulb from './screens/OnBulb/OnBulb';
import './Home.css'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      btnSwitch : false,
      broke: false
    }
    this.toggleButton = this.toggleButton.bind(this);
    this.breakBulb = this.breakBulb.bind(this);
  } 
  toggleButton() {
    const { btnSwitch } = this.state;
    this.setState({ btnSwitch: !btnSwitch })
  }
  breakBulb() {
    this.setState({ broke: true })
  }
  render() {
    const { btnSwitch, broke } = this.state;
    return (
      <div className="App">
        
        {!broke && !btnSwitch && <OffBulb toggle={this.toggleButton}/>}
        {!broke && btnSwitch && <OnBulb toggle={this.toggleButton}/>}
        
      </div>
    );
  }
}

export default Home;
