import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCounterApplicationService } from '../servicehooks/counter';
import { increment, decrement } from '../ducks/counter';

export const Counters = () => {
  return (
    <div style={{ padding: 16 }}>
      <SyncCounter />
      <AsyncCounter />
    </div>
  );
};

const SyncCounter = () => {
  const count = useSelector(state => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Sync Counter</h3>
      <button onClick={() => dispatch(decrement(5))}>−5</button>
      <button onClick={() => dispatch(decrement(1))}>−1</button>
      {count}
      <button onClick={() => dispatch(increment(1))}>＋1</button>
      <button onClick={() => dispatch(increment(5))}>＋5</button>
    </div>
  );
};

const AsyncCounter = () => {
  const { count, service } = useCounterApplicationService();

  return (
    <div>
      <h3>Async Counter</h3>
      <button onClick={() => service.decrementAsync(5)}>−5</button>
      <button onClick={() => service.decrementAsync(1)}>−1</button>
      {count}
      <button onClick={() => service.incrementAsync(1)}>＋1</button>
      <button onClick={() => service.incrementAsync(5)}>＋5</button>
    </div>
  );
}