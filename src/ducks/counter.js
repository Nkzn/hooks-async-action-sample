export const increment = (value) => ({
  type: "increment",
  payload: {
    value
  }
});

export const decrement = (value) => ({
  type: "decrement",
  payload: {
    value
  }
});

export const update = (value) => ({
  type: "update",
  payload: {
    value
  }
});

export const reducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        value: state.value + action.payload.value
      };
    case "decrement":
        return {
          ...state,
          value: state.value - action.payload.value
        };
    case "update":
        return {
          ...state,
          value: action.payload.value
        };
    default:
      return state;
  }
}