import './App.css';
import * as React from 'react';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as Tumblr } from './tumblr.svg';
import Quotes from './Quotes'


let firstQuote = Math.floor(Math.random()*Quotes.length);
const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_QUOTE":
      let nextQuote = Math.floor(Math.random()*Quotes.length);
      while (state.id === Quotes[nextQuote].id){
        nextQuote = Math.floor(Math.random()*Quotes.length);
      }
      const newState = Object.assign({},Quotes[nextQuote]);
      return newState;
    default:
      return state;
  }
}


function App() {
    const [state, dispatch] = React.useReducer(reducer, Quotes[firstQuote]);
    const [active,setActive] = React.useState(true);

    // twitter button set up
    const tweetButton = "https://twitter.com/intent/tweet?text=".concat(state.text.replace(/\s+/g,'%20'));

    // tumblr button set up
    const tumblrButton = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${state.author.replace(/\s+/g,'%20')}&content=${state.text.replace(/\s+/g,'%20')}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

    React.useEffect(() => {
      setActive(() => true);
    },[state.id]);

    const handleNewQuote = () => {
      setActive(() => false);
      setTimeout(() => dispatch({type: 'NEW_QUOTE'}),800);
    };

  return (
        <div className={`App`} style={{backgroundColor:state.color}} key={Math.random()}>
          <div className={`quote-box ${active ? 'fade-in' : 'fade-out'}`}>
            <p className="quote" style={{color:state.color}}>&#8220;{state.text}</p>
            <p className="author" style={{color:state.color}}><i>{state.author}</i></p>

            <a href={tweetButton} target="_blank" title="Tweet this quote!">
            <Twitter className="social-media" style={{backgroundColor:state.color}}/>
            </a>

            <a className="tumblr-share-button" href={tumblrButton} target="_blank" title="Post this quote on tumblr!">
            <Tumblr className="social-media" style={{backgroundColor:state.color}}/>
            </a>

            <button className="new-quote-btn" onClick={handleNewQuote} style={{backgroundColor:state.color, border:state.color}}>New quote</button>
          </div>
          <p style={{color:'white'}}>by Minh</p>
          {console.log("in")}
        </div>
    )
  }


export default App;

