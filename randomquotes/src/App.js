import React from 'react';
import './assets/styles/css/main.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav/>
        <Footer/>
      </div>
    );
  }
}

export default App;
