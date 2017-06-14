// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Team } from 'components';

class MainPage extends Component {
//   constructor(props) {
//     super(props);
//   }
// <Team />
  render() {
    return (
      <div>
        Main page container
      </div>
    );
  }

}

function mapStateToProps() {
  return {

  };
}

// FaqPage.propTypes = {

// };

export default connect(mapStateToProps, {
//   loadUserPage,
//   loadMoreStarred
})(MainPage);
