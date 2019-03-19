import { useEffect, useState, useRef } from 'react';
import API from '../api/API';

const useQueryAPI = (qql, variables, initAction = true) => {
  const [state, setState] = useState(null);
  const [errorState, setErrorState] = useState(null);
  const [loadingState, setLoading] = useState(true);

  const action = useRef(async aVariables => {
    setLoading(true);
    API.query(qql, aVariables)
      .then(result => {
        setState(result);
        setLoading(false);
      })
      .catch(error => {
        setErrorState(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (initAction) {
      action.current(variables);
    }
  }, [initAction, qql, variables]);

  return { action: action.current, state, errorState, loadingState };
};

export default useQueryAPI;
