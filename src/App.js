import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <div className='social'>

            <div class="avatar">
              <Link to="/">
                <img src="/ixesta.png" alt="Home" />
              </Link>
            </div>

            <div class="social-icons">
              <p>
                <a class="social-icon" href="https://www.linkedin.com/in/rocio-membrilla" target="_blank" rel="noopener noreferrer">
                  <img src="./linkedin.png" alt="Linkedin" />
                </a>
              </p>
              <p>
                <a class="social-icon" href="https://twitter.com/ixesta" target="_blank" rel="noopener noreferrer">
                  <img src="./twitter.png" alt="Twitter" />
                </a>
              </p>
              <p>
                <a class="social-icon" href="https://github.com/ixesta" target="_blank" rel="noopener noreferrer">
                  <img src="./github.png" alt="GitHub" />
                </a>
              </p>
            </div>

          </div>



          <nav class="nav_bar">
            <p>
              <Link to="/portfolio">portfolio</Link>
            </p>
            <p>
            
              
    <a href="javascript:void(window.open(
          'https://form.jotformeu.com/81943877197374',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'))"> contact </a>
            </p>
          </nav>

          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    )
  }


}

export default App;
