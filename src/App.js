import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Homepage from './Homepage';
// import Portfolio from './Portfolio';
// import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/'>
            <button><img src="../public/ixesta.png" alt="Home" /></button>
          </Link>
        </div>
        {/* <Route exact path="/" component={Homepage} /> */}
        {/* <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} /> */}
      </Router>
    )
  }
}

export default App;
