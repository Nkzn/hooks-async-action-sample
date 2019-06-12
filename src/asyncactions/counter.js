import { useDispatch, useSelector } from 'react-redux';
import { createCounterApplicationService } from '../services/CounterApplicationService';

export const useAsyncActions = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.value);
  const service = createCounterApplicationService(dispatch, count);
  
  const incrementAsync = (value) => {
    console.log('increment', value);
    service.incrementAsync(value);
  };

  const decrementAsync = (value) => {
    console.log('decrement', value);
    service.decrementAsync(value);
  };

  return { incrementAsync, decrementAsync };
}
