// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class FaqPage extends Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    return (
      <div>
        Faq
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
})(FaqPage);
