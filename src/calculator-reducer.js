import { ACTIONS } from "./actions";

export const calculatorReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }

      if (payload.digit === "." && state.currentOperand == null) {
        return {
          ...state,
          currentOperand: "0.",
        };
      }

      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATOR:
      if (state.currentOperand === "-") {
        return {
          ...state,
          currentOperand: "",
          operator: payload.operator,
        };
      }

      if (payload.operator === "-" && state.currentOperand == null) {
        return {
          ...state,
          currentOperand: payload.operator,
        };
      }

      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operator: payload.operator,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operator: payload.operator,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        currentOperand: null,
        operator: payload.operator,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.EVALUATE:
      if (
        state.operator == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operator: null,
        currentOperand: evaluate(state),
      };
  }
};

const evaluate = ({ currentOperand, previousOperand, operator }) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) {
    return "";
  }

  let computation = "";
  switch (operator) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "/":
      computation = prev / current;
      break;
    case "x":
      computation = prev * current;
      break;
  }

  return computation.toString();
};
