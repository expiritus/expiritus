import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getFirebase from 'settings/firebase';
import { Spinner, SignIn } from "components";

class AuthLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firebase: null,
      authenticated: null,
    };
  }

  componentDidMount() {
    const app = import('firebase/app');
    const auth = import('firebase/auth');
    const database = import('firebase/database');

    Promise.all([app, auth, database]).then(values => {
      const firebase = getFirebase(values[0]);
      this.setState({ firebase });

      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          this.setState({ authenticated: false });
        } else {
          this.setState({ authenticated: true });
        }
      });
    });
  }

  render = () => {
    const { children } = this.props;
    const { firebase, authenticated } = this.state;

    let isAdmin = false;
    if (firebase && firebase.auth().currentUser) {
      if (firebase.auth().currentUser) {
        isAdmin = firebase.auth().currentUser.uid === process.env.ADMIN_ID;
      }
    }


    if (!firebase || authenticated === null) return <Spinner />;
    if (!isAdmin) return <div>Access denied</div>;

    return authenticated ? children : <SignIn />;
  };
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
