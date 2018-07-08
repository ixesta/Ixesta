import React, { Component } from 'react'

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div class="under">
          <p> <div id="tripster">
            <a href='https://github.com/ixesta/TravelApp' >
              <img src='./Tripster/logo.jpg' alt="" height="370" width="320" />
            </a>
          </div>
            <div id="nc">
              <a href='https://ro-nc-app.herokuapp.com/' >
                <img src='./nc.png' alt="" height="370" width="800" />
              </a>
            </div>
          </p>
        </div>

      </div>
    )

  }
}

export default Portfolio;