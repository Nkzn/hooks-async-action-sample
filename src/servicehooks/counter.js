import { useMemo } from 'react';
import { useStore, useSelector } from 'react-redux';
import { CounterApplicationService } from '../services/CounterApplicationService';

export const useCounterApplicationService = () => {
  const store = useStore();
  const service = useMemo(() => new CounterApplicationService(store), [ store ]);
  const count = useSelector(state => state.value);
  return { count, service };
}
