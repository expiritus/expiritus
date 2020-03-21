import { useEffect, useState } from 'react';
import { useFirebase } from "hooks";

const useDatabase = (collectionName) => {
  const { firebase } = useFirebase();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (firebase) {
      firebase
        .database()
        .ref(collectionName)
        .once('value')
        .then(snapshot => {
          setData(snapshot.val());
        });
    }
  }, [firebase]);

  return data;
};

export default useDatabase;