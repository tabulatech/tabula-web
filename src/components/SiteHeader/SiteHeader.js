import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLanguage } from 'redux-i18n';
import styles from './SiteHeader.scss';
import { Col, Grid, Row } from 'react-bootstrap';

class SiteHeader extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.handleChange = ::this.handleChange;
    this.renderSmall = ::this.renderSmall;
    this.renderLarge = ::this.renderLarge;

    this.state = {
      value: 'en',
    };
  }

  handleChange(event) {
    console.log('handleChange');
    this.props.dispatch(setLanguage(event.target.value));
  }

  renderLarge() {
    return (
      <div className="row align-items-center">
        <Col>
          <a href="/" className={styles.logo} />
        </Col>
        <div className="nav">
          <div>
            <a href="slack.com">
              Slack
            </a>
          </div>
          <div>
            Twitter
          </div>
          <div>
            Telegram
          </div>
          <div>
            Github
          </div>
        </div>
      </div>
    );
  }

  renderSmall() {
    return (
      <div className="row align-items-center">
        <div className="col">
          <a href="/" className={styles.logo} />
        </div>
      </div>
    );
  }

  render() {
    const { browser } = this.props;
    console.log('details: ', browser.lessThan);

    // let content;

    // if (browser.lessThan.small) {
    //   // hamburger
    //   content = this.renderSmall();
    // } else {
    //   content = this.renderLarge();
    // }
    // {content}
    // const isEmpty = items.length === 0;
    // if (isEmpty && isFetching) {
    //   return (<h2><i>{loadingLabel}</i></h2>);
    // }

        // Twitter
        // Telegram
        // Slack
    return (
      <header>
        <Grid fluid>
          <Row>
            <Col xs={10} md={8}>
              <a href="/" className={styles.logo} />
            </Col>
            <Col xs={2} md={4}>
              <div>
                <a href="slack.com">
                  Slack
                </a>
              </div>
              <div>
                Twitter
              </div>
              <div>
                Telegram
              </div>
              <div>
                Github
              </div>
            </Col>
          </Row>
          <Col>
            {this.context.t('welcome')}

            <select value={this.state.value} onChange={this.handleChange}>
              <option value="cn">Chinese</option>
              <option value="en">English</option>
              <option value="no">Norwegian</option>
            </select>
          </Col>
        </Grid>
      </header>
    );
  }
}

SiteHeader.contextTypes = {
  t: PropTypes.func.isRequired,
};

SiteHeader.propTypes = {
//   loadingLabel: PropTypes.string.isRequired,
//   pageCount: PropTypes.number,
//   renderItem: PropTypes.func.isRequired,
//   items: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   onLoadMoreClick: PropTypes.func.isRequired,
//   nextPageUrl: PropTypes.string
  browser: PropTypes.object,
  dispatch: PropTypes.func,
};

// List.defaultProps = {
//   isFetching: true,
//   loadingLabel: 'Loading...'
// };
function mapStateToProps(state) {
  return {
    browser: state.browser,
  };
}

// function browserSelector({browser}) {
//     return {browser}
// }

export default connect(mapStateToProps)(SiteHeader);
