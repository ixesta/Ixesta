import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>

        <div class="name">
          <p>Hi, I'm Rocio</p>
        </div>

        <div class="learning">
          <p>Software developer recently graduated from the
            <a href="https://northcoders.com" target="_blank" rel="noopener noreferrer"> Northcoders</a> coding bootcamp.
        </p>
        </div>
        <div>
          <img className="technologies" src="./portfolio.jpg" alt="Technologies" />

        </div>
      </div>
    )

  }
}

export default Home;