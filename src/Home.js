import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>

        <div class="name">
          <p>Hi, I'm Rocio</p>
        </div>

        <div class="learning">
          <p>Software developer</p>
        </div>
        <div class='tech-container'>
          <img className="technologies" src="./portfolio.jpg" alt="Technologies" />

        </div>
      </div>
    )

  }
}

export default Home;