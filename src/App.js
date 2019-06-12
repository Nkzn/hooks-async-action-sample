import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './ducks/counter';
import { Counters } from './components/Counter';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Counters />
    </Provider>
  );
}

export default App;
