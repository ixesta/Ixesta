import React, { Component } from 'react'

class Portfolio extends Component {
  render() {
    return (
      <div class='cards'>

        <div class="card">
          <div class="card-image">
            <img class="activator" src="/Tripster/logo2.png" alt="" width='40%' />
          </div>
          <div class="card-content">
            <p class="card-name">Tripster</p>
            <p class="card-description">Your travel app</p>

          </div>
          <div class="card-reveal">

            <p><a class="card-text" href="https://github.com/ixesta/Tripster">GitHub repo</a></p>

          </div>
        </div>


        <div class="card">
          <div class="card-image">
            <img class="activator" src="/typewriter.png" alt="" width='40%' />
          </div>
          <div class="card-content">
            <p class="card-name">NC News</p>
            <p class="card-description">Social News Website</p>

          </div>
          <div class="card-reveal">

            <p ><a class="card-text" href="https://ro-nc-app.herokuapp.com/">Deployed version</a></p>
            <p><a class="card-text" href="https://github.com/ixesta/NC-News-FE">Github repo</a></p>

          </div>
        </div>


        {/* <a href="https://github.com/ixesta/Tripster">
          <div class='card'>
            <img src="/Tripster/logo.png" alt="" width='40%' />
            <div class="container">
              <h2><b>Tripster</b></h2>
              <p>Travel App</p>
            </div>
          </div>
        </a>


        <a href="https://ro-nc-app.herokuapp.com/">
          <div class='card'>
            <img src="/typewriter.png" alt="" width='40%' />
            <div class="card-container">
              <h2><b>Northcoders News</b></h2>
              <p>Social News</p>
            </div>
          </div>
        </a> */}

      </div>
    )

  }
}

export default Portfolio;