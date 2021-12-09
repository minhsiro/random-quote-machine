import './App.css';
import * as React from 'react';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as Tumblr } from './tumblr.svg';
import { useState } from 'react';
// import {ReactDOM} from 'react-dom';

const randomQuote =
  [{text: ' When I let go of what I am, I become what I might be.',
  author:"- minhsiro",
  color:"green",
  },
  {text: ' When I let go of what I am, I become what I might be.',
  author:"- minhsiro",
  color:"pink",
  },
  {text: ' When I let go of what I am, I become what I might be.',
  author:"- minhsiro",
  color:"yellow",
  }];


function App() {
  const [state,setState] = useState(
    {text: 'When I let go of what I am, I become what I might be.',
    author:"- minhsiro",
    color:"violet",
    }
    );
    let tweetIntent = "https://twitter.com/intent/tweet?text="
    const tweetButton = tweetIntent.concat(state.text.replace(/\s+/g,'%20'));
    const handleNewQuote = () => {
      let nextQuote = Math.round(Math.random() * (randomQuote.length-1));
      setState(() => {
        return randomQuote[nextQuote];
      })
    };
  return (
    <div className="App" style={{backgroundColor:state.color}}>
      <div className='quote-box'>
        <p className="quote" style={{color:state.color}}>&#8220;{state.text}</p>
        <p className="author" style={{color:state.color}}>{state.author}</p>
      {/* <a className="twitter-link">twitter</a>
      <a className= "tumblr-link">tumblr</a> */}
      <a href={tweetButton} target="_blank" title="Tweet this quote!"><Twitter className="social-media" style={{backgroundColor:state.color}}/></a>
      <a href="#123" title="Post this quote on tumblr!"><Tumblr className="social-media" style={{backgroundColor:state.color}}/></a>
      <button className="new-quote-btn" onClick={handleNewQuote} style={{backgroundColor:state.color}}>New quote</button>
      </div>
      <p style={{color:'white'}}>by Minh</p>
    </div>
  );
}

export default App;
