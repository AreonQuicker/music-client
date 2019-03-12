import React, { useContext, useEffect, useState } from 'react';
import SongsContext from '../context/SongsContext';
import API from '../api/API';

const useConnect = (qql, variables, dispatchAction, name = null) => {
  const { dispatch, state } = useContext(SongsContext);
  const [apiLoadingState, apiSetLoading] = useState(false);
  const [apiErrorState, apiSetError] = useState(null);

  const queryDispatch = async () => {
    apiSetLoading(true);
    try {
      const result = await API.Query(qql, variables);
      const { data } = result || {};
      if (data) {
        const value = name ? data[name] : data;
        dispatch(dispatchAction(value));
      }
      apiSetLoading(false);
    } catch (error) {
      apiSetError(error);
      apiSetLoading(false);
    }
  };

  useEffect(() => {}, []);

  return {
    action: queryDispatch,
    state,
    loading: apiLoadingState,
    error: apiErrorState,
  };
};

export default useConnect;
