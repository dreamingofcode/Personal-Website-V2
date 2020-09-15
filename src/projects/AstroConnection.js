import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';
// import './portfolio.css';

import astroConnection from '../images/astroConnection.png';
const AstroConnection = () => {
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
        <img
          className="mobile-gif"
          src="https://media.giphy.com/media/l0od7tThpTldB4whck/giphy.gif"
          alt="Astro-Connection Gif presentation"
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
        <a
          href="https://github.com/dreamingofcode/Astro-Connect"
          target="_blank"
        >
          <iframe
            style={{ display: `${videoPlayer}` }}
            width="fit-content"
            height="fit-content"
            src="https://www.youtube.com/embed/leuY6ShOFBA?controls=0&amp;start=60"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <button>Github Repository</button>
        </a>
        <a href="https://astr-connection.herokuapp.com/" target="_blank">
          <button>Visit Website</button>
        </a>
      </div>

      <Row>
        <Col sm={12} md={12} lg={6}>
      
          <div className="flip-card cookie">
            <div className="flip-card-inner ">
              <div className="flip-card-front ">
                <img
                  src={astroConnection}
                  alt="Avatar"
                  style={{ width: '513px', height: '200px' }}
                />
                <h5>
                  {' '}
                  A social-Networking expirience infused with zodiac
                  compatibility matching! Get your daily and general horoscope
                  reading today!
                </h5>
              </div>
              <div class="flip-card-back">
                <img
                  src="https://media.giphy.com/media/l0od7tThpTldB4whck/giphy.gif"
                  alt="Astro-Connection Gif presentation"
                  height="300px"
                ></img>
              </div>
            </div>

            <a
              href="https://github.com/dreamingofcode/Astro-Connect"
              target="_blank"
            >
              <button style={{ marginRight: '50px', color: 'black' }}>
                Github Repository
              </button>
            </a>

            <a href="https://astr-connection.herokuapp.com/" target="_blank">
              <button style={{ marginRight: '50px', color: 'black' }}>
                Visit Site
              </button>
            </a>

            <a
              href="https://www.youtube.com/watch?v=leuY6ShOFBA&t=60s"
              target="_blank"
            >
              <button style={{ marginRight: '50px', color: 'black' }}>
                Watch Demo
              </button>
            </a>
          </div>{' '}
        </Col>
        <Col sm={12} md={12} lg={6}>
        <h2>Astro-Connection</h2>
          <p>RUBY + REACT + EXPRESS FULL-STACK WEB APP</p>
          <h5>
            A social-Networking experience infused with zodiac compatibility
            matching! Get your daily and general horoscope reading today!
          </h5>
          <h4 className="underline">Features</h4>
          <p style={{ marginTop: '-20px' }}>User Account CRUD actions</p>
          <p style={{ marginTop: '-15px' }}>Daily Horoscope Reading</p>
          <p style={{ marginTop: '-20px' }}>General Horsocope Reading</p>
          <p style={{ marginTop: '-20px' }}>
            Horoscope-match compatibility calculator
          </p>
          <p style={{ marginTop: '-20px' }}>User Image upload</p>
          <p style={{ marginTop: '-20px' }}>Instant Messaging and Chat-rooms</p>
          <Row>
            <Col>
              <h4 className="underline">Front-End</h4>

              <p style={{ marginTop: '-20px' }}>CSS</p>
              <p style={{ marginTop: '-20px' }}>HTML</p>
              <p style={{ marginTop: '-20px' }}>React</p>
              <p style={{ marginTop: '-20px' }}>Redux & Hooks</p>
              <p style={{ marginTop: '-20px' }}>Bootstrap</p>
              <p style={{ marginTop: '-20px', marginBottom: '40px' }}>
                Socket.IO
              </p>
            </Col>
            <Col>
              <h4 className="underline">Back-End</h4>
              <p style={{ marginTop: '-20px' }}>Ruby on Rails</p>
              <p style={{ marginTop: '-20px' }}>PostgreSQL</p>
              <p style={{ marginTop: '-20px' }}>Cloudinary</p>
              <p style={{ marginTop: '-20px' }}>Express</p>
              <p style={{ marginTop: '-20px', marginBottom: '40px' }}>
                Node.JS
              </p>
            </Col>{' '}
          </Row>{' '}
        </Col>{' '}
      </Row>
    </React.Fragment>
  );
};
export default AstroConnection;
