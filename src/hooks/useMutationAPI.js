import { useEffect, useState, useMemo, useRef } from 'react';
import API from '../api/API';

const useMutationAPI = qql => {
  const [state, setState] = useState(null);
  const [errorState, setErrorState] = useState(null);
  const [loadingState, setLoading] = useState(false);
  const action = useRef(async variables => {
    setLoading(true);
    try {
      const result = await API.mutate(qql, variables);
      setState(result);
      setLoading(false);
      return result;
    } catch (error) {
      setErrorState(error);
      setLoading(false);
      throw new Error(error);
    }
  });

  return { state, action: action.current, errorState, loadingState };
};

export default useMutationAPI;
