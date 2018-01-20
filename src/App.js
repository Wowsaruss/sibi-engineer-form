import React, { Component } from 'react';
import Form from './Form';
import logo from './sibi.png';


class App extends Component {
  render() {
    return (
      <div>
        <div className='logo-parent' >
          <img className='logo' src={logo} alt=''/>
        </div>
        <Form/>
      </div>
    );
  }
}

export default App;
