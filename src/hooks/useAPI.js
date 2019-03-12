import React, { useEffect, useState } from 'react';
import API from '../api/API';

const useAPI = (qql, variables) => {
  const [state, setState] = useState(null);
  const [errorState, setErrorState] = useState(null);
  const [loadingState, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    API.Query(qql, variables)
      .then(result => {
        setState(result);
        setLoading(false);
      })
      .catch(error => {
        setErrorState(error);
        setLoading(false);
      });
  }, []);

  return [state, errorState, loadingState];
};

export default useAPI;
