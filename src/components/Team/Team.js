import React, { Component } from 'react';
// import { fae }
import styles from './Team.scss'; // eslint-disable-line

export default class Team extends Component {

  renderMember(image, i) {
    return (
      <div key={i} className={styles.member}>
        <div>
          <div className={styles.image} style={{ backgroundImage: `url(${image})` }}>
          </div>
        </div>
      </div>
    );
  }

  render() {
    // const {
    //   isFetching, nextPageUrl, pageCount,
    //   items, renderItem, loadingLabel
    // } = this.props;

    // const isEmpty = items.length === 0;
    // if (isEmpty && isFetching) {
    //   return (<h2><i>{loadingLabel}</i></h2>);
    // }

    // const isLastPage = !nextPageUrl;
    // if (isEmpty && isLastPage) {
    //   return (<h1><i>Nothing here!</i></h1>);
    // }
    const members = ['./face1.png'];

    return (
      <div className={styles.team}>
        <h1>
            Tabula Team
        </h1>
        {members.map(this.renderMember)}
      </div>
    );
  }
}

// List.propTypes = {
//   loadingLabel: PropTypes.string.isRequired,
//   pageCount: PropTypes.number,
//   renderItem: PropTypes.func.isRequired,
//   items: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   onLoadMoreClick: PropTypes.func.isRequired,
//   nextPageUrl: PropTypes.string
// };

// List.defaultProps = {
//   isFetching: true,
//   loadingLabel: 'Loading...'
// };
