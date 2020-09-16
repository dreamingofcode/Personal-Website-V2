import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

function Education() {
  return (
    <div className="education" id="education">
      <h1>Education</h1>
      <Grid>
        <Row>
          <Col  sm={12} md={12} lg={4}>
            <div className="education-container">
              <p>
                <strong>Flatiron School</strong>
              </p>
              <h4>Jan 6 - Apr 17 2020</h4>
              <h5>
                4 months of fully-immersive full-stack web development training,
                with approximately 600+ hours of code. Built both front end and
                back end projects in Ruby on Rails, Sinatra, mySQL, Javascript,
                HTML, CSS, and React{' '}
              </h5>
            </div>
          </Col>
          <Col  sm={12} md={12} lg={4}>
            <div className="education-container">
              <p>
                <strong>Online Courses</strong>
              </p>{' '}
              <h4>Ongoing</h4>
              <h5>
                Udemy: Javascript Algorithms & Data Structures, Udemy: The
                Creative HTML5 & CSS3 Course, Hackerank, Coursera, etc. to level
                up programming skills.
              </h5>
            </div>
          </Col>
          <Col  sm={12} md={12} lg={4}>
            <div className="education-container">
              <p>
                <strong>Triton College</strong>
              </p>
              <h4>2016-2018</h4>
              <h5>
                Associate's in Science
                <br />
                Heavy STEM focused curriculum 3.7 GPA <br />
                Dean's list and Honor Society Member{' '}
              </h5>
            </div>
          </Col>
        </Row>
        <div className="technical-skills">
          <h1>Technical Skills</h1>
          <Row center="lg" center="md" center="sm">
            <Col sm={12} md={12} lg={3}>
              <div className="skills-container">
                <i
                  class="fas fa-desktop fa-4x"
                  style={{ marginTop: '15px' }}
                ></i>
                <h4 style={{ marginTop: '-2px' }}>Front-End</h4>
                <h5> HTML5</h5>
                <h5>CSS3</h5>
                <h5>Javascript-ES6</h5>
                {/* <h5>Jquery</h5> */}
                <h5>React | Redux</h5>
              </div>
            </Col>
            <Col sm={3} md={3} lg={3}>
              <div className="skills-container">
                <i
                  class="fas fa-share-alt fa-4x"
                  style={{ marginTop: '15px' }}
                ></i>
                <h4 style={{ marginTop: '-2px' }}>
                  Server
                  <h5>NodeJS</h5>
                  <h5>Express</h5>
                  <h5>Socket.IO</h5>
                 
                </h4>
              </div>
            </Col>
            <Col sm={3} md={3} lg={3}>
              <div className="skills-container">
                <i
                  class="fas fa-database fa-4x"
                  style={{ marginTop: '15px' }}
                ></i>
                <h4 style={{ marginTop: '-2px' }}>Database</h4>
                <h5>Ruby on Rails</h5>
                <h5> PostgreSQL</h5>
                <h5>mySQL</h5>
                <h5> Cloudinary</h5>
              </div>
            </Col>
            <Col sm={3} md={3} lg={3}>
              <div className="skills-container">
                <i
                  class="fas fa-cloud-upload-alt fa-4x"
                  style={{ marginTop: '15px' }}
                ></i>{' '}
                <h4 style={{ marginTop: '-2px' }}>Deployment</h4>
                <h5> Netlify</h5>
                <h5> Heroku</h5>
              </div>
            </Col>
          </Row>
        </div>
      </Grid>
    </div>
  );
}
export default Education;
