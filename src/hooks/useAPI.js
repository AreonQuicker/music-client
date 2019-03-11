import React, { useEffect, useState } from 'react';
import API from '../api/API';

const useAPI = qql => {
  const [state, setState] = useState({});
  const [errorState, setErrorState] = useState({});

  useEffect(() => {
    API.Query(qql)
      .then(result => {
        setState(result);
      })
      .catch(error => {
        setErrorState(error);
      });
  }, []);

  return [state, errorState];
};

export default useAPI;
