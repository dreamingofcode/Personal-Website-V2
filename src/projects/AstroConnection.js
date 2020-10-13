import React, { useState } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import universe from '../icons/tarot.svg';

import astroConnection from '../images/astroConnection.png';
import Contact from '../contact';
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
        <Row center="sm" center="xs">
          <h2>
            {' '}
            <img
              src={universe}
              alt="astro-connection logo"
              className="project-logo"
            />
            Astro-Connection
          </h2>
        </Row>
        <Row center="sm" center="xs">
          <Col sm={12} xs={12} md={12}>
            <img
              className="mobile-gif"
              src="https://media.giphy.com/media/l0od7tThpTldB4whck/giphy.gif"
              alt="Astro-Connection Gif presentation"
              height="300px"
            />
          </Col>
        </Row>
      
        <Row center="xs" >
        
          <Col xs={8} sm={12} md={6}>
            <button
              onClick={() => {
                toggleVideo();
              }}
            >
              {videoButton}
            </button>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <iframe
              style={{ display: `${videoPlayer}` }}
              width="fit-content"
              height="fit-content"
              src="https://www.youtube.com/embed/leuY6ShOFBA?controls=0&amp;start=60"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Col>
          <Col xs={8} sm={12} md={6}>
            <button>
              {' '}
              <a
                href="https://github.com/dreamingofcode/Astro-Connect"
                target="_blank"
              >
                Github Repository{' '}
              </a>
            </button>
          </Col>
          <Col xs={8} sm={12} md={6}>
            <button>
              {' '}
              <a href="https://festive-clarke-a1ebb2.netlify.app/" target="_blank">
                Visit Website
              </a>
            </button>
          </Col>
        </Row>
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
                  A social-Networking experience infused with zodiac
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
              <button style={{ marginRight: '20px' }}>Github Repository</button>
            </a>

            <a href="https://astr-connection.herokuapp.com/" target="_blank">
              <button style={{ marginRight: '20px' }}>Visit Site</button>
            </a>

            <a
              href="https://www.youtube.com/watch?v=leuY6ShOFBA&t=60s"
              target="_blank"
            >
              <button style={{ marginRight: '0px' }}>Watch Demo</button>
            </a>
          </div>{' '}
        </Col>
        <Col sm={12} md={12} lg={6}>
          <h2 className="astro-title">
            {' '}
            <img
              src={universe}
              alt="astro-connection logo"
              className="project-logo"
            />
            Astro-Connection
          </h2>
          <p>RUBY + REACT + EXPRESS FULL-STACK WEB APP</p>
          <h5>
            A social-Networking experience infused with zodiac compatibility
            matching! Get your daily and general horoscope reading today!
          </h5>
          <h4 className="underline">Features</h4>
          <ul>
            <li style={{ marginTop: '-20px' }}>
              User Authentication via JWT token{' '}
            </li>
            <li style={{ marginTop: '-20px' }}>User account CRUD actions</li>
            <li style={{ marginTop: '-20px' }}>Daily Horoscope reading</li>
            <li style={{ marginTop: '-20px' }}>General Horsocope reading</li>
            <li style={{ marginTop: '-20px' }}>
              Horoscope-match compatibility calculator
            </li>
            <li style={{ marginTop: '-20px' }}>User image upload</li>
            <li style={{ marginTop: '-20px' }}>
              Instant messaging and chat-rooms
            </li>
            <li style={{ marginTop: '-20px' }}>
              View and filter through other user accounts
            </li>
          </ul>{' '}
          <Row>
            <Col sm={3} md={6} lg={6}>
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
            <Col sm={3} md={6} lg={6}>
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
