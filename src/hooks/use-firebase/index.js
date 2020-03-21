import { useEffect, useState } from "react";

import { getFirebase } from "settings/firebase";

const useFirebase = () => {
  const [firebaseValue, setFirebaseValue] = useState({});

  useEffect(() => {
    const app = import("firebase/app");
    const auth = import("firebase/auth");
    const database = import("firebase/database");
    
    Promise.all([app, auth, database]).then(values => {
      setFirebaseValue(prevState => ({
        ...prevState,
        firebase: getFirebase(values[0]),
        auth: getFirebase(values[1]),
        database: getFirebase(values[2]),
      }));
    });
  }, []);

  return firebaseValue;
};

export default useFirebase;