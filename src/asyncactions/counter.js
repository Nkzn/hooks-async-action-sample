import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../ducks/counter';

export const useAsyncActions = () => {
  const dispatch = useDispatch();

  const incrementAsync = useCallback(async (value) => {
    await sleep(500); // dummy networking
    dispatch(increment(value));  
  }, [ dispatch ]);

  const decrementAsync = useCallback(async (value) => {
    await sleep(500); // dummy networking
    dispatch(decrement(value));  
  }, [ dispatch ]);

  return { incrementAsync, decrementAsync };
}

function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}