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
              <a href="https://player.vimeo.com/video/280276226" target="_blank">
                <img class="video-icon" src="./video.png" alt="Promotional video" />
              </a>
            </p>

            <p>
              <a href="https://github.com/ixesta/Tripster" target="_blank" rel="noopener noreferrer">
                <img class="video-icon" src="./coding.png" alt="GitHub" />
              </a>
            </p>

          </div>
        </div>

        {/* <iframe src="https://player.vimeo.com/video/280276226" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <p><a href="https://vimeo.com/280276226">Tripster promo</a> from <a href="https://vimeo.com/user87379371">Roc&iacute;o</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}



        <div class="card">

          <div class="card-content">
            <p class="card-name">NC News</p>

            <p >
              <a class="card-text" href="https://ncnews.netlify.com" target="_blank" rel="noopener noreferrer">
                <img class="video-icon" src="./http.png" alt="Web" />
              </a>
            </p>

            <p>
              <a href="https://github.com/ixesta/NC-News-FE" target="_blank" rel="noopener noreferrer">
                <img class="video-icon" src="./coding.png" alt="GitHub" />
              </a>
            </p>

          </div>

        </div>


        <div class="card">

          <div class="card-content">
            <p class="card-name">NC News (API)</p>

            <p >
              <a class="card-text" href="https://ro-nc-news.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img class="video-icon" src="./http.png" alt="Web" />
              </a>
            </p>
            <p>
              <a href="https://github.com/ixesta/NC-News_BE" target="_blank" rel="noopener noreferrer">
                <img class="video-icon" src="./coding.png" alt="GitHub" />
              </a>
            </p>

          </div>

        </div>

      </div>
    )

  }
}

export default Portfolio;