import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Travelly from './Travelly';
import AstroConnection from './AstroConnection';
import WatchList from './WatchList';
import globe from '../icons/airplane.svg';
import clapperBoard from '../icons/clapperboard.svg';
import './projects.css';
import '../responsive.css';

function Projects() {
  return (
    <div id="projects">
      <Grid>
        <h1>My Projects</h1>
        <section className="projcts">
          <div className="travelly">
            <Row >
              <h2>
                <img className="project-logo" src={globe} alt="travelly logo" />
                Travelly
              </h2>
            </Row>

            <Travelly />
          </div>
     
            <div className="astro-connection">
               {/* <h2>Astro-Connection</h2> */}

              <AstroConnection />
            </div>
            <div className="watch-list">
          <Row>
              <h2>
                {' '}
                <img
                  className="project-logo"
                  src={clapperBoard}
                  alt="watchlist logo"
                  />
                Watch List
              </h2>
                  </Row>
              <WatchList />
            </div>
        </section>
      </Grid>
    </div>
  );
}
export default Projects;
