import React, { Component } from 'react';
import styles from './CallToAction.scss'; // eslint-disable-line
import { Col, Grid, Row } from 'react-bootstrap';

export default class CallToAction extends Component {
  render() {
    return (
      <section className={styles.center}>
        <Grid fluid>
          <Row>
            <Col>
              <h2>
                  Tabula
              </h2>
              <p>
                  Tabula is an eternal, censorship free, public art canvas on the Ethereum blockchain
                  for visual expression and grabbing public attention
              </p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
