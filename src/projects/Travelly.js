import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './projects.css';
import travelly from '../images/travelly.png';
const Travelly = () => {
  const [videoPlayer, setVideoPlayer] = useState('none');
  const [videoButton, setVideoButton] = useState('View Demo');
  const [toggleDemoVideo, setToggleDemo] = useState(false);

  const toggleVideo = () => {
    setToggleDemo(!toggleDemoVideo);
    toggleDemoVideo === true ? setVideoPlayer('flex') : setVideoPlayer('none');
    toggleDemoVideo === true
      ? setVideoButton('Close Demo')
      : setVideoButton('View Demo');
  };
  return (
    <React.Fragment>
      {/* <div className="mobile">
        <img
          className="mobile-gif"
          src="https://media.giphy.com/media/ggu2BWwMEHFVDlrUTh/giphy.gif"
          alt="Travelly Gif presentation"
          height="300px"
        />
        <br />
        <button
          onClick={() => {
            toggleVideo();
          }}
        >
          {videoButton}
        </button>
        <a href="https://github.com/dreamingofcode/Travelly" target="_blank">
          <button>Github Repository</button>
        </a>
      </div> */}
      <Row>
        <Col sm={12} md={12} lg={6}>
          <p>RUBY + REACT FULL-STACK WEB APP</p>
          <h5>
            All your travel needs in one place! Search for real-time Flight and
            Hotel information in order to get the best deals available. Never
            go bored while on vacation again! Find Restaurants and Attractions
            anywhere you go with Travelly!
          </h5>
          <h4 className="underline">Features</h4>
          <p style={{ marginTop: '-20px' }}>Mobile Responsive</p>

          <p style={{ marginTop: '-20px' }}>User Account CRUD actions</p>
          <p style={{ marginTop: '-20px' }}>
            Dynamically browse flights, departures and returns
          </p>
          <p style={{ marginTop: '-20px' }}>
            Dynamically browse through hotels
          </p>
          <p style={{ marginTop: '-20px' }}>
            Locate Restaurants near you or by city
          </p>
          <p style={{ marginTop: '-20px' }}>
            Locate Attractions near you or by city
          </p>
          <p style={{ marginTop: '-20px' }}>
            Use Mapbox visuals for an enhanced expirience
          </p>

          <p style={{ marginTop: '-20px' }}>
            Generate the perfect trip model and store under account
          </p>
          <Row>
            <Col sm={3} md={6} lg={6}>
              <h4 className="underline">Front-End</h4>
              <p style={{ marginTop: '-20px' }}>CSS</p>
              <p style={{ marginTop: '-20px' }}>HTML</p>
              <p style={{ marginTop: '-20px' }}>React</p>
              <p style={{ marginTop: '-20px' }}>Redux & Hooks</p>
              <p style={{ marginTop: '-20px' }}>React Redux</p>
              <p style={{ marginTop: '-20px' }}>Bootstrap</p>
            </Col>{' '}
            <Col sm={3} md={6} lg={6}>
              <h4 className="underline">Back-End</h4>
              <p style={{ marginTop: '-20px' }}>Ruby on Rails</p>
              <p style={{ marginTop: '-20px' }}>mySQL</p>
              <p style={{ marginTop: '-20px' }}>Skyscanner External API</p>
              <p style={{ marginTop: '-20px' }}>TripAdvisor External API</p>
              <p style={{ marginTop: '-20px' }}>Mapbox External API</p>
            </Col>{' '}
          </Row>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <div className="flip-card ">
            <div className="flip-card-inner ">
              <div className="flip-card-front ">
                <img
                  src={travelly}
                  alt="Avatar"
                  className="travelly-flip-card"
                />
                <h5>
                  {' '}
                  Book the perfect trip at the lowest price ever! Browse through
                  flights and compare prices instantly!
                </h5>
              </div>
              <div class="flip-card-back">
                <img
                  alt="WatchList website GIF"
                  src="https://media.giphy.com/media/ggu2BWwMEHFVDlrUTh/giphy.gif"
                  alt="travelly Gif presentation"
                  height="300px"
                  width={'520px'}
                ></img>
              </div>
            </div>

            <a
              href="https://github.com/dreamingofcode/travelly"
              target="_blank"
            >
              <button
                style={{
                  marginLeft: '50px',
                  marginRight: '50px',
                  color: 'black',
                }}
              >
                Github Repository
              </button>
            </a>
            <a
              href="https://nervous-lovelace-0d5b8e.netlify.app/"
              target="_blank"
            >
              <button style={{ marginRight: '50px', color: 'black' }}>
                Visit Site
              </button>
            </a>
          </div>{' '}
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Travelly;
