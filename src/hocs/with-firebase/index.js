import React from 'react';
import { FirebaseContext } from "contexts";

export default Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);