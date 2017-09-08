import React from 'react';
import twitterLogo from '../assets/images/twitterlogo.png'
import quotes from '../data/quotes';

class QuotesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this);

    this.state = {
      author: quotes[0].author,
      quote: quotes[0].quote,
      source: quotes[0].source
    }
  }

  handleNewQuoteClick() {
    let randomQuote = quotes[Math.floor((Math.random() * quotes.length - 1) + 1)];
    this.setState({
      author: randomQuote.author,
      quote: randomQuote.quote,
      source: randomQuote.source
    })
  }

  render() {
    return (
      <div className="quotesContainer">
        <div className="quote">
          <div className="quote-text"><span>{this.state.quote}</span></div>
          <div className="quote-footer">
            <div><span className="quote-footer__author">{this.state.author}</span></div>
            <div>
              <span className="quote-footer__source">
                <a href={this.state.source} target="_blank" rel="noopener noreferrer">{this.state.source}</a>
              </span>
            </div>
          </div>
        </div>
        <div className="menu">
          <button className="share_twitt">
            <a href={'https://twitter.com/intent/tweet?text=' + this.state.quote + 'by@' + this.state.author + 'from' + this.state.source} target="_blank" rel="noopener noreferrer">
              <img className="share_twitt__img" src={twitterLogo} alt="twitter logo"/>
            </a>
          </button>
          <button className="new_quote" onClick={this.handleNewQuoteClick}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default QuotesContainer;