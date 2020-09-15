import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

function Education() {
  return (
    <div className="education" id="education">
      <h1>Education</h1>
      <Grid>
        <Row>
          <Col>
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
          <Col>
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
          <Col>
            <div className="education-container">
              <p>
                <strong>Triton College</strong>
              </p>
              <h4>2016-2018</h4>
              <h5>
                Associate's in Science
                <br />
                Heavy STEM focused curriculum
                3.7 GPA <br />
                Dean's list and Honor Society Member{' '}
              </h5>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
export default Education;
