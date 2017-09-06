import React from 'react';
import twitterLogo from '../assets/images/twitterlogo.png'

class QuotesContainer extends React.Component {
  render() {
    return (
      <div className="quotesContainer">
        <div className="quotes">
          <div></div>
          <div></div>
        </div>
        <div className="menu">
          <button className="share_twitt"><img className="share_twitt__img" src={twitterLogo} alt="twitter logo"/></button>
          <button className="new_quote">New Quote</button>
        </div>
      </div>
    );
  }
}

export default QuotesContainer;
