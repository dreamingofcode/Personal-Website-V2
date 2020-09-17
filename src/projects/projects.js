import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
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
      <h1>My Projects</h1>
      <Grid>
        <section className="projcts">
          <Row >
            <div className="travelly">
              <h2>
                <img className="project-logo" src={globe} alt="travelly logo" />
                Travelly
              </h2>

              <Travelly />
            </div>
          </Row>
          <Row >
            <div className="astro-connection">
              {/* <h2>Astro-Connection</h2> */}
              <AstroConnection />
            </div>
          </Row>
          <Row >
            <div className="watch-list">
              <h2>
                {' '}
                <img className="project-logo" src={clapperBoard} alt="watchlist logo" />
                Watch List
              </h2>
              <WatchList />
            </div>
          </Row>
        </section>
      </Grid>
    </div>
  );
}
export default Projects;
