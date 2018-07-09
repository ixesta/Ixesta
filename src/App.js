import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className='social'>

            <p>
              <a href="www.linkedin.com/in/rocio-membrilla" target="_blank" rel="noopener noreferrer">
                <img src="./linkedin.png" alt="Linkedin" />
              </a>
            </p>
            <p>
              <a href="https://twitter.com/ixesta" target="_blank" rel="noopener noreferrer">
                <img src="./twitter.png" alt="Twitter" />
              </a>
            </p>
            <p>
              <a href="https://github.com/ixesta" target="_blank" rel="noopener noreferrer">
                <img src="./github.png" alt="GitHub" />
              </a>
            </p>
          </div>
          <div class="avatar">
            <Link to="/">
              <img src="/ixesta.png" alt="Home" />
            </Link>
          </div>

          <nav class="nav_bar">
            <p>
              <Link to="/portfolio">portfolio</Link>
            </p>
            <p>
              <Link to="/contact">contact</Link>
            </p>
          </nav>



          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }


}

export default App;
