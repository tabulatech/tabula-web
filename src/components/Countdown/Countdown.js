import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactInterval from 'react-interval';
import { connect } from 'react-redux';

class Countdown extends Component {
  constructor(props) {
    super(props);

    // this.renderDays = ::this.renderDays;
    // this.renderHours = ::this.renderHours;
    // this.renderMinutes = ::this.renderMinutes;
    // this.renderSeconds = ::this.renderSeconds;
    this.renderTime = ::this.renderTime;
    this.handleTick = ::this.handleTick;
    this.state = {
      endDate: new Date(2017, 5, 17, 17, 0, 0),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      // endDate: new Date(2017, 6, 15, 16, 0, 0),
    };
  }

  handleTick() {
    let diff = parseInt((this.state.endDate - new Date()) / 1000, 10);
    const days = parseInt(diff / 86400, 10);
    diff -= (days * 86400);
    const hours = parseInt(diff / 3600, 10);
    diff -= (hours * 3600);
    const minutes = parseInt(diff / 60, 10);
    diff -= (minutes * 60);
    const seconds = diff;

    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });
  }

  renderTime(time) {
    return (
      <div>
        {time}
      </div>
    );
  }

  render() {
    // const { browser } = this.props;
    // console.log('details: ', browser.lessThan);

    // let content;

    // if (browser.lessThan.small) {
    //   content = this.renderSmall();
    // } else {
    //   content = this.renderLarge();
    // }
    // console.log('current date: ', this.state.currentDate);
    const t = true;
    return (
      <div className="countdown">
        <ReactInterval
          timeout={1000}
          enabled={t}
          callback={this.handleTick}
        />
        {this.renderTime(this.state.days)}
        {this.renderTime(this.state.hours)}
        {this.renderTime(this.state.minutes)}
        {this.renderTime(this.state.seconds)}
      </div>
    );
  }
}

Countdown.contextTypes = {
  t: PropTypes.func.isRequired,
};

Countdown.propTypes = {
  browser: PropTypes.object,
  dispatch: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    browser: state.browser,
  };
}

export default connect(mapStateToProps)(Countdown);
