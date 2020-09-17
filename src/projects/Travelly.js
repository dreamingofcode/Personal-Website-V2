import React, { useState } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './projects.css';
import '../responsive.css';
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
      <div className="mobile">
        <Row center="sm" center="xs">
          <Col sm={12} xs={12} md={12}>
            <img
              className="mobile-gif"
              src="https://media.giphy.com/media/ggu2BWwMEHFVDlrUTh/giphy.gif"
              alt="Travelly Gif presentation"
              height="300px"
            />
          </Col>
        </Row>
        <Row>
          {' '}
          <br />
          <Col xs={6} sm={6} md={6}>
            <a
              href="https://nervous-lovelace-0d5b8e.netlify.app/"
              target="_blank"
            >
              <button style={{ marginRight: '50px' }}>Visit Site</button>
            </a>
          </Col>
          <Col xs={6} sm={6} md={6}>
            <a
              href="https://github.com/dreamingofcode/Travelly"
              target="_blank"
            >
              <button>Github Repository</button>
            </a>
          </Col>
        </Row>
      </div>

      <Row>
        <Col sm={12} md={12} lg={6}>
          <p>RUBY + REACT FULL-STACK WEB APP</p>
          <h4>
            All your travel needs in one place! Search for real-time Flight and
            Hotel information in order to get the best deals avail able. Never
            go bored while on vacation again! Find Restaurants and Attractions
            anywhere you go with Travelly!
          </h4>
          <h3 className="underline">Features</h3>
          <ul>
            <li style={{ marginTop: '-20px' }}>Mobile Responsive</li>
            <li style={{ marginTop: '-20px' }}>
              User Authentication via JWT token{' '}
            </li>

            <li style={{ marginTop: '-20px' }}>User Account CRUD actions</li>
            <li style={{ marginTop: '-20px' }}>
              Dynamically browse flights, departures and returns
            </li>
            <li style={{ marginTop: '-20px' }}>
              Dynamically browse through hotels
            </li>
            <li style={{ marginTop: '-20px' }}>
              Locate Restaurants near you or by city
            </li>
            <li style={{ marginTop: '-20px' }}>
              Locate Attractions near you or by city
            </li>
            <li style={{ marginTop: '-20px' }}>
              Use Mapbox visuals for an enhanced experience
            </li>

            <li style={{ marginTop: '-20px' }}>
              Generate the perfect trip model and store under account
            </li>
          </ul>
          <Row>
            <Col sm={3} md={6} lg={6}>
              <h3 className="underline">Front-End</h3>
              <p style={{ marginTop: '-20px' }}>CSS</p>
              <p style={{ marginTop: '-20px' }}>HTML</p>
              <p style={{ marginTop: '-20px' }}>React</p>
              <p style={{ marginTop: '-20px' }}>Redux & Hooks</p>
              <p style={{ marginTop: '-20px' }}>React Redux</p>
              <p style={{ marginTop: '-20px' }}>Bootstrap</p>
            </Col>{' '}
            <Col sm={3} md={6} lg={6}>
              <h3 className="underline">Back-End</h3>
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
                }}
              >
                Github Repository
              </button>
            </a>
            <a
              href="https://nervous-lovelace-0d5b8e.netlify.app/"
              target="_blank"
            >
              <button style={{ marginRight: '50px' }}>Visit Site</button>
            </a>
          </div>{' '}
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Travelly;
