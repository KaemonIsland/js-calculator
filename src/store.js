import { createStore } from "redux";

let CLEAR = "CLEAR";
let EXECUTE = "EXECUTE";
let ADD_TO_EQUATION = "ADD_TO_EQUATION";

let defaultState = {
  equation: []
};

let result = equation => {
  let work = [...equation]
  console.log(work);
  let result = Number(work[0]);

  for (let i = 1; i < work.length; i += 2) {
    result = propResult(result, work[i], work[i + 1])
  }

  return result;
}

let propResult = (init, prop, num) => {
  let int = Number(num)
  switch (prop) {
    case "+":
      return init += int;
    case "-":
      return init -= int;
    case "*":
      return init *= int;
    case "/":
      return init /= int;
    default:
      return NaN;
  }
}

let calcReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CLEAR:
      return { equation: [] };
    case EXECUTE:
      return { equation: [result(state.equation)] };
    case ADD_TO_EQUATION:
      return {
        equation: [...state.equation, action.input]
      };
    default:
      return state;
  }
}

let clearInput = () => {
  return {
    type: CLEAR
  }
}

let executeEquation = () => {
  return {
    type: EXECUTE
  }
}

let addToEquation = input => {
  return {
    type: ADD_TO_EQUATION,
    input
  }
}

let store = createStore(calcReducer);

export { store, addToEquation, executeEquation, clearInput };