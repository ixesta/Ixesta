import React, { Component } from 'react'

class Portfolio extends Component {
  render() {
    return (
      <div class='cards'>

        <div class="card">
          <div>
            {/* <img class="card-image" src="/Tripster/logo2.png" alt="" width='40%' /> */}
            {/* <video width="320" height="240" controls>
              <source src="/tripster.mp4" type="video/mp4" />>
            </video> */}
          </div>
          <div class="card-content">
            <p class="card-name">Tripster</p>
            {/* <p class="card-description">Your travel app</p> */}

            <p><a class="card-text" href="/tripster.mp4" target="_blank">Video</a></p>
            <p><a class="card-text" href="https://github.com/ixesta/Tripster" target="_blank">GitHub repo</a></p>

          </div>
        </div>


        <div class="card">

          {/* <div>
            <img class="card-image" src="/typewriter2.png" alt="" width='40%' />
          </div> */}

          <div class="card-content">
            <p class="card-name">NC News</p>
            {/* <p class="card-description">Social News Website</p> */}

            <p ><a class="card-text" href="https://ro-nc-app.herokuapp.com/" target="_blank">Deployed version</a></p>
            <p><a class="card-text" href="https://github.com/ixesta/NC-News-FE" target="_blank">GitHub repo</a></p>

          </div>
        </div>


      </div>
    )

  }
}

export default Portfolio;