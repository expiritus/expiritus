import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-dom';

import { withFirebase } from 'hocs';

class Signout extends Component {
  signOut = () => {
    const { firebase, history } = this.props;

    console.log(history);
    firebase.auth().signOut();
  };

  render() {
    return (
      <button
        type="button"
        style={{
          marginLeft: 10,
          borderRadius: '0.5rem',
          backgroundColor: '#fff',
          border: '2px solid #ffa400',
          fontFamily: 'sans-serif',
          padding: '0.5rem 0.5rem',
          color: '#0f0f0f',
        }}
        onClick={this.signOut}
      >
        Sign Out
      </button>
    );
  }
}

Signout.propTypes = {
  firebase: PropTypes.shape({
    auth: PropTypes.func,
  }).isRequired,
};

export default withFirebase(Signout);
