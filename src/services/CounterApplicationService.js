import { update } from "../ducks/counter";

export const createCounterApplicationService = (dispatch, count) => ({
  incrementAsync: async (amount) => {
    console.log('incrementAsync', { amount, dispatch, count });
    await sleep(500); // dummy networking
  
    dispatch(update(count + amount));
  },
  decrementAsync: async (amount) => {
    console.log('decrementAsync', { amount, dispatch, count });
    await sleep(500); // dummy networking
  
    dispatch(update(count - amount));
  },
});

function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}