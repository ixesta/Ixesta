import React, { Component } from 'react'

class Portfolio extends Component {
  render() {
    return (
      <div class='cards'>

        <div class="card">
          <div>

          </div>
          <div class="card-content">
            <p class="card-name">Tripster</p>


            <p>
              <a href="/tripster.mp4" target="_blank">
                <img class="video-icon" src="./video.png" alt="Promotional video" />
              </a>
            </p>

            <p>
              <a href="https://github.com/ixesta/Tripster" target="_blank" rel="noopener noreferrer">
                <img class="video-icon" src="./code.png" alt="GitHub" />
              </a>
            </p>

          </div>
        </div>


        <div class="card">



          <div class="card-content">
            <p class="card-name">NC News</p>

            <p >
              <a class="card-text" href="https://ro-nc-app.herokuapp.com/" target="_blank">
                <img class="video-icon" src="./http.png" alt="Web" />
              </a>
            </p>
            <p>
              <a href="https://github.com/ixesta/NC-News-FE" target="_blank">
                <img class="video-icon" src="./code.png" alt="GitHub" />
              </a>
            </p>

          </div>
        </div>


      </div>
    )

  }
}

export default Portfolio;