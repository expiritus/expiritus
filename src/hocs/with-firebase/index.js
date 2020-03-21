import React from 'react';
import { useFirebase } from "hooks";
import { Spinner } from "components";

export default Component => (props) => {
  const { firebase } = useFirebase();
  
  if (!firebase) return <Spinner/>;
  
  return <Component {...props} firebase={firebase} />;
};