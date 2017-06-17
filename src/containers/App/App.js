import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import I18n from 'redux-i18n';
import { SiteFooter, SiteHeader } from 'components';
import { translations } from 'lang';

import {
  navigate,
  updateRouterState,
  resetErrorMessage
} from '../../actions';
import styles from './App.scss'; // eslint-disable-line

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.updateRouterState({
      pathname: this.props.location.pathname,
      params: this.props.params
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errorMessage) {
      // handle error here
    }
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.updateRouterState({
        pathname: nextProps.location.pathname,
        params: nextProps.params
      });
    }
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage();
    e.preventDefault();
  }

  handleChange(nextValue) {
    this.props.navigate(`/${nextValue}`);
  }
  render() {
    // const { children, inputValue } = this.props;
    const { children } = this.props;
    return (
      <I18n translations={translations} initialLang="en">
        <div className={styles.app}>
          <Helmet
            title="Tabula"
            meta={[{ property: 'og:site_name', content: 'Tabula' }]}
          />
          <SiteHeader />
          <div>
            {children}
          </div>
          <SiteFooter />
        </div>
      </I18n>
      );
  }
}

App.propTypes = {
  errorMessage: PropTypes.string,
  // inputValue: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  updateRouterState: PropTypes.func.isRequired,
  resetErrorMessage: PropTypes.func.isRequired,
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  params: PropTypes.object
};

// function preload() {
//   return [
//     [sagaName]
//   ];
// }
// App.preload = preload;

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
    inputValue: state.router.pathname.substring(1)
  };
}

export default connect(mapStateToProps, {
  navigate,
  updateRouterState,
  resetErrorMessage
})(App);
