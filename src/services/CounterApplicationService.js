import { update } from "../ducks/counter";

export class CounterApplicationService {
  constructor(store) {
    this.dispatch = store.dispatch;
    this.getState = store.getState;
  }

  async incrementAsync(amount) {
    const state = this.getState();

    await sleep(500); // dummy networking

    this.dispatch(update(state.value + amount));
  }

  async decrementAsync(amount) {
    const state = this.getState();

    await sleep(500); // dummy networking

    this.dispatch(update(state.value - amount));
  }
}

function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}