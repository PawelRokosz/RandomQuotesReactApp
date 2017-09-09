import React from 'react';
import twitterLogo from '../assets/images/twitterlogo.png'
import quotes from '../data/quotes';

class QuotesContainer extends React.Component {
  constructor(props) {
    super(props);

    const { author, quote, source } = quotes[0]

    this.state = { author, quote, source }
  }

  handleNewQuoteClick() {
    const { author, quote, source } = quotes[Math.floor((Math.random() * quotes.length - 1) + 1)];
    this.setState({
      author,
      quote,
      source,
    });
  }

  render() {
    const { author, quote, source } = this.state

    return (
      <div className="quotesContainer">
        <div className="quote">
          <div className="quote-text">{quote}</div>
          <div className="quote-footer">
            <div classNanme="quote-footer__author">{author}</div>
            <div className="quote-footer__source">
              <a href={source} target="_blank" rel="noopener noreferrer">{source}</a>
            </div>
          </div>
        </div>
        <div className="menu">
          <a className="share_twitt" href={`https://twitter.com/intent/tweet?text=${quote} by @${author} from ${source}`} target="_blank" rel="noopener noreferrer">
            <img className="share_twitt__img" src={twitterLogo} alt="twitter logo"/>
          </a>
          <button type="button" className="new_quote" onClick={() => this.handleNewQuoteClick()}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default QuotesContainer;
