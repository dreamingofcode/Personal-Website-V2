import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import easel from './images/easel2.png';
import brush from './images/paintBrush.png';
import me from './images/cesar.jpg';
import painting from'./images/painting.png'
import FadeIn from 'react-fade-in';
// import { withRouter } from 'react-router';

// import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div id="about-me">
      <Grid fluid>
        <h1>Who am I?</h1>
        <Row center="md" center="sm">
          <Col xs={12} sm={12} md={12} lg={3}>
            <div id="easel">
              <img className="brush" src={brush} alt="Picture of me" />
              {/* <img className="me" src={me} alt="Picture of me" /> */}
              {/* <img className="easel" src={easel} alt="Picture of me" /> */}

              <img className="easel" src={painting} alt="Picture of me" />
            </div>{' '}
          </Col>
          <Col xs={12} sm={12} md={12} lg={9}>
            <div className="initial-about-me">
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <p>
                    {' '}
                    I am a Software engineer, with a passion for self
                    improvement and an interest and curiosity for solving
                    problems using technology.
                  </p>{' '}
                </Col>
              </Row>
            </div>
            {/* <div className="about-intro"> */}
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <p>
                  In April 2020, I completed an intense 4-month software
                  engineering bootcamp. During this time, I learned full-stack
                  web development by building multiple projects, some of which
                  are listed below.
                </p>{' '}
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <p>
                  I transitioned into web development after realizing that the
                  field is highly collaborative and creative . I have always
                  been fascinated by the idea of bringing ideas and concepts to
                  live through the work and efforts of many.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <p>
                  <strong>
                    Currently I am seeking full-time employment opportunities as
                    a software engineer all while improving my abilities by
                    working as a freelance developer, volunteering, and learning
                    new technologies through online courses.{' '}
                  </strong>
                </p>{' '}
              </Col>
            </Row>
            {/* </div>{' '} */}
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
export default About;

// export default withRouter(About);
