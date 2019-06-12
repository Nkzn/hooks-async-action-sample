import { increment, decrement } from "../ducks/counter";

export const incrementAsync = async ({ amount, dispatch, count }) => {
  console.log('incrementAsync', { amount, dispatch, count });
  await sleep(500); // dummy networking

  dispatch(increment(amount));
}

export const decrementAsync = async ({ amount, dispatch, count }) => {
  console.log('decrementAsync', { amount, dispatch, count });
  await sleep(500); // dummy networking

  dispatch(decrement(amount));
};

function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}