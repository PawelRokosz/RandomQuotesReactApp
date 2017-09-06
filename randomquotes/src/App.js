import React from 'react';
import './assets/styles/css/main.css';

import Nav from './components/Nav';
import QuotesContainer from './components/QuotesContainer';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav/>
        <QuotesContainer/>
        <Footer/>
      </div>
    );
  }
}

export default App;
