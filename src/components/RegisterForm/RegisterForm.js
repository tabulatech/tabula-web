import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { setLanguage } from 'redux-i18n';
import styles from './RegisterForm.scss';  // eslint-disable-line
import { Button, FormControl, Grid } from 'react-bootstrap';
// import { Col, , Row } from 'react-bootstrap';
// import { fae }
// import styles from './Team.scss'; // eslint-disable-line
class RegisterForm extends Component {
  // constructor(props) {
  //   super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.renderSmall = ::this.renderSmall;
    // this.renderLarge = ::this.renderLarge;

    // this.state = {
    //   value: 'en',
    // };
  // }

  render() {
    // const { browser } = this.props;
    // console.log('details: ', browser.lessThan);

    // let content;

    // if (browser.lessThan.small) {
    //   // hamburger
    //   content = this.renderSmall();
    // } else {
    //   content = this.renderLarge();
    // }

    // const isEmpty = items.length === 0;
    // if (isEmpty && isFetching) {
    //   return (<h2><i>{loadingLabel}</i></h2>);
    // }

        // Twitter
        // Telegram
        // Slack
        // copyright?
        // terms of use?
    return (
      <Grid
        className={styles.registerForm}
        fluid
      >
        <form>
          <FormControl
            placeholder="Email"
            type="text"
          />
          <Button
            bsStyle="primary"
            block
          >
            Register
          </Button>
        </form>
      </Grid>
    );
  }
}

RegisterForm.contextTypes = {
  t: PropTypes.func.isRequired,
};

RegisterForm.propTypes = {
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

export default connect(mapStateToProps)(RegisterForm);
