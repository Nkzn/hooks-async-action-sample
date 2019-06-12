import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as service from '../services/CounterApplicationService';

export const useAsyncActions = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.value);
  
  const incrementAsync = useCallback((value) => {
    console.log('increment', value);
    service.incrementAsync({ amount: value, dispatch, count });
  }, [dispatch, count]);

  const decrementAsync = useCallback((value) => {
    console.log('decrement', value);
    service.decrementAsync({ amount: value, dispatch, count });
  }, [dispatch, count]);

  return { incrementAsync, decrementAsync };
}
