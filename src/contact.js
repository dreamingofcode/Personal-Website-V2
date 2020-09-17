import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import me from './images/me.jpeg';
import phone from './icons/phone.svg';
import mail from './icons/mail.svg';

function Contact() {
  return (
    <div id="contact">
      <Grid>
        <h1>Contact me</h1>
        <p style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <strong>
            {' '}
            Interested in bringing a devoted and persistent engineer into your
            team? Or are you looking to hire a freelance web developer for your
            next project? Let's connect!
          </strong>
        </p>{' '}
        <Row center="xs" center="sm" center="lg">
          <Col xs={5} sm={6} md={6} lg={3}>
            <div className="contact-info">
              <img src={me} alt="headshot of cesar" className="headshot" />
            </div>{' '}
          </Col>{' '}
          <Col xs={7} sm={6} md={6} lg={4}>
            <div className="contact-info">
                <h3>Cesar Mota</h3>
              <p>
                <img
                  className="contact-symbol"
                  src={phone}
                  alt="phone symbol"
                />
                773-664-5734
              </p>
              <p>
                <img className="contact-symbol" src={mail} alt="email symbol" />
                Cesarmota@ymail.com
              </p>
            </div>
          </Col>
        </Row>{' '}
        <Row center="sm" center="xs" center="md" center="lg">
           <Col sm={12} md={12} lg={12}>
            <a
              href="https://www.linkedin.com/in/cesar-mota365/"
              target="_blank"
            >
              <h6>
                {' '}
                <i class="fab fa-linkedin fa-2x"></i> LinkedIn
              </h6>
            </a>
          {/* </Col>
           <Col sm={6} md={6} lg={4}> */}
            <a href="https://github.com/dreamingofcode" target="_blank">
              {' '}
              <h6>
                {' '}
                <i className="fab fa-github-square fa-2x"></i> Github
              </h6>
            </a>
          {/* </Col>
           <Col sm={6} md={6} lg={4}> */}
            <a
              href="https://www.canva.com/design/DADtArBgofY/owdWTSezIHEjPMvjqDH8lg/view?utm_content=DADtArBgofY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
              target="_blank"
              download
            >
              {' '}
              <h6>
                {' '}
                <i class="fas fa-file fa-2x"></i> Resume
              </h6>
            </a>{' '}
          {/* </Col>
           <Col sm={6} md={6} lg={4}> */}
            <a href="https://medium.com/@cesarmota922" target="_blank">
              <h6>
                {' '}
                <i class="fab fa-medium fa-2x"></i> Medium
              </h6>
            </a>{' '}
          {/* </Col>
           <Col sm={6} md={6} lg={4}> */}
            <a
              href="https://www.youtube.com/channel/UCsNK4HxeZ6zQFtOUA0TsbmQ/videos?view_as=subscriber"
              target="_blank"
            >
              <h6>
                {' '}
                <i class="fab fa-youtube fa-2x"></i> Youtube
              </h6>
            </a>
          </Col>
        </Row>
        <Row>
          <section class="form-section">
             <Col sm={12} md={12} lg={12}>
              <form>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required />
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required />
                <label for="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </Col>
          </section>
        </Row>
      </Grid>
    </div>
  );
}
export default Contact;
