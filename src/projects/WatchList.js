import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './projects.css';
import watchList from '../images/watchList.png';
const WatchList = () => {
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
          src="https://media.giphy.com/media/cm0emWTfxAmqHeAFoR/giphy.gif"
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
            style={{ display: `${videoPlayer}`, marginLeft: '80px' }}
            width="fit-content"
            height="fit-content"
            src="https://www.youtube.com/embed/g3UhHl7c57s?controls=0&amp;start=60"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <button>Github Repository</button>
        </a>
      </div> */}
      <Row>
        <Col sm={12} md={12} lg={6}>
          <p>RUBY + REACT FULL-STACK WEB APP</p>

          <h5>
            A social-Networking expirience infused with zodiac compatibility
            matching! Get your daily and general horoscope reading today!
          </h5>

          <h4 className="underline">Features</h4>
          <p style={{ marginTop: '-20px' }}>User Account CRUD actions</p>
          <p style={{ marginTop: '-20px' }}>
            Create a WatchList and add movies
          </p>
          <p style={{ marginTop: '-20px' }}>
            Mark movies in WatchList as Watched or Remove
          </p>
          <p style={{ marginTop: '-20px' }}>Upload Movies to WatchList API</p>
          <p style={{ marginTop: '-20px' }}>Filter movie genres</p>
          <Row>
            <Col>
              <h4 className="underline">Front-End</h4>
              <p style={{ marginTop: '-20px' }}>Javascript</p>
              <p style={{ marginTop: '-20px' }}>Bootstrap</p>
              <p style={{ marginTop: '-20px' }}>CSS</p>
              <p style={{ marginTop: '-20px' }}>HTML</p>
            </Col>
            <Col>
              <h4 className="underline">Back-End</h4>
              <p style={{ marginTop: '-20px' }}>Ruby on Rails</p>
              <p style={{ marginTop: '-20px' }}>PostgreSQL</p>
              <p style={{ marginTop: '-20px' }}>Node.JS</p>
            </Col>
          </Row>
        </Col>{' '}
        <Col sm={12} md={12} lg={6}>
          <div className="flip-card ">
            <div className="flip-card-inner ">
              <div className="flip-card-front ">
                <img
                  src={watchList}
                  alt="Avatar"
                  style={{ width: '513px', height: '200px' }}
                />
                <h5>
                  {' '}
                  A great tool to keep track of the movies you want to watch and
                  also movies you have already seen!
                </h5>
              </div>

              <div class="flip-card-back">
                <img
                  alt="WatchList website GIF"
                  src="https://media.giphy.com/media/cm0emWTfxAmqHeAFoR/giphy.gif"
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

            <a href="https://youtu.be/g3UhHl7c57s" target="_blank">
              <button style={{ marginRight: '50px', color: 'black' }}>
                Watch Demo
              </button>
            </a>
          </div>{' '}
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default WatchList;
